import React from "react";

const Drink = ({ cocktail }) => {
  if (Object.keys(cocktail).length > 0) {
    // console.log(cocktail.drinks[0]);
    // console.log(cocktail.drinks[0].strDrink);
    const imageUrl = cocktail.strDrinkThumb + "/preview";
    const drinkName = cocktail.strDrink;
    console.log(drinkName);

    return (
      <li>
        <h5 style={{ marginBottom: "0.5rem" }}>{drinkName}</h5>
        <img src={imageUrl} alt={drinkName} />
      </li>
    );
  }
  //   console.log(cocktail.strDrink);
  return;
};

export default Drink;
