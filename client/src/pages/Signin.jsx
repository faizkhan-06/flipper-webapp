import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate("/"); // Redirect to home page if already signed in
    }
  }, [currentUser, navigate]);

  const validatePassword = (password) => {
    return password.length >= 0; // Ensure password is at least 8 characters long
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    try {
      const res = await axios.post("/api/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      toast.success("Sign In successful!");
      navigate("/");
    } catch (err) {
      console.error("Sign in error:", err);
      dispatch(loginFailure());
      toast.error("Sign In failed!");
    }
  };

  const handleGoogleSignIn = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/api/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
          });
      })
      .catch((err) => {
        dispatch(loginFailure());
        toast.error("Google Sign In failed!");
      });
    // try {
    //   const result = await signInWithPopup(auth, provider);
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const user = result.user;
    //   dispatch(loginSuccess({ user, token }));
    //   navigate("/");
    // } catch (error) {
    //   console.error("Google sign in error:", error);
    //   toast.error("Google Sign In failed!");
    // }
  };

  if (currentUser) {
    return null; // Prevent rendering the sign-in form if the user is already signed in
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-gray-950 border-[.5px] border-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign In
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your username and password to access your account
        </p>
        <form method="post" onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-400">Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 border-[.5px] border-gray-800 text-white rounded-lg focus:outline-none focus:border-gray-500 pr-10"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded-xl mt-4 hover:bg-blue-900 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-red-600 text-white p-2 rounded-xl mt-4 hover:bg-red-700 transition duration-200"
        >
          <FaGoogle className="mr-2" />
          Sign In with Google
        </button>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
