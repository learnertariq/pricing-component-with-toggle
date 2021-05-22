import React from "react";
import Button from "./Button";

function Card({
  title = "Title",
  subtitle = "subtitle",
  cardCategory='primary',
  btnCategory = "secondary",
  btnText='Click me',
  items
}) {

  return (
    <div className={`card card--${cardCategory}`}>
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <h3 className="card__subtitle">{subtitle}</h3>
      </div>
      <div className="card__body">
        <ul className="list">
          {items.map((item) => (
            <li key={item} className="list-item">
              {item}
            </li>
          ))}
        </ul>
        <Button category={btnCategory} text={btnText} />
      </div>
    </div>
  );
}

export default Card;
