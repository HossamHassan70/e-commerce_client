import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Adjust import path
import DealsOfTheDay from "./Deals";

const ProductTabs = ({ description, additionalInfo, review }) => {
    return (
        <div className="w-[80%] mx-auto my-10">
            <Tabs defaultValue="description" className="mt-4 m-auto flex justify-center items-center">
                <TabsList className="w-[80%] bg-transparent">
                    <TabsTrigger
                        value="description"
                        className="text-secondary text-xl hover:text-primary !shadow-none data-[state=active]:!border-primary data-[state=active]:!text-primary transition-all border-none relative px-0"
                    >
                        <span className="border-b-2 !shadow-none border-secondary hover:border-primary pb-1">
                            Description
                        </span>
                    </TabsTrigger>
                    <TabsTrigger
                        className="text-secondary text-xl hover:text-primary !shadow-none transition-all border-none relative px-0 data-[state=active]:!border-primary data-[state=active]:!text-primary "
                        value="additional"
                    >
                        <span className="border-b-2 border-secondary hover:border-primary data-[state=active]:border-primary data-[state=active]:text-primary pb-1">
                            Additional Information
                        </span>
                    </TabsTrigger>
                    <TabsTrigger
                        className="text-secondary text-xl hover:text-primary !shadow-none transition-all border-none relative px-0 data-[state=active]:!border-primary data-[state=active]:!text-primary"
                        value="review"
                    >
                        <span className="border-b-2 border-secondary hover:border-primary data-[state=active]:border-primary data-[state=active]:text-primary pb-1">
                            Review
                        </span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent className="" value="description">
                    <p className="text-lg text-secondary my-4">{description}</p>
                </TabsContent>
                <TabsContent className="" value="additional">
                    <ul className="list-disc pl-5 text-lg text-secondary my-4">
                        {additionalInfo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </TabsContent>
                <TabsContent className="" value="review">
                    <p className="text-lg text-secondary my-4">{review}</p>
                </TabsContent>
            </Tabs>
            <div className="text-center py-5">
                <p className="text-lg font-semibold text-secondary mb-2">
                    Related Product
                </p>
                <p className="text-2xl text-primary font-semibold">
                    Explore Related product
                </p>
            </div>
            <DealsOfTheDay title={null}/>
        </div>


    );
};

export default ProductTabs;