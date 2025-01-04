const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn  text-lg">Recipe Calories</a>
      </div>
      <div className="">
        <ul className="inline-block md:flex gap-4 mr-4">
          <li className="">
            <a href="">Home</a>
          </li>
          <li className="">
            <a href="">Recipe</a>
          </li>
          <li className="">
            <a href="">About</a>
          </li>
          <li className="">
            <a href="">Search</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar bg-green-500"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
