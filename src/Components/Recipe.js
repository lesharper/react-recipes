import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, ingredients, image }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.ingredients}>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
      <p className={style.calories}>{Math.round(calories)} - kсal</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
