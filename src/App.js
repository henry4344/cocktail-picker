import React, { useState, useEffect } from "react";
import canvasEffect from "./canvasEffect";

import "./App.css";
import Drink from "./components/Drink";

function App() {
  const [allCocktails, setAllCocktails] = useState({ undefined });
  const [cocktail, setCocktail] = useState({});
  // useImportScript(".././canvasEffect.js");

  useEffect(() => {
    const fetchCocktailData = async () => {
      const req = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      const res = await req.json();

      setAllCocktails(res);
    };
    fetchCocktailData();
  }, []);

  useEffect(() => {
    canvasEffect();
  }, []);

  const randomCocktail = async () => {
    // console.log("clicked");
    const req = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res = await req.json();
    console.log(res);
    // setCocktail(res);
    console.log(allCocktails);
    console.log(typeof allCocktails);
  };
  return (
    <>
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="App">
        <header className="App-header">
          <h1>Cocktail Picker</h1>
        </header>
        <main className="App-main">
          <ul className="display-cocktails">
            {allCocktails.drinks
              ? allCocktails.drinks.map((cocktail, index) => {
                  return <Drink cocktail={cocktail} key={cocktail.idDrink} />;
                })
              : null}
          </ul>
          {/* <Drink cocktail={cocktail} /> */}
          <button onClick={randomCocktail}>Random Cocktail</button>
        </main>
      </div>
    </>
  );
}

export default App;
