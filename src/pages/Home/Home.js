import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./home.css";
import Recipe from "./Recipe/recipes";
import { Link } from "react-router-dom";
import axios from "axios";
import * as action from "../../store/action/recipes";
import { connect } from "react-redux";

const Home = props => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    getRecipies();
    console.log("effect is getting fire props.recipes ", props.recipes);
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

  const getRecipies = () => {
    props.onInitRecipes(query);
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
        {props.recipes.map(recipe => (
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
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitRecipes: (query = "paneer") => dispatch(action.initRecipes(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
