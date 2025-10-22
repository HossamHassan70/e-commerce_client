import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 mt-4 mx-5 ">
      <div className="w-full md:max-w-[1400px] mx-auto p-4 md:px-8 lg:px-20">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-600">
          
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-bold text-white">ShopEasy</h3>
            <p className="text-sm text-gray-300">
              Platform for newsletter fans and owners.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-100 mb-2">Find newsletter</h4>
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition">About us</a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition">Contact us</a>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-100 mb-2">Email</h4>
            <a href="mailto:Hello@ShopEasy.com" className="text-sm text-gray-300 hover:text-primary transition">
              Hello@ShopEasy.com
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-100 mb-2">Follow us</h4>
            <div className="flex space-x-3 items-center">
              <a href="#" className="text-white hover:text-primary transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; ShopEasy. All right reserved.
        </div>
      </div>
    </footer>
  );
}