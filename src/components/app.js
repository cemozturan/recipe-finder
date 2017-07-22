import React, { Component } from 'react';
import SearchRecipes from './search-recipes';
import RecipeList from './recipe-list';
import FavoriteRecipeList from './favorite-recipe-list';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
        <FavoriteRecipeList />
      </div>
    );
  }
}

export default App;
