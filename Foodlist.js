import React from "react";
import Meal from "./Meal";

export default function Food({ foodData }) {
  const nutrients = foodData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {foodData.food.map((food) => {
          return <Food key={food.id} food={food} />;
        })}
      </section>
    </main>
  );
}