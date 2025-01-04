import { useEffect, useState } from "react";
const Recipes = ({ handleCookBtn }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="card card-compact bg-base-100  border-2"
          >
            <figure className="px-8 py-6">
              <img
                className="w-full md:h-52 rounded-xl object-cover"
                src={recipe.recipe_img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-6 ">
              <h2 className="card-title text-xl ">{recipe.recipe_name}</h2>
              <p className="text-lg">{recipe.short_description}</p>
              <hr />
              <h3 className="text-xl">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul>
                {recipe.ingredients.map((item, index) => (
                  <li
                    className="ml-8 list-disc text-base text-gray-600"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-lg">
                <div className="flex items-center gap-2  ">
                  <img
                    className="w-[20px]"
                    src="https://img.icons8.com/?size=50&id=34&format=png"
                    alt=""
                  />
                  <p>{recipe.preparing_time} minutes</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <img
                    className="w-[20px]"
                    src="https://img.icons8.com/?size=48&id=8U9W747SicvQ&format=png"
                    alt=""
                  />
                  <p>{recipe.calories} calories</p>
                </div>
              </div>
              <button
                onClick={() => handleCookBtn(recipe)}
                className="bg-green-500 rounded-xl py-1 text-white text-lg hover:bg-green-600 transition-colors transform "
              >
                Want to Cook
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
