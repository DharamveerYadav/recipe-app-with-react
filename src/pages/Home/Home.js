import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./home.css";
import Recipe from "../recipes";
import { Link } from "react-router-dom";

export default function Home() {
  const APP_ID = "ada68d83";
  const APP_KEY = "3c96ec76e86f22de3f62188d51b848de";
  const API_URL = `"https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"
    `;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    getRecipies();
    console.log("effect is getting fire");
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log("printing event value ", e);
  };

  const getSearchResult = e => {
    e.preventDefault();
    setQuery(search);
    console.log("passing query value ", query);
  };

  const getRecipies = async () => {
    const recipesRes = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
      `);
    const recipes = await recipesRes.json();
    console.log("recipies fetched ", recipes);
    setRecipes(recipes.hits);
  };

  return (
    <div>
      <form onSubmit={getSearchResult} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Link
            to={{
              pathname: "/recipe-detail",
              state: {
                currRecipe: recipe
              }
            }}
          >
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              imgUrl={recipe.recipe.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
