import React, { useState, useRef, useEffect } from 'react';
import { Dot } from 'lucide-react'; 

const categoriesData = [
  {
    id: 1,
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80',
    bgColor: 'bg-amber-100'
  },
  {
    id: 2,
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80',
    bgColor: 'bg-rose-200'
  },
  {
    id: 3,
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    bgColor: 'bg-gray-300'
  },
  {
    id: 4,
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80',
    bgColor: 'bg-amber-200'
  },
  {
    id: 5,
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    bgColor: 'bg-yellow-300'
  },
  {
    id: 6,
    name: 'Accessorise',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    bgColor: 'bg-cyan-400'
  },
  {
    id: 7,
    name: 'Kids',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80',
    bgColor: 'bg-gray-200'
  }
];

const CategoryItem = ({ name, imgSrc, onClick }) => (
  <button
    onClick={onClick}

    className="flex flex-col items-center justify-start min-w-[100px] flex-shrink-0 focus:outline-none group snap-start"
    aria-label={`View ${name} category`}
  >
    <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden mb-2 shadow-md transition-shadow group-hover:shadow-lg group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-gray-300">
      <img
        src={imgSrc}
        alt={name}
        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <span className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors whitespace-nowrap">
      {name}
    </span>
  </button>
);

const CategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  
  // Adjusted itemsPerPage to 4 to make the pagination dots more relevant/visible on smaller screens
  const itemsPerPage = 4;
  const totalDots = Math.ceil(categoriesData.length / itemsPerPage);

  const handleCategoryClick = (categoryName) => {
    console.log(`Navigating to ${categoryName} category...`);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      // Logic to calculate scroll amount remains the same and is correct
      const categoryContainerWidth = scrollRef.current.scrollWidth;
      const pageWidth = categoryContainerWidth / totalDots;
      const scrollAmount = index * pageWidth; 
      
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        
        if (scrollWidth <= clientWidth) return; 

        const maxScroll = scrollWidth - clientWidth;
        const scrollPercentage = scrollLeft / maxScroll;
        
        const newIndex = Math.round(scrollPercentage * (totalDots - 1));
        setActiveIndex(newIndex);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [totalDots]);

  return (
    <section
      className="max-w-[1279px] mx-auto py-4 px-4 sm:px-8 lg:px-10"
      style={{ minHeight: '212px' }}
    >
      {/* Pagination Dots - Always centered and visible */}
      <div className="flex justify-center mb-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 transition-all duration-300"
            aria-label={`Go to page ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary w-4 md:w-5' // Active dot style
                  : 'bg-gray-300 hover:bg-gray-400 w-2' // Inactive dot style
              }`}
            />
          </button>
        ))}
      </div>

      {/* Horizontal Category Flow - Scrollable and hides scrollbar */}
      <div className="relative">
        <div
          ref={scrollRef}
          // Added snap-x and snap-mandatory for a better scrolling experience
          className="flex space-x-4 md:space-x-6 lg:space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
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
        {/* Webkit scrollbar hiding for Chrome, Safari, etc. */}
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