//parents
import ItemList from "./ItemList";
import styles from "./FoodItems.module.css";
import { useState } from "react";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyBtn = (item, event) => {
    let selectItems = [...activeItems, item];
    setActiveItems(selectItems);
    console.log(`${item} bought`);
  };
  return (
    <ul className={`list-group list-block ${styles["list-block"]}`}>
      {items.map((item) => (
        <ItemList
          key={item}
          FItems={item}
          bought={activeItems.includes(item)}
          handleBuyBtn={(event) => onBuyBtn(item, event)}
        ></ItemList>
      ))}
    </ul>
  );
};
export default FoodItems;
