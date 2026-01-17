import React from "react";
import Container from "../../component/Container/Container";
import Button from "../../component/Button/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const { GoogleSignIn, handleLogin, user } = useAuth();
  const navigate = useNavigate();

  if(user){
    navigate("/")
  }

  // login with email and pass
  const LoginHandle = async (data) => {
    try {
      await handleLogin(data.email, data.password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // login with google
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignIn();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="w-full flex items-center justify-center py-16">
      <div className="w-full max-w-md p-10 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(LoginHandle)}>
          {/* Email & Password */}
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

          {/* Login Button */}
          <button className="w-full text-center cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-2">
            Login
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
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded flex items-center justify-center space-x-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Login with Google</span>
        </button>

        {/* Don't have an account */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
