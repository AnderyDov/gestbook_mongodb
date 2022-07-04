import "./form.css";

export default function Form() {
  let out = (
    <div className="form">
      <fieldset>
        <legend>Form to add</legend>
        <form id="noteForm" action="" method="POST">
          <div>
            <input type="text" name="name" placeholder="введтите имя" />
          </div>
          <div>
            <textarea
              form="noteForm"
              name="text"
              placeholder="введтите отзыв"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="add" />
          </div>
        </form>
      </fieldset>
    </div>
  );

  return out;
}
