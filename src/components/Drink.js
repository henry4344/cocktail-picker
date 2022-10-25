import React from "react";

const Drink = ({ cocktail }) => {
  //   const ingredients = Object.keys(cocktail).filter((key) =>
  //     key.includes("Ingredient")).map((key) => {return cocktail[key]}
  //     )};

  const ingredients = Object.entries(cocktail)
    .filter(([key]) => key.includes("Ingredient"))
    .map((ingredients) => ingredients[1])
    .filter((ingredients) => ingredients);

  if (Object.keys(cocktail).length > 0) {
    // console.log(cocktail.drinks[0]);
    // console.log(cocktail.drinks[0].strDrink);
    const imageUrl = cocktail.strDrinkThumb + "/preview";
    const drinkName = cocktail.strDrink;
    console.log(cocktail);

    return (
      <li>
        <div className="drink">
          <img src={imageUrl} alt={drinkName} />
          <div className="info">
            <h5 style={{ marginBottom: "0.5rem" }}>{drinkName}</h5>
            <ul className="ingredients-list">
              {ingredients.map((item) => {
                return (
                  <li>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </li>
    );
  }
  //   console.log(cocktail.strDrink);
  return;
};

export default Drink;
