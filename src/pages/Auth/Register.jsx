import React from "react";
import Container from "../../component/Container/Container";
import Button from "../../component/Button/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import uploadImage from "../../utils/uploadImage";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { handleRegister, GoogleSignIn } = useAuth();

  // email register
  const registerHandle = async (data) => {
    try {
      const imageURL = await uploadImage(data.image[0]);
      const res = await handleRegister(data.email, data.password);

      updateProfile(res.user, {
        displayName: data.name,
        photoURL: imageURL,
      });

      console.log("user register successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // google register
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="w-full flex items-center justify-center py-16">
      <div className="w-full max-w-md p-10 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(registerHandle)}>
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload Photo
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Register Button */}
          <button className="w-full text-center cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-2">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-800 py-2 rounded flex items-center justify-center space-x-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Register with Google</span>
        </button>

        {/* Extra */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
