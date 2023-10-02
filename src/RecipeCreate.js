import React from "react";
function RecipeCreate({ handleOnChange, recipeInfo }) {
  const formPlaceHolders = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };

  return (
    <tr>
      <td>
        <input
          name="name"
          required={true}
          id="name"
          placeholder={formPlaceHolders.name}
          onChange={handleOnChange}
          value={recipeInfo.name}
        ></input>
      </td>
      <td>
        <input
          name="cuisine"
          required={true}
          id="cuisine"
          placeholder={formPlaceHolders.cuisine}
          onChange={handleOnChange}
          value={recipeInfo.cuisine}
        ></input>
      </td>
      <td>
        <input
          name="photo"
          required={true}
          type="url"
          id="photo"
          placeholder={formPlaceHolders.photo}
          onChange={handleOnChange}
          value={recipeInfo.photo}
        ></input>
      </td>
      <td className="scrollable">
        <textarea
          name="ingredients"
          required={true}
          id="ingredients"
          placeholder={formPlaceHolders.ingredients}
          onChange={handleOnChange}
          value={recipeInfo.ingredients}
        ></textarea>
      </td>
      <td className="scrollable">
        <textarea
          name="preparation"
          required={true}
          id="preparation"
          placeholder={formPlaceHolders.preparation}
          onChange={handleOnChange}
          value={recipeInfo.preparation}
        ></textarea>
      </td>
      <td>
        <button name="create" type="submit">
          Create
        </button>
      </td>
    </tr>
  );
}
export default RecipeCreate;
