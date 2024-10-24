import React from "react";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const Test = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(
      storage,
      `images/${new Date().getTime() + imageUpload.name}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded....");
    });
  };
  return (
    <div className=" text-white">
      <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
      <button onClick={uploadImage}>upload</button>
    </div>
  );
};

export default Test;
