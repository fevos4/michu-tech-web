import React from "react";

const Create = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8 border border-primary">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <form className="flex flex-col justify-center mt-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-primary"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Create Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-primary"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#415DB1]  text-white hover:bg-slate-400 font-bold py-2 px-4 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;