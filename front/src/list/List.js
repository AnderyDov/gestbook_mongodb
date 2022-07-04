import "./list.css";

export default function List({ notes }) {
  let out = (
    <div className="list">
      <ul>
        {notes.map((item) => (
          <li>
            <div>
              {item.date} <span> {item.name}</span>
            </div>
            <div className="text">{item.text}</div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );

  return out;
}
