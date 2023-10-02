import React from "react";
import RecipesTableHeader from "./RecipesTableHeader";
import RecipeView from "./RecipeView";
import RecipeCreate from "./RecipeCreate";

function RecipeList({
  recipeInfo,
  recipes,
  handleSubmit,
  deleteRecipe,
  handleOnChange,
}) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <form onSubmit={handleSubmit} name="create">
      <fieldset>
        <div style={{ overflow: "scroll" }} className="table-container">
          <table>
            <thead>
              <RecipesTableHeader />
            </thead>
            <tbody>
              <RecipeView recipesList={recipes} deleteRecipe={deleteRecipe} />
              <RecipeCreate
                handleOnChange={handleOnChange}
                recipeInfo={recipeInfo}
              />
            </tbody>
          </table>
        </div>
      </fieldset>
    </form>
  );
}
export default RecipeList;
