const Hero = () => {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center text-slate-300 rounded-2xl"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/YBTWZWk/Rectangle-1.png')",
      }}
    >
      {/* Content */}
      <div className="relative text-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-green-500 py-1 px-4 rounded-2xl text-lg hover:bg-green-600 transition-colors transform">
            Explore Now
          </button>
          <button className="transition-colors transform border px-4 py-1 rounded-2xl">
            Our Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
