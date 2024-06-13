import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GoogleSignIn } from "./googleSignIn";
import { GitHubSignIn } from "./gitHubSignIn";
import { auth } from "../auth"
import { redirect } from "next/navigation";
import EmailLoginForm from "./emailLoginForm";


const LoginForm = async () => {
  const session = await auth()
  if (session?.user) redirect('/')
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 flex flex-col">
     <EmailLoginForm/>
        <div className=" flex flex-col gap-5 justify-center items-center my-5">

          <GoogleSignIn/>
          <GitHubSignIn/>
        </div>
    </div>
  );
};

export default LoginForm;
