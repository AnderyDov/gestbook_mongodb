import "./App.css";
import List from "./list/List";
import Form from "./form/Form";
import { useState, useEffect } from "react";

export default function App() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => (res = res.json()))
      .then((res) => setNotes(res));
  }, []);

  let out = (
    <>
      <h2 className="head">Gest book</h2>
      <div className="App">
        <Form />
        <List notes={notes} />
      </div>
    </>
  );

  return out;
}
