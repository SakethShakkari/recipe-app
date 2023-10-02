import React from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import { useState } from "react";
import RecipeData from "./RecipeData";

function App() {
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recipeInfo, setRecipeInfo] = useState({ ...initialFormData });
  const [recipes, setRecipes] = useState(RecipeData);
  function handleOnChange({ target }) {
    setRecipeInfo({ ...recipeInfo, [target.name]: target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes((recipes) => [...recipes, recipeInfo]);
    setRecipeInfo({ ...initialFormData });
  };

  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipeInfo={recipeInfo}
        recipes={recipes}
        handleSubmit={handleSubmit}
        deleteRecipe={deleteRecipe}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default App;
