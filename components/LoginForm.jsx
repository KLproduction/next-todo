import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GoogleSignIn } from "./googleSignIn";
import { GitHubSignIn } from "./gitHubSignIn";
import { auth } from "../auth"
import { redirect } from "next/navigation";

const LoginForm = async () => {
  const session = await auth()
  if (session?.user) redirect('/')
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 flex flex-col">
      <form >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-900 font-bold"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input px-4 py-2 w-full border rounded border-gray-300 focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-gray-900 font-bold"
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="form-input px-4 py-2 w-full border rounded border-gray-300 focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full"
        >
          Log in
        </button>

        <div className="flex justify-between items-center mt-4 text-sm gap-3">
          <p className="text-gray-800">Don't have an account? Just</p>
          <Button asChild className="text-gray-200 hover:text-gray-600">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </form>
        <div className=" flex flex-col gap-5 justify-center items-center my-5">

          <GoogleSignIn/>
          <GitHubSignIn/>
        </div>
    </div>
  );
};

export default LoginForm;
