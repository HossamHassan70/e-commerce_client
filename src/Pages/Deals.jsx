import ProductCard from './Product/ProductCard'; 

const dealsData = [
  {
    id: 1,
    name: "Back bags",
    description: "Tan Solid laptop Back Bag",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80", 
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    action: "Select options",
    isBelt: false,
  },
  {
    id: 2,
    name: "Shoes",
    description: "Stylish running shoes", 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", 
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    action: "Select options",
    isBelt: false,
  },
  {
    id: 3,
    name: "Watches",
    description: "Classic chronograph watch", 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", 
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    action: "Select options",
    isBelt: false,
  },
  {
    id: 4,
    name: "Belts",
    description: "Brown Solid Leather Belt",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 5, 
    action: "Add to Cart",
    isBelt: true,
  },
  {
    id: 5,
    name: "Dress",
    description: "Pink Solid Off Shoulder Dress",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80", 
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    action: "Select options",
    isBelt: false,
  },
];

const DealsOfTheDay = ({ title = "Deals Of The Day" }) => {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-xl font-semibold mb-6 text-gray-900 border-b-2 border-teal-600 inline-block pb-1">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dealsData.map((deal) => (
          <ProductCard key={deal.id} product={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;