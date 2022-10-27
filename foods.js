import React, { useState } from "react";
import Food from "../Components/Foodlist";

function Foods() {
  const [foodData, setFoodData] = useState(null);
  const [name, setName] = useState(2000);

  function getFoodData() {
    fetch(
      `https://api.spoonacular.com/food/ingredients/9266/information?apiKey=cb1c464d94f142c08b156c5beddade8b`
    )
      .then((response) => response.json())
      .then((data) => {
        setFoodData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="text"
          placeholder="Pineapple"
          onChange={handleChange}
        />
        <button onClick={getFoodData}>Explore Foods</button>
      </section>
      {foodData && <Food foodData={foodData} />}
    </div>
  );
}

export default Foods;