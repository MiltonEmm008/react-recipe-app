import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../../components/loading/Loading";

function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddFavorite,loading, setLoading, isFavorite } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true);
      setRecipeDetailsData({});
      const fethURL = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
      try {
        const response = await fetch(fethURL);

        const data = await response.json();
        if (data) {
          setRecipeDetailsData(data.data.recipe);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getRecipeDetails();
  }, []);

  if(loading) {
    return <Loading />;
  }

  const validData =
    recipeDetailsData &&
    recipeDetailsData.image_url &&
    recipeDetailsData.ingredients &&
    recipeDetailsData.title &&
    recipeDetailsData.publisher;

  if (validData)
    return (
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsData.image_url}
              alt={`${recipeDetailsData.publisher}-${recipeDetailsData.title}`}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 dark:text-cyan-400 font-medium">
            {recipeDetailsData.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate dark:text-gray-100 text-black">
            {recipeDetailsData.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddFavorite(recipeDetailsData)}
              className={`text-sm py-3 px-5 mt-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black dark:bg-gray-200 text-white dark:text-black dark:hover:text-white cursor-pointer duration-300 ${isFavorite(recipeDetailsData.id) ? "hover:bg-red-500 dark:hover:bg-red-950" : "hover:bg-cyan-700 dark:hover:bg-cyan-950"}`}
            >
              {
                isFavorite(recipeDetailsData.id) ? "Remove from favorites" : "Save as favorite"
              }
            </button>
          </div>
          <div>
            <span className="text-2xl font-semibold text-black dark:text-gray-300">
              Ingredients
            </span>
            <ul className="flex flex-col gap-3">
              {recipeDetailsData?.ingredients.map((ingredient,index) => (
                <li key={index+ingredient.unit}>
                  <span className="text-2xl font-semibold text-black dark:text-gray-400">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black dark:text-gray-400">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Details;
