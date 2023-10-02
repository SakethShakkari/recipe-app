import React from "react";
function RecipeView({ recipesList, deleteRecipe }) {
  const output = recipesList.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>{<img alt={recipe.photo} src={recipe.photo} />}</td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button
            name="delete"
            onClick={() => deleteRecipe(index)}
            type="button"
            index={index}
            key={index}
            recipe={recipe}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return output;
}

export default RecipeView;
