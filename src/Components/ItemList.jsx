import styles from "./ItemList.module.css";
const ItemList = ({ FItems, bought, handleBuyBtn }) => {
  return (
    <li
      className={`${styles["list"]} list-group-item ${
        bought && "list-group-item-action  list-group-item-success"
      }`}
    >
      {FItems}
      <button
        className={`${styles.btn} btn btn-outline-primary
        }`}
        onClick={handleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};
export default ItemList;
