import React, { useState, useEffect } from "react";

export default function Food({ foodData }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/food/ingredients/9266/information?apiKey=79fbe284dd6943cba263cb374ff1ff8a`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [foodData.id]);

  return (
    <article>
      <h1>{foodData.original}</h1>
      <img src={imageUrl} alt="recipe" />

      <a href={foodData.sourceUrl}>Go to Recipe</a>
    </article>
  );
}