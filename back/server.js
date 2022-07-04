import express from "express";
import mongodb from "mongodb";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import path from "path";

let __dirname = dirname(fileURLToPath(import.meta.url));
__dirname = __dirname.split("back")[0];

const server = express();

const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.resolve(__dirname, "front/build")));

mongoClient.connect(async (err, mongo) => {
  if (!err) {
    let coll = mongo.db("gestbook").collection("notes");
    console.log("connect");

    server.get("/", async (req, res) => {
      res.sendFile(__dirname + "front/build/index.html");
    });

    server.get("/notes", async (req, res) => {
      let notes = await coll.find().toArray();
      res.send(notes);
    });

    server.post("/", async (req, res) => {
      let date = `${new Date().getDate()} ${
        new Date().toDateString().split(" ")[1]
      } ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      req.body.date = date;
      if (req.body.text !== "" && req.body.name !== "") {
        await coll.insertOne(req.body);
      }
      res.redirect("./");
    });

    server.use((req, res) => {
      res.send("error");
    });
  } else {
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
