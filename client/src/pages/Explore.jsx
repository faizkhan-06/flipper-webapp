import { Link } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import ExploreGrid from "../components/ui/ExploreGrid";

const Explore = () => {
  return (
    <>
      {/* <ExploreGrid /> */}
      <div className=" grid sm:grid-cols-2 gap-6 px-6 py-6 mt-6">
        <Link to="trend">
          <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-800 to-cyan-600 blur-md hover:blur-xl"></div>
            <span className="relative z-10 font-mono text-slate-300 text-5xl">
              Trending
            </span>
          </div>
        </Link>
        <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-400 to-orange-400 blur-md hover:blur-xl"></div>

          {/* Text content */}
          <span className="relative z-10 font-mono text-slate-300 text-5xl">
            Music
          </span>
        </div>

        <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500 via-amber-600 to-yellow-500 blur-md hover:blur-xl"></div>

          {/* Text content */}
          <span className="relative z-10 font-mono text-slate-300 text-5xl">
            Gaming
          </span>
        </div>

        <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-400 blur-md hover:blur-xl"></div>

          {/* Text content */}
          <span className="relative z-10 font-mono text-slate-300 text-5xl">
            Learning
          </span>
        </div>

        <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-800 via-blue-600 to-teal-600 blur-md hover:blur-xl"></div>

          {/* Text content */}
          <span className="relative z-10 font-mono text-slate-300 text-5xl">
            Art
          </span>
        </div>

        <div className="relative flex items-center justify-center h-60 rounded-3xl overflow-hidden">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-800 to-lime-800 blur-md hover:blur-xl"></div>

          {/* Text content */}
          <span className="relative z-10 font-mono text-slate-300 text-5xl">
            Fashion
          </span>
        </div>
      </div>
    </>
  );
};
export default Explore;
