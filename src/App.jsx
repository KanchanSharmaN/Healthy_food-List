import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let [foodItem, setFoodItems] = useState([
    "Peanut butter",
    "Green Vegetable",
    "Nuts, pulses, and grains",
    "Wheat germ",
    "Blueberries",
  ]);

  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItem, newFoodItem];
      setFoodItems(newItems);
      // console.log(newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="header">Healthy-Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItem}></ErrorMsg>
        <FoodItems items={foodItem}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          welll being
        </p>
      </Container>
    </>
  );
}

export default App;
