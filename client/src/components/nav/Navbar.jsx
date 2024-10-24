// import React from "react";
// import { IoIosSearch } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";
// import { useState } from "react";
// import { RiMenu2Line } from "react-icons/ri";
// // import { CiSettings } from "react-icons/ci";
// import { RiVideoUploadLine } from "react-icons/ri";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import profile from "../../../img/profile.jpg";
// import { logout } from "../../redux/userSlice";
// import LogoutModal from "../ui/LogoutModal";

// const Navbar = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [displayMobile, setDisplayMobile] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
//   const [logoutModalOpen, setLogoutModalOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/sign-in");
//     setProfileMenuOpen(false);
//   };

//   const toggleProfileMenu = () => {
//     setProfileMenuOpen(!profileMenuOpen);
//   };

//   const handleLogoutClick = () => {
//     setLogoutModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setLogoutModalOpen(false);
//   };

//   const handleConfirmLogout = () => {
//     handleLogout();
//     setLogoutModalOpen(false);
//   };

//   return (
//     <>
//       <nav>
//         <div className="grid grid-cols-2 justify-between md:grid-cols-3 items-center p-2 text-slate-200 w-full">
//           <div className="md:hidden flex items-center justify-start gap-5 ml-4 mt-2 hover:cursor-pointer">
//             <RiMenu2Line
//               size={20}
//               onClick={() => setDisplayMobile(!displayMobile)}
//             />
//             <Link to="/">
//               <span className="md:ml-7 flex justify-start items-center">
//                 <img src="../img/logo/logo.png" alt="" className="w-7" />
//               </span>
//             </Link>
//           </div>
//           <div className="mt-2 mr-4 flex justify-end items-center gap-4 md:hidden">
//             {searchOpen && (
//               <input
//                 type="text"
//                 className="bg-gray-800 text-white rounded p-1 text-sm"
//                 placeholder="Search..."
//                 onBlur={() => setSearchOpen(false)}
//               />
//             )}
//             <span onClick={() => setSearchOpen(!searchOpen)}>
//               <IoIosSearch
//                 size={19}
//                 className="hover:text-white hover:cursor-pointer hover:font-bold"
//               />
//             </span>

//             {currentUser ? (
//               <div className="relative">
//                 <img
//                   src={currentUser.image}
//                   alt="Profile"
//                   className="w-7 h-7 rounded-full cursor-pointer"
//                   onClick={toggleProfileMenu}
//                 />
//                 {profileMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
//                     <ul className="py-1">
//                       <li>
//                         <Link
//                           to="/edit-profile"
//                           className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
//                           onClick={() => setProfileMenuOpen(false)}
//                         >
//                           Edit Profile
//                         </Link>
//                       </li>
//                       <li>
//                         <span
//                           className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
//                           onClick={handleLogoutClick}
//                         >
//                           Logout
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <span>
//                 <Link to="sign-in">
//                   <FaRegUser
//                     size={15}
//                     className="hover:text-white hover:cursor-pointer hover:font-bold"
//                   />
//                 </Link>
//               </span>
//             )}
//           </div>
//           <Link to="/">
//             <span className="hidden md:mt-2 md:ml-7 md:flex md:justify-start md:items-center">
//               <img src="../img/logo/logo.png" alt="" className="w-7" />
//             </span>
//           </Link>
//           <ul className="hidden md:flex md:items-center md:justify-center md:gap-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) => {
//                 return isActive ? "border-b-2 border-slate-300" : "";
//               }}
//             >
//               <li className="text-sm">Home</li>
//             </NavLink>
//             <NavLink
//               to="/explore"
//               className={({ isActive }) => {
//                 return isActive ? "border-b-2 border-slate-300" : "";
//               }}
//             >
//               <li className="text-sm">Explore</li>
//             </NavLink>
//             <li className="text-sm">Channels</li>
//             <NavLink
//               to="/community"
//               className={({ isActive }) => {
//                 return isActive ? "border-b-2 border-slate-300" : "";
//               }}
//             >
//               <li className="text-sm">Community</li>
//             </NavLink>
//           </ul>
//           <div className="hidden md:flex md:gap-4 md:mr-7 md:items-center md:flex-row-reverse relative">
//             {searchOpen && (
//               <input
//                 type="text"
//                 className="bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg p-1 text-sm focus:outline-none focus:border-gray-600"
//                 placeholder="Search..."
//                 onBlur={() => setSearchOpen(false)}
//               />
//             )}
//             <span onClick={() => setSearchOpen(!searchOpen)}>
//               <IoIosSearch
//                 size={19}
//                 className="hover:text-white hover:cursor-pointer hover:font-bold"
//               />
//             </span>
//             {currentUser ? (
//               <div className="relative">
//                 <img
//                   src={currentUser.image}
//                   alt="Profile"
//                   className="w-7 h-7 rounded-full cursor-pointer"
//                   onClick={toggleProfileMenu}
//                 />
//                 {profileMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
//                     <ul className="py-1">
//                       <li>
//                         <Link
//                           to="/edit-profile"
//                           className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
//                           onClick={() => setProfileMenuOpen(false)}
//                         >
//                           Edit Profile
//                         </Link>
//                       </li>
//                       <li>
//                         <span
//                           className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
//                           onClick={handleLogoutClick}
//                         >
//                           Logout
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <span>
//                 <Link to="sign-in">
//                   <FaRegUser
//                     size={15}
//                     className="hover:text-white hover:cursor-pointer hover:font-bold"
//                   />
//                 </Link>
//               </span>
//             )}
//             <span>
//               <Link to="upload-video">
//                 <RiVideoUploadLine
//                   size={16}
//                   className="hover:text-white hover:cursor-pointer hover:font-bold"
//                 />
//               </Link>
//             </span>
//             <span>
//               <IoIosNotificationsOutline
//                 size={19}
//                 className="hover:text-white hover:cursor-pointer hover:font-bold"
//               />
//             </span>
//           </div>
//         </div>
//         <div className={displayMobile ? "" : "hidden"}>
//           <div className="md:hidden grid grid-rows-4 gap-3 pl-3 py-3 bg-gradient-to-t from-black via-gray-950 to-slate-950 rounded-lg items-center justify-start mx-6 text-slate-200 my-2 text-sm">
//             <div className="">Explore</div>
//             <div className="">Channels</div>
//             <div className="">Community</div>
//             <div className="">Settings</div>
//           </div>
//         </div>
//       </nav>
//       <LogoutModal
//         show={logoutModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirmLogout}
//       />
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../../img/profile.jpg";
import { logout } from "../../redux/userSlice";
import LogoutModal from "../ui/LogoutModal";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [displayMobile, setDisplayMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
    setProfileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseModal = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setLogoutModalOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
      setSearchOpen(false); // Close the search input
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav>
        <div className="grid grid-cols-1 justify-between md:grid-cols-3 items-center p-2 text-slate-200 w-full ">
          <div className="md:hidden flex items-center justify-between w-full px-4 mt-2 hover:cursor-pointer">
            {/* Left Section */}
            <div className="flex items-center gap-5 flex-grow">
              <RiMenu2Line
                size={20}
                onClick={() => setDisplayMobile(!displayMobile)}
                className="text-white hover:text-gray-300"
              />
              <Link to="/" className="flex items-center">
                <img
                  src="../img/logo/logo.png"
                  alt="Logo"
                  className="w-7 h-7"
                />
              </Link>
            </div>

            {/* Right Section */}
            {currentUser && (
              <div className="flex items-center gap-3">
                <span onClick={() => setSearchOpen(!searchOpen)}>
                  <IoIosSearch
                    size={19}
                    className="text-white hover:text-gray-300 hover:font-bold"
                  />
                </span>
                <div className="relative">
                  <img
                    src={currentUser.image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300"
                    onClick={toggleProfileMenu}
                  />
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <Link
                            to="/edit-profile"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                            onClick={() => setProfileMenuOpen(false)}
                          >
                            Edit Profile
                          </Link>
                        </li>
                        {currentUser && (
                          <li>
                            <Link to={`/channel-profile/${currentUser._id}`}>
                              <span className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
                                Your Channel
                              </span>
                            </Link>
                          </li>
                        )}
                        <li>
                          <span
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                            onClick={handleLogoutClick}
                          >
                            Logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/">
            <span className="hidden md:mt-2 md:ml-7 md:flex md:justify-start md:items-center">
              <img src="../img/logo/logo.png" alt="" className="w-7" />
            </span>
          </Link>
          <ul className="hidden md:flex md:items-center md:justify-center md:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-300" : ""
              }
            >
              <li className="text-sm">Home</li>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-300" : ""
              }
            >
              <li className="text-sm">Explore</li>
            </NavLink>
            <NavLink
              to="/channels"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-300" : ""
              }
            >
              <li className="text-sm">Channels</li>
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-300" : ""
              }
            >
              <li className="text-sm">Community</li>
            </NavLink>
          </ul>
          <div className="hidden md:flex md:gap-4 md:mr-7 md:items-center md:flex-row-reverse relative">
            {currentUser && (
              <>
                {/* <span onClick={() => setSearchOpen(!searchOpen)}>
                  <IoIosSearch
                    size={19}
                    className="hover:text-white hover:cursor-pointer hover:font-bold"
                  />
                </span> */}
                <div className="relative">
                  <img
                    src={currentUser.image}
                    alt="Profile"
                    className="w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300"
                    onClick={toggleProfileMenu}
                  />
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <Link
                            to="/edit-profile"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                            onClick={() => setProfileMenuOpen(false)}
                          >
                            Edit Profile
                          </Link>
                        </li>
                        {currentUser && (
                          <li>
                            <Link to={`/channel-profile/${currentUser._id}`}>
                              <span className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
                                Your Channel
                              </span>
                            </Link>
                          </li>
                        )}

                        <li>
                          <span
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                            onClick={handleLogoutClick}
                          >
                            Logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
            {!currentUser && (
              <span>
                <Link to="sign-in">
                  <FaRegUser
                    size={15}
                    className="hover:text-white hover:cursor-pointer hover:font-bold"
                  />
                </Link>
              </span>
            )}
            <span>
              <Link to="upload-video">
                <RiVideoUploadLine
                  size={16}
                  className="hover:text-white hover:cursor-pointer hover:font-bold"
                />
              </Link>
            </span>
            <span>
              <IoIosNotificationsOutline
                size={19}
                className="hover:text-white hover:cursor-pointer hover:font-bold"
              />
            </span>
            <span onClick={() => setSearchOpen(!searchOpen)}>
              <IoIosSearch
                size={19}
                className="hover:text-white hover:cursor-pointer hover:font-bold"
              />
            </span>
          </div>
        </div>
        {/* Search input positioned below the navbar */}
        {searchOpen && (
          <div className="mt-2 mx-4">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center"
            >
              <IoIosSearch
                size={20}
                className="absolute left-3 text-gray-400"
              />
              <input
                type="text"
                className="bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg p-2 pl-10 pr-10 text-sm focus:outline-none focus:border-gray-600 w-full"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => setSearchOpen(false)}
              />
              <button
                type="submit"
                className="absolute right-0 text-black border bg-white h-full w-24 rounded-tr-lg rounded-br-lg"
              >
                Search
              </button>
            </form>
          </div>
        )}
        {/* 
        <div className={displayMobile ? "" : "hidden"}>
          <div className="md:hidden grid grid-rows-6 gap-3 pl-3 py-3 bg-gradient-to-t from-black via-gray-950 to-slate-950 rounded-lg items-start justify-start mx-6 text-slate-200 my-2 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Home</div>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Explore</div>
            </NavLink>
            <NavLink
              to="/channels"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Channels</div>
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Community</div>
            </NavLink>
            <NavLink
              to="/upload-video"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Upload Video</div>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Settings</div>
            </NavLink>
          </div>
        </div> */}

        {/* Mobile Menu */}
        <div className={displayMobile ? "" : "hidden"}>
          <div className="md:hidden grid grid-rows-6 gap-3 pl-3 py-3 bg-gradient-to-t from-black via-gray-950 to-slate-950 rounded-lg items-start justify-start mx-6 text-slate-200 my-2 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Home</div>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Explore</div>
            </NavLink>
            <NavLink
              to="/channels"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Channels</div>
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Community</div>
            </NavLink>
            <NavLink
              to="/upload-video"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Upload Video</div>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              <div className="hover:text-white">Settings</div>
            </NavLink>
          </div>
        </div>
      </nav>
      <LogoutModal
        show={logoutModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default Navbar;
