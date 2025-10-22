import React, { useRef, useEffect } from "react";

const categoriesData = [
  {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 3,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 4,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 6,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 7,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
  },
  {
    id: 8,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 9,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
];

const CategoryItem = ({ name, imgSrc, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-start min-w-[100px] flex-shrink-0 focus:outline-none group snap-start"
  >
    <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden mb-2 shadow-md transition-shadow group-hover:shadow-lg group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-gray-300">
      <img
        src={imgSrc}
        alt={name}
        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-primary transition-colors whitespace-nowrap">
      {name}
    </span>
  </button>
);

// ---

const CategoriesSection = () => {
  const scrollRef = useRef(null);


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;


    const scrollStep = 166;
    const intervalTime = 2000; 

    let currentScroll = 0;
    let direction = 1; 

    const autoScroll = () => {
      if (!scrollContainer) return;

      currentScroll = scrollContainer.scrollLeft + scrollStep * direction;

      if (
        currentScroll + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        direction = -1;
        currentScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth; 
      } else if (currentScroll <= 0) {
        direction = 1;
        currentScroll = 0;
      }
      
      scrollContainer.scrollLeft = currentScroll;
    };

    const scrollInterval = setInterval(autoScroll, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []); 

  const handleCategoryClick = (categoryName) => {
    console.log(`Navigating to ${categoryName} category...`);
  };

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Categories</h2>


      {/* ✅ السلايدر الأفقي */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
          {categoriesData.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              imgSrc={category.image}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CategoriesSection;