import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe"

function App() {
  return (
   <div>
     <h1>Recipes</h1>
     <RecipeList />
     <AddRecipe />
   </div>
  );
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
