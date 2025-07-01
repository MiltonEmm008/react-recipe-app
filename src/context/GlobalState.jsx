import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState({});
  const [favoriteList, setFavoritesList] = useState([]);

  function isFavorite(id) {
    return favoriteList.some((item) => item.id === id);
  }

  const urlRecipes = [
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=mango",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=cake",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pie",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=apple",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=banana",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=salad",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=soup",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=sandwich",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=steak",
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=salad",
  ];

  const navigate = useNavigate();

  async function setRandomRecipe() {
    setRecipeList([]);
    setRecipeDetailsData({});
    setLoading(true);

    const randomIndex = Math.floor(Math.random() * urlRecipes.length);

    try {
      const response = await fetch(urlRecipes[randomIndex]);

      const data = await response.json();

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSearchParams("");
    }
  }

  function handleAddFavorite(currItem) {
    let copyFavs = [...favoriteList];

    const index = copyFavs.findIndex((item) => item.id === currItem.id);

    if (index === -1) {
      copyFavs.push(currItem);
    } else {
      copyFavs.splice(index, 1);
    }

    setFavoritesList(copyFavs);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );

      const data = await response.json();

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSearchParams("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        loading,
        setLoading,
        recipeList,
        setSearchParams,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddFavorite,
        favoriteList,
        setRandomRecipe,
        isFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
