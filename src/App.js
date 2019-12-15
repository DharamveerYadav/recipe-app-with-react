import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Recipes  from './pages/recipes'
import Nav from './pages/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

function App() {
  const APP_ID = 'ada68d83';
  const APP_KEY = '3c96ec76e86f22de3f62188d51b848de';
  const API_URL = `"https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"
  `;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
   getRecipies();
   console.log("effect is getting fire");
  }, [query]);

  const updateSearch = (e) => {
   setSearch(e.target.value);
   console.log("printing event value ", e);
  };

 const getSearchResult = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log("passing query value ", query);
  };

  const getRecipies = async() => {
    const recipesRes = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
    `);
    const recipes = await recipesRes.json();
    console.log("recipies fetched ", recipes);
    setRecipes(recipes.hits);
  }


   return (
     <Router>
           <div className="App">
      <Nav />
    <form onSubmit={getSearchResult}className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
      <button className="search-button" type="submit" >Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe => (     
      <Recipes key={recipe.recipe.label} title={recipe.recipe.label} 
      calories={recipe.recipe.calories} imgUrl={recipe.recipe.image} />
  
    ))}
        </div>
    <Switch>
    <Route path="/about" component={About} />
    <Route path="/contact" component ={Contact} />    
    </Switch>
    </div>
    </Router>
  );
}



export default App;
