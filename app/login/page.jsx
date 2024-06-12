import Link from "next/link";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <form className="bg-green-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-green-900 font-bold">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input px-4 py-2 w-full border rounded border-green-300 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-green-900 font-bold"
        >
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="form-input px-4 py-2 w-full border rounded border-green-300 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
        formAction={login}
      >
        Log in
      </button>

      <div className="flex justify-between items-center mt-4 text-sm">
        <p className="text-green-800">Don't have an account? Just sign up</p>
        <Button asChild className="text-green-500 hover:text-green-600">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </form>
  );
}
