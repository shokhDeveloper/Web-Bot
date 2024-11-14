import { useEffect, useState } from "react";
import "./card.css";
import { Button } from "../Button";
export const Card = (props) => {
  const {id, name, price, image, addItem, removeItem } = props;
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1)
    addItem(id)
  }
  const handleDecrement = () => {
    if(count > 0){
      setCount((prev) => prev-1)
      removeItem(id)
    }
  }
  return (
    <div className="card">
      <span className={count ? "card_badge" : "card-hide"}>{count}</span>
      <div className="image__container">
        <img className="card__image" src={image}></img>
      </div>
      <div className="card_body">
        <h1 className="card__name">{name}</h1>
        <p className="card__price">{price} so'm</p>
      </div>
      <div className="btn_container">
          <Button title="+" shopItem={() => handleIncrement()}/>
          <Button title="-" shopItem={() => handleDecrement()}/>
      </div>
    </div>
  )
};