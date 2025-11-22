import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { MoreHorizontal, LogOut, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Edit2 } from "lucide-react";
import icon from "@/assets/iconP.png";
import UsersListPage from "./UsersListPage";
import StockPage from "./StockPage";
import RequestsPage from "./RequestsPage";
import CategoryPage from "./CategoryPage";
import ReviewsPage from "./ReviewsPage";
export default function AdminUsersPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-10">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 ">
                <div className="flex items-center gap-6 w-full">
                    {/* Avatar */}
                    <div className="">
                        <Avatar className="h-50 w-40 border-2 border-gray-200">
                            <AvatarFallback className="bg-gray-100 text-2xl font-semibold text-gray-600">
                                <img src={icon} alt="Admin" className="w-full h-full object-cover rounded-full" />          </AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Info Fields - Horizontal Inputs with Check Icon */}
                    <div className="flex flex-col gap-4 w-full">
                        {/* First Name */}
                        <div className="flex items-center gap-4 ">
                            <span className="text-sm text-primary font-bold w-28 text-right">First Name :</span>
                            <div className="relative flex-1 max-w-[50%]">
                                <Input
                                    value="Ahmed"
                                    readOnly
                                    className="h-11 bg-gray-50 border-gray-300 pr-12 font-medium"
                                />
                                <Edit2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />          </div>
                        </div>

                        {/* Last Name */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-primary font-bold w-28 text-right">Last Name :</span>
                            <div className="relative flex-1 max-w-[50%]">
                                <Input
                                    value="Mohamed"
                                    readOnly
                                    className="h-11 bg-gray-50 border-gray-300 pr-12 font-medium"
                                />
                                <Edit2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />          </div>
                        </div>

                        {/* Password */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-primary font-bold w-28 text-right">Password :</span>
                            <div className="relative flex-1 max-w-[50%]">
                                <Input
                                    value="12345h"
                                    type="password"
                                    readOnly
                                    className="h-11 bg-gray-50 border-gray-300 pr-12 font-medium"
                                />
                                <Edit2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />          </div>
                        </div>
                    </div>
                </div>
            </header>

 <Tabs defaultValue="users" className="w-full">
                <div className="bg-white border-b">
                    <TabsList className="w-full h-auto bg-transparent p-0 rounded-none">
                        <div className="grid grid-cols-5 gap-4 px-6 py-3 text-xl w-full">
                            <TabsTrigger 
                                value="users" 
                                className="py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-gray-500 hover:text-gray-700 rounded-none shadow-none"
                            >
                                Users list
                            </TabsTrigger>
                            <TabsTrigger 
                                value="stock" 
                                className="py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-gray-500 hover:text-gray-700 rounded-none shadow-none"
                            >
                                Stock
                            </TabsTrigger>
                            <TabsTrigger 
                                value="requests" 
                                className="py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-gray-500 hover:text-gray-700 rounded-none shadow-none"
                            >
                                Requests
                            </TabsTrigger>
                            <TabsTrigger 
                                value="category" 
                                className="py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-gray-500 hover:text-gray-700 rounded-none shadow-none"
                            >
                                Category
                            </TabsTrigger>
                            <TabsTrigger 
                                value="reviews" 
                                className="py-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent text-gray-500 hover:text-gray-700 rounded-none shadow-none"
                            >
                                Reviews
                            </TabsTrigger>
                        </div>
                    </TabsList>
                </div>

                {/* Tab Contents */}
                <TabsContent value="users" className="m-0">
                    <UsersListPage />
                </TabsContent>

                <TabsContent value="stock" className="m-0">
                    <StockPage />
                </TabsContent>

                <TabsContent value="requests" className="m-0">
                    <RequestsPage />
                </TabsContent>

                <TabsContent value="category" className="m-0">
                    <CategoryPage />
                </TabsContent>

                <TabsContent value="reviews" className="m-0">
                    <ReviewsPage />
                </TabsContent>
            </Tabs>
        </div>
    );
}