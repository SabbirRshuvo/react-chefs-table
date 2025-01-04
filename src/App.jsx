import { useState } from "react";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import Recipe from "./Layout/Recipe";
import Recipes from "./Layout/Recipes";
import Sidebar from "./Layout/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addTotalTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  const handleCookBtn = (recipe) => {
    const existsRecipe = recipeQueue.find(
      (previousRecipeQues) => previousRecipeQues.recipe_id === recipe.recipe_id
    );
    if (!existsRecipe) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("alredy have this one");
    }
  };
  // remove btn
  const handleRemove = (id) => {
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    // remove from cook table
    const updateQueuse = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updateQueuse);
    setPreparedRecipe([...preparedRecipe, deleteRecipe]);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <Recipe />
        <section className="flex flex-col md:flex-row gap-6 my-10">
          <Recipes handleCookBtn={handleCookBtn} />
          <Sidebar
            preparedRecipe={preparedRecipe}
            handleRemove={handleRemove}
            recipeQueue={recipeQueue}
            addTotalTimeAndCalories={addTotalTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </section>
      </div>
    </>
  );
}

export default App;
