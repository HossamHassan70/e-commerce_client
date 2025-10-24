"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { XIcon } from "lucide-react";
import LoginImage from "@/assets/Login.jpg";
import AuthForm from "@/components/AuthForm";

export default function LoginDialog({ open, onOpenChange }) {
    console.log("LoginDialog rendered, open:", open); // Debugging log

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent 
                className="w-[717px] h-auto p-0 overflow-hidden rounded-2xl rela " // Temporary red background for debugging
                aria-describedby="login-dialog-description"
            >
                <DialogClose asChild>
                    <button
                        className="absolute top-3 z-60 right-3 !text-primary !bg-white hover:!bg-secondary cursor-pointer rounded-full p-1 transition "
                        aria-label="Close"
                    >
                        <XIcon size={20} />
                    </button>
                </DialogClose>

                <div
                    className="relative bg-cover bg-center h-[530px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    style={{
                        backgroundImage: `url(${LoginImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 flex justify-center items-center h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <Tabs
                            defaultValue="login"
                            className="w-[80%] text-center m-auto"
                        >
                            <TabsList
                                className="grid grid-cols-2 gap-4 bg-primary backdrop-blur-sm rounded-lg p-2 mb-6 w-full h-[50px] mx-auto mt-[70px]"
                            >
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-white data-[state=active]:text-primary text-white font-semibold rounded-md text-lg transition-all duration-300 flex items-center justify-center h-full hover:bg-white/90"
                                >
                                    Log In
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-white data-[state=active]:text-primary text-white font-semibold rounded-md text-lg transition-all duration-300 flex items-center justify-center h-full hover:bg-white/90"
                                >
                                    Sign Up
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <AuthForm type="login" />
                            </TabsContent>
                            <TabsContent value="signup">
                                <AuthForm type="signup" />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <p id="login-dialog-description" className="sr-only">
                    This dialog allows you to log in or sign up for an account.
                </p> {/* Hidden description for accessibility */}
            </DialogContent>
        </Dialog>
    );
}