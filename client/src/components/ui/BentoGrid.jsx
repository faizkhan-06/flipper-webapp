const BentoGrid = () => {
  return (
    <div className=" mt-10 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/trending.jpg"
          alt="Trending"
          className="object-cover rounded-3xl h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Trending
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/music2.jpg"
          alt="Music"
          className="object-cover rounded-3xl h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Music
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/gaming.jpg"
          alt="Gaming"
          className="object-cover rounded-3xl h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Gaming
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/learning.png"
          alt="Learning"
          className="object-cover rounded-3xl h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Learning
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/art.png"
          alt="Art"
          className="object-cover rounded-lg h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Art
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img
          src="../img/exploreGrid/fashion.jpeg"
          alt="Fashion"
          className="object-cover rounded-3xl h-full w-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white font-bold text-xl">
          Fashion
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
