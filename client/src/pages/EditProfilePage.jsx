// import React, { useState } from "react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import profile from "../../img/profile.jpg"; // Replace with actual profile image URL

// const EditProfilePage = () => {
//   const [profilePic, setProfilePic] = useState(profile);
//   const [channelName, setChannelName] = useState("User Channel Name");

//   const handleProfilePicChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setProfilePic(reader.result);
//     };
//   };

//   const handleChannelNameChange = (e) => {
//     setChannelName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate API call to update profile data
//     console.log("Updating profile:", { profilePic, channelName });
//     // Example: Replace with actual API call to update profile
//     // updateProfile({ profilePic, channelName });
//   };

//   return (
//     <div className="p-4 text-gray-200  min-h-screen">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Edit Profile</h1>
//         <form
//           onSubmit={handleSubmit}
//           className=" bg-gray-950 border-[.5px] border-gray-600 rounded-lg p-6 shadow-lg"
//         >
//           {/* Profile Picture */}
//           <div className="flex items-center mb-6">
//             <label htmlFor="profile-pic" className="cursor-pointer">
//               <div className="relative">
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="h-24 w-24 rounded-full object-cover"
//                 />
//                 <div className="absolute bottom-0 right-0">
//                   <label htmlFor="profile-upload" className="cursor-pointer">
//                     <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-700 rounded-full p-2" />
//                   </label>
//                   <input
//                     id="profile-upload"
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={handleProfilePicChange}
//                   />
//                 </div>
//               </div>
//             </label>
//             <div className="ml-6">
//               <h2 className="text-xl font-semibold">Profile Picture</h2>
//               <p className="text-sm text-gray-400">
//                 Click to change profile picture
//               </p>
//             </div>
//           </div>

//           {/* Channel Name */}
//           <div className="mb-6">
//             <label
//               htmlFor="channel-name"
//               className="block text-sm font-medium mb-2"
//             >
//               Channel Name
//             </label>
//             <input
//               id="channel-name"
//               type="text"
//               value={channelName}
//               onChange={handleChannelNameChange}
//               className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-gray-950 border-[.5px] border-gray-800  px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;

// import React, { useState } from "react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import profile from "../../img/profile.jpg"; // Replace with actual profile image URL

// const EditProfilePage = () => {
//   const [profilePic, setProfilePic] = useState(profile);
//   const [channelName, setChannelName] = useState("User Channel Name");
//   const [about, setAbout] = useState("This is a description of the channel.");

//   const handleProfilePicChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setProfilePic(reader.result);
//     };
//   };

//   const handleChannelNameChange = (e) => {
//     setChannelName(e.target.value);
//   };

//   const handleAboutChange = (e) => {
//     setAbout(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate API call to update profile data
//     console.log("Updating profile:", { profilePic, channelName, about });
//     // Example: Replace with actual API call to update profile
//     // updateProfile({ profilePic, channelName, about });
//   };

//   return (
//     <div className="p-4 text-gray-200 min-h-screen">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Edit Profile</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-950 border-[.5px] border-gray-600 rounded-lg p-6 shadow-lg"
//         >
//           {/* Profile Picture */}
//           <div className="flex items-center mb-6">
//             <label htmlFor="profile-pic" className="cursor-pointer">
//               <div className="relative">
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="h-24 w-24 rounded-full object-cover"
//                 />
//                 <div className="absolute bottom-0 right-0">
//                   <label htmlFor="profile-upload" className="cursor-pointer">
//                     <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-700 rounded-full p-2" />
//                   </label>
//                   <input
//                     id="profile-upload"
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={handleProfilePicChange}
//                   />
//                 </div>
//               </div>
//             </label>
//             <div className="ml-6">
//               <h2 className="text-xl font-semibold">Profile Picture</h2>
//               <p className="text-sm text-gray-400">
//                 Click to change profile picture
//               </p>
//             </div>
//           </div>

//           {/* Channel Name */}
//           <div className="mb-6">
//             <label
//               htmlFor="channel-name"
//               className="block text-sm font-medium mb-2"
//             >
//               Channel Name
//             </label>
//             <input
//               id="channel-name"
//               type="text"
//               value={channelName}
//               onChange={handleChannelNameChange}
//               className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             />
//           </div>

//           {/* About */}
//           <div className="mb-6">
//             <label htmlFor="about" className="block text-sm font-medium mb-2">
//               About
//             </label>
//             <textarea
//               id="about"
//               value={about}
//               onChange={handleAboutChange}
//               className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-gray-950 border-[.5px] border-gray-800 px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import axios from "axios";

// const EditProfilePage = () => {
//   const { currentUser } = useSelector((state) => state.user);

//   const [profilePic, setProfilePic] = useState(currentUser.image);
//   const [channelName, setChannelName] = useState(currentUser.name);
//   const [about, setAbout] = useState(currentUser.about || "");

//   useEffect(() => {
//     setProfilePic(currentUser.image);
//     setChannelName(currentUser.name);
//     setAbout(currentUser.about || "");
//   }, [currentUser]);

//   const handleProfilePicChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setProfilePic(reader.result);
//     };
//   };

//   const handleChannelNameChange = (e) => {
//     setChannelName(e.target.value);
//   };

//   const handleAboutChange = (e) => {
//     setAbout(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const updatedUserData = {
//         name: channelName,
//         image: profilePic,
//         about,
//       };

//       const res = await axios.put(
//         `/api/users/${currentUser._id}`,
//         updatedUserData
//       );
//       console.log("Profile updated successfully:", res.data);
//     } catch (err) {
//       console.error("Error updating profile:", err);
//     }
//   };

//   return (
//     <div className="p-4 text-gray-200 min-h-screen">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Edit Profile</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-950 border-[.5px] border-gray-600 rounded-lg p-6 shadow-lg"
//         >
//           {/* Profile Picture */}
//           <div className="flex items-center mb-6">
//             <label htmlFor="profile-pic" className="cursor-pointer">
//               <div className="relative">
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="h-24 w-24 rounded-full object-cover"
//                 />
//                 <div className="absolute bottom-0 right-0">
//                   <label htmlFor="profile-upload" className="cursor-pointer">
//                     <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-700 rounded-full p-2" />
//                   </label>
//                   <input
//                     id="profile-upload"
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={handleProfilePicChange}
//                   />
//                 </div>
//               </div>
//             </label>
//             <div className="ml-6">
//               <h2 className="text-xl font-semibold">Profile Picture</h2>
//               <p className="text-sm text-gray-400">
//                 Click to change profile picture
//               </p>
//             </div>
//           </div>

//           {/* Channel Name */}
//           <div className="mb-6">
//             <label
//               htmlFor="channel-name"
//               className="block text-sm font-medium mb-2"
//             >
//               Channel Name
//             </label>
//             <input
//               id="channel-name"
//               type="text"
//               value={channelName}
//               onChange={handleChannelNameChange}
//               className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             />
//           </div>

//           {/* About */}
//           <div className="mb-6">
//             <label htmlFor="about" className="block text-sm font-medium mb-2">
//               About
//             </label>
//             <textarea
//               id="about"
//               value={about}
//               onChange={handleAboutChange}
//               className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-gray-950 border-[.5px] border-gray-800 px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiOutlinePhotograph } from "react-icons/hi";
import { client, storage } from "../appwrite";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import toast from "react-hot-toast";

const EditProfilePage = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState(currentUser.image);
  const [channelName, setChannelName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about || "");

  const dispatch = useDispatch();

  useEffect(() => {
    setProfilePic(currentUser.image);
    setChannelName(currentUser.name);
    setAbout(currentUser.about || "");
  }, [currentUser]);

  const uploadFile = async (file) => {
    const bucketId = import.meta.env.VITE_STORAGE_IMAGES_BUCKET;
    try {
      const response = await storage.createFile(bucketId, "unique()", file);
      const fileId = response.$id;
      const publicUrl = `${client.config.endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${client.config.project}`;
      return publicUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const publicUrl = await uploadFile(file);
        setProfilePic(publicUrl);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleChannelNameChange = (e) => {
    setChannelName(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUserData = {
        name: channelName,
        image: profilePic,
        about,
      };

      const res = await axios.put(
        `/api/users/${currentUser._id}`,
        updatedUserData
      );
      dispatch(updateUser(updatedUserData));
      toast.success("Profile updated successfully");
      // console.log("Profile updated successfully:", res.data);
    } catch (err) {
      toast.error("Error updating profile");
      // console.error("Error updating profile:", err);
    }
  };
  // console.log(currentUser);

  return (
    <div className="p-4 text-gray-200 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Edit Profile</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-950 border-[.5px] border-gray-600 rounded-lg p-6 shadow-lg"
        >
          {/* Profile Picture */}
          <div className="flex items-center mb-6">
            <label htmlFor="profile-pic" className="cursor-pointer">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0">
                  <label htmlFor="profile-upload" className="cursor-pointer">
                    <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-700 rounded-full p-2" />
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePicChange}
                  />
                </div>
              </div>
            </label>
            <div className="ml-6">
              <h2 className="text-xl font-semibold">Profile Picture</h2>
              <p className="text-sm text-gray-400">
                Click to change profile picture
              </p>
            </div>
          </div>

          {/* Channel Name */}
          <div className="mb-6">
            <label
              htmlFor="channel-name"
              className="block text-sm font-medium mb-2"
            >
              Channel Name
            </label>
            <input
              id="channel-name"
              type="text"
              value={channelName}
              onChange={handleChannelNameChange}
              className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              required
            />
          </div>

          {/* About */}
          <div className="mb-6">
            <label htmlFor="about" className="block text-sm font-medium mb-2">
              About
            </label>
            <textarea
              id="about"
              value={about}
              onChange={handleAboutChange}
              className="bg-gray-950 border-[.5px] border-gray-800 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-950 border-[.5px] border-gray-800 px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
