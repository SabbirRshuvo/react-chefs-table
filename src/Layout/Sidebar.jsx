const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  addTotalTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl p-2 ">
      <h2 className="text-2xl font-semibold text-center">
        Want to Cook..0{recipeQueue.length}
      </h2>
      {/* fist col */}
      <div className="overflow-x-auto my-6 ">
        <table className="table text-lg">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover ">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      addTotalTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="bg-green-500 hover:bg-green-600 transition-colors transform py-1 px-3 rounded-xl text-white text-base"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* second row */}
      <h2 className="text-2xl font-semibold text-center">
        Currentyl Cooking..0{preparedRecipe.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td>Total Time = {totalTime} minutes</td>
              <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
