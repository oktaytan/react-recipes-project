import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    recipes: [],
    url: './data.json',
    search: ''
  };

  getRecipes = () => {
    const data = require('./data.json');
    this.setState({
      recipes: data.recipes
    });
  };

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.target.value === '') {
      this.getRecipes();
    } else {
      const { recipes } = this.state;
      const searcValue = e.target.value.toLowerCase();
      let filteredRecipes = recipes.filter(recipe => {
        return (
          recipe.title
            .toLowerCase()
            .slice()
            .indexOf(searcValue) !== -1
        );
      });
      this.setState({
        recipes: filteredRecipes
      });
    }
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path='/'
          render={props => (
            <RecipeList
              {...props}
              recipes={this.state.recipes}
              value={this.state.search}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          path='/details/:id'
          render={props => (
            <RecipeDetails {...props} recipes={this.state.recipes} />
          )}
        />
      </Router>
    );
  }
}

export default App;
