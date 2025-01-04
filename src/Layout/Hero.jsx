import image from "../images/bg-table.jpg";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center  flex items-center justify-center min-h-[50vh]  my-10">
      <div className="absolute">
        <img className="rounded-xl" src={image} alt="" />
      </div>

      <div className="relative text-center text-slate-200  px-4  ">
        <h1 className="sm:text-2xl md:text-4xl font-bold mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="md:text-lg sm:text-sm mb-6">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex justify-center gap-4 ">
          <button className="bg-green-500 hover:bg-green-600  px-4 py-1 rounded-xl text-black font-semibold  transition transform">
            Explore Now
          </button>
          <button className="bg-transparent text-black border py-1 px-4 rounded-xl">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
