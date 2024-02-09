import { useState } from "react";
import {MdClose  } from "react-icons/md";

const LoginForm = ({ isLoginOpen, onClose, loginTrigger }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your signup form submission logic here
    console.log("Submitted:", formData);
    onClose(); // Close the signup form after submission
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ${
        isLoginOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">

        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
       
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email..."
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1   block w-full border-2 focus:border-none border-gray-700 rounded-md py-2 px-3 placeholder-gray-400 text-gray-700 "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password..."
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1   block w-full border-2 focus:border-none border-gray-700 rounded-md py-2 px-3 placeholder-gray-400 text-gray-700 "
            />
          </div>
 
          <button
            type="submit"
            className="w-full bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-red-700  focus:ring-indigo-500 mb-4"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="w-full bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-700  focus:ring-indigo-500 mb-4"
          >
            Sign Up with Google
          </button>
 
          <button
        onClick={()=>{loginTrigger(true)}}
       className="w-full bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-700  focus:ring-indigo-500"
          >
            Signup Instead (Make an account)
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
