import React, { useState, useEffect } from "react";
import "./App.css";
import Drink from "./components/Drink";

function App() {
  const [allCocktails, setAllCocktails] = useState({ undefined });
  const [cocktail, setCocktail] = useState({});

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

  const randomCocktail = async () => {
    console.log("clicked");
    const req = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res = await req.json();
    console.log(res);
    setCocktail(res);
    console.log(allCocktails);
    console.log(typeof allCocktails);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cocktail Picker</h1>
      </header>
      <main className="App-main">
        <ul className="display-cocktails">
          {allCocktails.drinks
            ? allCocktails.drinks.map((cocktail) => {
                console.log(cocktail);
                return <Drink cocktail={cocktail} />;
              })
            : null}
        </ul>
        {/* <Drink cocktail={cocktail} /> */}
        <button onClick={randomCocktail}>Random Cocktail</button>
      </main>
    </div>
  );
}

export default App;
