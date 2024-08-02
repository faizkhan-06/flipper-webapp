// import React, { useEffect, useState } from "react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import toast from "react-hot-toast";

// const UploadVideoPage = () => {
//   const [videoTitle, setVideoTitle] = useState("");
//   const [videoDescription, setVideoDescription] = useState("");
//   const [videoThumbnail, setVideoThumbnail] = useState(null);
//   const [previewThumbnail, setPreviewThumbnail] = useState(null);
//   const [videoFile, setVideoFile] = useState(null);
//   const [category, setCategory] = useState("Music");
//   const [tags, setTags] = useState([]);
//   const [imgPrec, setImgPrec] = useState(0);
//   const [videoPrec, setVideoPrec] = useState(0);

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoThumbnail(file);
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setPreviewThumbnail(reader.result);
//       };
//     }
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     setVideoFile(file);
//   };

//   const handleTagInputChange = (e) => {
//     const input = e.target.value;
//     const newTags = input
//       .split(",")
//       .map((tag) => tag.trim())
//       .filter((tag) => tag !== "");
//     setTags(newTags);
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setTags(tags.filter((tag) => tag !== tagToRemove));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("videoTitle", videoTitle);
//     formData.append("videoDescription", videoDescription);
//     formData.append("videoThumbnail", videoThumbnail);
//     formData.append("videoFile", videoFile);
//     formData.append("category", category);
//     formData.append("tags", JSON.stringify(tags));

//     // Simulate video upload or API call
//     console.log("Uploading video:", Object.fromEntries(formData));
//     // Example: Replace with actual API call to upload video
//     // uploadVideo(formData);
//   };
//   const uploadFile = (file) => {
//     const storage = getStorage();
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, fileName);
//     uploadTask.on('state_changed',
//       (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//           case 'paused':
//             console.log('Upload is paused');
//             break;
//           case 'running':
//             console.log('Upload is running');
//             break;
//         }
//       },
//       (error) => {
//         toast.error(error)
//       }
//   };
//   useEffect(() => {
//     uploadFile(videoFile);
//   }, [videoFile]);
//   useEffect(() => {
//     uploadFile(previewThumbnail);

//   }, [previewThumbnail]);
//   return (
//     <div className="p-4 text-gray-200 min-h-screen">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Upload Video</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-950 border-[.5px] border-gray-700 rounded-lg p-6 shadow-lg"
//         >
//           {/* Video Title */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-title"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Title
//             </label>
//             <input
//               id="video-title"
//               type="text"
//               value={videoTitle}
//               onChange={(e) => setVideoTitle(e.target.value)}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             />
//           </div>

//           {/* Video Description */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-description"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Description
//             </label>
//             <textarea
//               id="video-description"
//               value={videoDescription}
//               onChange={(e) => setVideoDescription(e.target.value)}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Video Category */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-category"
//               className="block text-sm font-medium mb-2"
//             >
//               Category
//             </label>
//             <select
//               id="video-category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             >
//               <option value="Music">Music</option>
//               <option value="Gaming">Gaming</option>
//               <option value="Learning">Learning</option>
//               <option value="Art">Art</option>
//               <option value="Fashion">Fashion</option>
//             </select>
//           </div>

//           {/* Tags */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-tags"
//               className="block text-sm font-medium mb-2"
//             >
//               Tags (comma separated)
//             </label>
//             <input
//               id="video-tags"
//               type="text"
//               onChange={handleTagInputChange}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               placeholder="Enter tags separated by commas"
//             />
//             <div className="mt-2 flex flex-wrap">
//               {tags.map((tag, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center bg-gray-900 text-white rounded-lg px-3 py-1 mr-2 mb-2"
//                 >
//                   <span>{tag}</span>
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveTag(tag)}
//                     className="ml-2 text-slate-400"
//                   >
//                     x
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Video Thumbnail */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-thumbnail"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Thumbnail
//             </label>
//             <div className="flex items-center">
//               {previewThumbnail ? (
//                 <img
//                   src={previewThumbnail}
//                   alt="Thumbnail Preview"
//                   className="h-24 w-24 rounded-lg object-cover mr-4"
//                 />
//               ) : (
//                 <div className="h-24 w-24 rounded-lg bg-gray-900 flex items-center justify-center mr-4">
//                   <HiOutlinePhotograph className="h-12 w-12 text-gray-300" />
//                 </div>
//               )}
//               <label htmlFor="thumbnail-upload" className="cursor-pointer">
//                 <div className="flex items-center">
//                   <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-900 rounded-full p-2 mr-2" />
//                   <span className="text-sm text-gray-400">
//                     Upload Thumbnail
//                   </span>
//                 </div>
//               </label>
//               <input
//                 id="thumbnail-upload"
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleThumbnailChange}
//               />
//             </div>
//           </div>

//           {/* Video File */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-file"
//               className="block text-sm font-medium mb-2"
//             >
//               Video File
//             </label>
//             <input
//               id="video-file"
//               type="file"
//               accept="video/*"
//               className="hidden"
//               onChange={handleVideoChange}
//               required
//             />
//             <label
//               htmlFor="video-file"
//               className="cursor-pointer bg-gray-950 border-[.5px] border-gray-800 text-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-gray-900"
//             >
//               Upload Video
//             </label>
//             {videoFile && (
//               <span className="ml-4 text-gray-400">{videoFile.name}</span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-slate-300"
//           >
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadVideoPage;

// import React, { useEffect, useState } from "react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import toast from "react-hot-toast";

// const UploadVideoPage = () => {
//   const [inputs, setInputs] = useState({});
//   const [videoThumbnail, setVideoThumbnail] = useState(null);
//   const [previewThumbnail, setPreviewThumbnail] = useState(null);
//   const [videoFile, setVideoFile] = useState(null);
//   const [category, setCategory] = useState("Music");
//   const [tags, setTags] = useState([]);
//   const [imgPrec, setImgPrec] = useState(0);
//   const [videoPrec, setVideoPrec] = useState(0);

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoThumbnail(file);
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setPreviewThumbnail(reader.result);
//       };
//     }
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     setVideoFile(file);
//   };

//   const handleTagInputChange = (e) => {
//     const input = e.target.value;
//     const newTags = input
//       .split(",")
//       .map((tag) => tag.trim())
//       .filter((tag) => tag !== "");
//     setTags(newTags);
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setTags(tags.filter((tag) => tag !== tagToRemove));
//   };

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("videoTitle", videoTitle);
//     formData.append("videoDescription", videoDescription);
//     formData.append("videoThumbnail", videoThumbnail);
//     formData.append("videoFile", videoFile);
//     formData.append("category", category);
//     formData.append("tags", JSON.stringify(tags));

//     // Simulate video upload or API call
//     console.log("Uploading video:", Object.fromEntries(formData));
//     // Example: Replace with actual API call to upload video
//     // uploadVideo(formData);
//   };

//   const uploadFile = (file, urlType) => {
//     if (!file) return;

//     const storage = getStorage();
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         urlType === "imageUrl" ? setImgPrec(progress) : setVideoPrec(progress);
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         toast.error(error.message);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setInputs((prev) => {
//             return { ...prev, urlType: downloadURL };
//           });
//         });
//       }
//     );
//   };

//   useEffect(() => {
//     if (videoFile) {
//       uploadFile(videoFile);
//     }
//   }, [videoFile]);

//   useEffect(() => {
//     if (videoThumbnail) {
//       uploadFile(videoThumbnail);
//     }
//   }, [videoThumbnail]);

//   return (
//     <div className="p-4 text-gray-200 min-h-screen">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Upload Video</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-950 border-[.5px] border-gray-700 rounded-lg p-6 shadow-lg"
//         >
//           {/* Video Title */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-title"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Title
//             </label>
//             <input
//               id="video-title"
//               type="text"
//               name="title"
//               onChange={handleChange}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             />
//           </div>

//           {/* Video Description */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-description"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Description
//             </label>
//             <textarea
//               id="video-description"
//               name="desc"
//               onChange={handleChange}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               rows="4"
//               required
//             />
//           </div>

//           {/* Video Category */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-category"
//               className="block text-sm font-medium mb-2"
//             >
//               Category
//             </label>
//             <select
//               id="video-category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               required
//             >
//               <option value="Music">Music</option>
//               <option value="Gaming">Gaming</option>
//               <option value="Learning">Learning</option>
//               <option value="Art">Art</option>
//               <option value="Fashion">Fashion</option>
//             </select>
//           </div>

//           {/* Tags */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-tags"
//               className="block text-sm font-medium mb-2"
//             >
//               Tags (comma separated)
//             </label>
//             <input
//               id="video-tags"
//               type="text"
//               onChange={handleTagInputChange}
//               className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
//               placeholder="Enter tags separated by commas"
//             />
//             <div className="mt-2 flex flex-wrap">
//               {tags.map((tag, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center bg-gray-900 text-white rounded-lg px-3 py-1 mr-2 mb-2"
//                 >
//                   <span>{tag}</span>
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveTag(tag)}
//                     className="ml-2 text-slate-400"
//                   >
//                     x
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Video Thumbnail */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-thumbnail"
//               className="block text-sm font-medium mb-2"
//             >
//               Video Thumbnail
//             </label>
//             <div className="flex items-center">
//               {previewThumbnail ? (
//                 <img
//                   src={previewThumbnail}
//                   alt="Thumbnail Preview"
//                   className="h-24 w-24 rounded-lg object-cover mr-4"
//                 />
//               ) : (
//                 <div className="h-24 w-24 rounded-lg bg-gray-900 flex items-center justify-center mr-4">
//                   <HiOutlinePhotograph className="h-12 w-12 text-gray-300" />
//                 </div>
//               )}
//               <label htmlFor="thumbnail-upload" className="cursor-pointer">
//                 <div className="flex items-center">
//                   <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-900 rounded-full p-2 mr-2" />
//                   <span className="text-sm text-gray-400">
//                     Upload Thumbnail
//                   </span>
//                 </div>
//               </label>
//               {imgPrec > 0 ? (
//                 "Uploading : " + imgPrec
//               ) : (
//                 <input
//                   id="thumbnail-upload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleThumbnailChange}
//                 />
//               )}
//             </div>
//           </div>

//           {/* Video File */}
//           <div className="mb-6">
//             <label
//               htmlFor="video-file"
//               className="block text-sm font-medium mb-2"
//             >
//               Video File
//             </label>
//             {videoPrec > 0 ? (
//               "Uploading : " + videoPrec
//             ) : (
//               <input
//                 id="video-file"
//                 type="file"
//                 accept="video/*"
//                 className="hidden"
//                 onChange={handleVideoChange}
//                 required
//               />
//             )}
//             <label
//               htmlFor="video-file"
//               className="cursor-pointer bg-gray-950 border-[.5px] border-gray-800 text-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-gray-900"
//             >
//               Upload Video
//             </label>
//             {videoFile && (
//               <span className="ml-4 text-gray-400">{videoFile.name}</span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-slate-300"
//           >
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadVideoPage;

import React, { useEffect, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import toast from "react-hot-toast";

const UploadVideoPage = () => {
  const [inputs, setInputs] = useState({});
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const [previewThumbnail, setPreviewThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [category, setCategory] = useState("Music");
  const [tags, setTags] = useState([]);
  const [imgPrec, setImgPrec] = useState(0);
  const [videoPrec, setVideoPrec] = useState(0);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoThumbnail(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewThumbnail(reader.result);
      };
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleTagInputChange = (e) => {
    const input = e.target.value;
    const newTags = input
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    setTags(newTags);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoFile && videoThumbnail) {
      // Ensure both video and thumbnail are uploaded
      uploadFile(videoThumbnail, "imageUrl");
      uploadFile(videoFile, "videoUrl");
    } else {
      toast.error("Please select both video and thumbnail files.");
    }
  };

  const uploadFile = (file, urlType) => {
    if (!file) return;

    const storage = getStorage();
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imageUrl" ? setImgPrec(progress) : setVideoPrec(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
          if (urlType === "videoUrl") {
            // Only log and reset form once the video URL is set
            console.log("Uploading video:", inputs);
            // Reset form (optional)
            // setInputs({});
            // setVideoThumbnail(null);
            // setPreviewThumbnail(null);
            // setVideoFile(null);
            // setTags([]);
            // setImgPrec(0);
            // setVideoPrec(0);
          }
        });
      }
    );
  };

  useEffect(() => {
    if (videoFile) {
      uploadFile(videoFile, "videoUrl");
    }
  }, [videoFile]);

  useEffect(() => {
    if (videoThumbnail) {
      uploadFile(videoThumbnail, "imageUrl");
    }
  }, [videoThumbnail]);

  return (
    <div className="p-4 text-gray-200 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Video</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-950 border-[.5px] border-gray-700 rounded-lg p-6 shadow-lg"
        >
          {/* Video Title */}
          <div className="mb-6">
            <label
              htmlFor="video-title"
              className="block text-sm font-medium mb-2"
            >
              Video Title
            </label>
            <input
              id="video-title"
              type="text"
              name="title"
              onChange={handleChange}
              className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              required
            />
          </div>

          {/* Video Description */}
          <div className="mb-6">
            <label
              htmlFor="video-description"
              className="block text-sm font-medium mb-2"
            >
              Video Description
            </label>
            <textarea
              id="video-description"
              name="desc"
              onChange={handleChange}
              className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              rows="4"
              required
            />
          </div>

          {/* Video Category */}
          <div className="mb-6">
            <label
              htmlFor="video-category"
              className="block text-sm font-medium mb-2"
            >
              Category
            </label>
            <select
              id="video-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              required
            >
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
              <option value="Learning">Learning</option>
              <option value="Art">Art</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label
              htmlFor="video-tags"
              className="block text-sm font-medium mb-2"
            >
              Tags (comma separated)
            </label>
            <input
              id="video-tags"
              type="text"
              onChange={handleTagInputChange}
              className="bg-gray-950 text-white border-[.5px] border-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-gray-900"
              placeholder="Enter tags separated by commas"
            />
            <div className="mt-2 flex flex-wrap">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-900 text-white rounded-lg px-3 py-1 mr-2 mb-2"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-slate-400"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="mb-6">
            <label
              htmlFor="video-thumbnail"
              className="block text-sm font-medium mb-2"
            >
              Video Thumbnail
            </label>
            <div className="flex items-center">
              {previewThumbnail ? (
                <img
                  src={previewThumbnail}
                  alt="Thumbnail Preview"
                  className="h-24 w-24 rounded-lg object-cover mr-4"
                />
              ) : (
                <div className="h-24 w-24 rounded-lg bg-gray-900 flex items-center justify-center mr-4">
                  <HiOutlinePhotograph className="h-12 w-12 text-gray-300" />
                </div>
              )}
              <label htmlFor="thumbnail-upload" className="cursor-pointer">
                <div className="flex items-center">
                  <HiOutlinePhotograph className="h-8 w-8 text-gray-300 bg-gray-900 rounded-full p-2 mr-2" />
                  <span className="text-sm text-gray-400">
                    Upload Thumbnail
                  </span>
                </div>
              </label>
              <input
                id="thumbnail-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailChange}
              />
            </div>
            {imgPrec > 0 && (
              <div className="mt-2">
                <progress
                  value={imgPrec}
                  max="100"
                  className="w-full rounded-lg"
                />
                <span>{imgPrec.toFixed(2)}%</span>
              </div>
            )}
          </div>

          {/* Video File */}
          <div className="mb-6">
            <label
              htmlFor="video-file"
              className="block text-sm font-medium mb-2"
            >
              Video File
            </label>
            <input
              id="video-file"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoChange}
              required
            />
            <label
              htmlFor="video-file"
              className="cursor-pointer bg-gray-950 border-[.5px] border-gray-800 text-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              Upload Video
            </label>
            {videoFile && (
              <span className="ml-4 text-gray-400">{videoFile.name}</span>
            )}
            {videoPrec > 0 && (
              <div className="mt-2">
                <progress
                  value={videoPrec}
                  max="100"
                  className="w-full rounded-lg"
                />
                <span>{videoPrec.toFixed(2)}%</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-slate-300"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoPage;
