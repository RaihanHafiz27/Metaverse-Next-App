"use client";

import Link from "next/link";
import FacebookIcon from "../../../public/icons/facebook";
import GoogleIcon from "../../../public/icons/google";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  isRegister: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (isRegister) {
      // Registration logic
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullname: fullName, email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
          e.target.reset();
          setIsLoading(false);
          setSuccess(true);
          setError("");
          push("/login"); // Redirect to login after successful registration
        } else {
          setError("Email already exists");
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error during registration:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    } else {
      // Login logic using NextAuth
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (res?.error) {
          setError("Invalid email or password");
          setIsLoading(false);
        } else {
          e.target.reset();
          setIsLoading(false);
          setError("");
          setSuccess(true);
          push("/"); // Redirect to home after successful login
        }
      } catch (err) {
        console.error("Error during login:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="backdrop-blur-md max-w-sm 2xl:max-w-md p-8 border border-yellow-600">
      <h1 className="text-2xl 2xl:text-3xl font-bold text-slate-200 mb-6 text-center">
        {isRegister ? "Sign Up" : "Sign In"}
      </h1>
      <p className="text-slate-200 font-semibold text-center text-sm 2xl:text-base">
        {isRegister
          ? "Sign up with email address"
          : "Sign in with email address"}
      </p>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            id="fullname"
            className="w-full text-slate-200 bg-transparent border-b border-pink-200 my-2 2xl:my-4 outline-none "
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          id="email"
          className="w-full bg-transparent border-b border-pink-200 my-2 2xl:my-4 outline-none text-slate-200"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          className="w-full  bg-transparent border-b border-pink-200 my-2 2xl:my-4 outline-none text-slate-200"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          disabled={isLoading} // Disable the button when loading
          type="submit"
          className={`bg-gradient-to-r from-cyan-600 to-blue-600 text-white my-2 2xl:my-4 py-2 rounded-md w-full ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Loading..." : isRegister ? "Sign Up" : "Sign In"}
        </button>
        {/* <button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white my-2 2xl:my-4 py-2 rounded-md w-full"
        >
          {isRegister ? "Sign Up" : "Sign In"}
        </button> */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-center">Operation successful!</p>
        )}
        <hr className="my-4" />
        <p className="text-slate-200 text-sm 2xl:text-base text-center">
          Or continue with
        </p>
        <div className="w-full grid grid-cols-2 gap-4 my-2">
          <button className="flex text-sm 2xl:text-base items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
            <GoogleIcon />
            Google
          </button>
          <button className="flex text-sm 2xl:text-base items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
            <FacebookIcon />
            facebook
          </button>
        </div>
        <Link
          href={isRegister ? "/login" : "/register"}
          className="text-slate-200 flex justify-center mt-4 text-sm 2xl:text-base"
        >
          {isRegister
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;
