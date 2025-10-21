// ProductTabsHeader.jsx
 import  { useState } from 'react';
import DealsOfTheDay from './Deals'; 

const ProductTabsHeader = () => {
 const [activeTab, setActiveTab] = useState('New Arrival');

 const tabs = ['New Arrival', 'Best Selling', 'Top Rated'];

  const renderContent = () => {
    switch (activeTab) {
      case 'New Arrival':

        return <DealsOfTheDay title={null} />; 
      case 'Best Selling':
        return <div className="w-[1279px] mx-auto p-4 md:px-8 lg:px-20" style={{ height: '370px' }}>
                 <p className="text-lg">Best Selling Products content...</p>
               </div>;
      case 'Top Rated':
        return <div className="w-[1279px] mx-auto p-4 md:px-8 lg:px-20" style={{ height: '370px' }}>
                 <p className="text-lg">Top Rated Products content...</p>
               </div>;
      default:
        return null;
    }
  };


 return (
  <>
  <div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
   <div className="relative">
    <h2 className="text-3xl font-semibold text-gray-800 pb-2">
     Fashion Products
    </h2>
    <div className="absolute bottom-0 left-0 h-1 w-24 bg-primary"></div>
   </div>
   
   <div className="flex space-x-6">
    {tabs.map((tab) => (
     <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`
       text-lg font-semibold relative pb-2 transition-colors duration-300
       ${activeTab === tab 
        ? 'text-gray-800' 
        : 'text-secondary hover:text-gray-700' 
       }
      `}
     >
      {tab}
      
      {activeTab === tab && (
       <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
      )}
     </button>
    ))}
   </div>
  </div>
 
    {renderContent()}
  </>
 );
};

export default ProductTabsHeader;