import React from "react";
import Drink from "./Drink";

const MultipleDrinks = ({ cocktails }) => {
  if (Object.keys(cocktails).length > 0) {
    console.log(cocktails);
    console.log(cocktails.drinks.length);
  }
  return;
};

export default MultipleDrinks;
