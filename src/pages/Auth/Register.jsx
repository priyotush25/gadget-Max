import React from "react";
import Container from "../../component/Container/Container";
import Button from "../../component/Button/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = () => {};

  return (
    <Container className="w-full flex items-center justify-center py-16">
      <div className="w-full max-w-md p-10 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
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
          <Button className="w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-2">
            Register
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded flex items-center justify-center space-x-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Register with Google</span>
        </Button>

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
