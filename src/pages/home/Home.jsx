import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import Loading from "../../components/loading/Loading";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => (
          <RecipeItem key={`${item.id}-${item.publisher}`} item={item} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black dark:text-gray-200 font-extrabold">
            Welcome to recipe app, try to search some recipes and see the details
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
