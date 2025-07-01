import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import RecipeItem from '../../components/recipe-item/RecipeItem'

function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => (
          <RecipeItem key={`${item.id}-${item.publisher}`} item={item} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black dark:text-gray-200 font-extrabold">
            Nothing to show, please add some favorites
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites