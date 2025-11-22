import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash2, Edit2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// صفحة Users List - هنا بس عشان المثال، المفروض تكون في ملف منفصل
export default function UsersListPage() {
    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-100 text-sm font-semibold text-gray-600">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-4">Email</div>
                    <div className="col-span-2">Role</div>
                    <div className="col-span-2 text-center">Action</div>
                </div>

                {[
                    { name: "Ahmed Mohamed", email: "Ahmed.mohamed932@gmail.com", role: "Seller" },
                    { name: "Noha Mahmoud", email: "Noha.Mahmoud932@gmail.com", role: "Buyer" },
                    { name: "Laila Abdelrahman", email: "Laila.abdelrahman932@gmail.com", role: "Buyer" },
                ].map((user, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-12 gap-4 px-6 py-4 border-b last:border-0 hover:bg-gray-50 transition"
                    >
                        <div className="col-span-1 flex items-center">
                            <Avatar className="h-15 w-15">
                                <AvatarFallback className="bg-gray-200 text-gray-600 font-semibold">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="col-span-3 flex items-center font-medium">
                            {user.name}
                        </div>

                        <div className="col-span-4 flex items-center text-gray-600">
                            {user.email}
                        </div>

                        <div className="col-span-2 flex items-center">
                            <Badge variant={user.role === "Seller" ? "default" : "secondary"}>
                                {user.role}
                            </Badge>
                        </div>

                        <div className="col-span-2 flex justify-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="cursor-pointer">
                                        <Edit className="w-4 h-4 mr-2" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer text-red-600">
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
