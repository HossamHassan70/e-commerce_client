"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Eye } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const AuthForm = ({ type, onSubmit }) => {
    const isLogin = type === "login";
    return (
        <form className="space-y-4 " onSubmit={onSubmit}>
            {isLogin ? (
                <>
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-white/80 backdrop-blur-sm"
                        />
                        <Mail className="absolute right-3 top-2 text-gray-500" size={18} />
                    </div>
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            className="bg-white/80 backdrop-blur-sm mb-2"
                        />
                        <Eye className="absolute right-3 top-2 text-gray-500" size={18} />
                        <a
                            href="#"
                            className="absolute right-3 bottom-[-16px] text-xs text-red-500 hover:underline"
                        >
                            Forget Password?
                        </a>
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-light-green hover:bg-primary border border-primary border-2 transition-all mt-2"
                    >
                        Log In
                    </Button>
                </>
            ) : (
                <>
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="First Name"
                            className="bg-white/80 backdrop-blur-sm flex-1"
                        />
                        <Input
                            type="text"
                            placeholder="Second Name"
                            className="bg-white/80 backdrop-blur-sm flex-1"
                        />
                    </div>
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-white/80 backdrop-blur-sm"
                        />
                        <Mail className="absolute right-3 top-2 text-gray-500" size={18} />
                    </div>
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            className="bg-white/80 backdrop-blur-sm"
                        />
                        <Eye className="absolute right-3 top-2 text-gray-500" size={18} />
                    </div>
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            className="bg-white/80 backdrop-blur-sm"
                        />
                        <Eye className="absolute right-3 top-2 text-gray-500" size={18} />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-light-green hover:bg-primary border border-primary border-2 transition-all mt-2"
                    >
                        Sign Up
                    </Button>
                </>
            )}
            <div className="flex items-center gap-2 my-6 pb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-white text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex justify-center gap-4">
                <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8"
                >
                    <FaGoogle className="text-red-500" size={27} />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8"
                >
                    <FaFacebook className="text-blue-600" size={30} />
                </a>
            </div>
            <p className="text-center text-sm text-white mt-12 mb-4">
                {isLogin ? (
                    <>
                        Haven’t an account?{" "}
                        <span className="text-primary cursor-pointer text-semibold hover:underline">
                            Sign up
                        </span>
                    </>
                ) : (
                    <>
                        Already Have account?{" "}
                        <span className="text-primary cursor-pointer text-semibold hover:underline ">
                            Signin
                        </span>
                    </>
                )}
            </p>
        </form>
    );
};

export default AuthForm;