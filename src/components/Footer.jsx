import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 mt-12 mx-6 md:mx-0">
      {/* نفس المسافات من اليمين والشمال */}
      <div className="mx-auto px-[80px] max-w-[1440px]">
        {/* تخطيط أفقي متساوي المسافات */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-x-[170px] gap-y-10 pb-10 border-b border-gray-600">
          
          {/* العمود الأول */}
          <div className="flex flex-col space-y-3 w-[302px]">
            <h3 className="text-3xl font-bold">ShopEasy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Platform for newsletter fans and owners.
            </p>
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col space-y-2 w-[223px]">
            <h4 className="text-base font-semibold text-gray-100 mb-3">
              Find newsletter
            </h4>
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition">
              About us
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition">
              Contact us
            </a>
          </div>

          {/* العمود الثالث */}
          <div className="flex flex-col space-y-2 w-[151px]">
            <h4 className="text-base font-semibold text-gray-100 mb-3">Email</h4>
            <a
              href="mailto:Hello@ShopEasy.com"
              className="text-sm text-gray-300 hover:text-primary transition"
            >
              Hello@ShopEasy.com
            </a>
          </div>

          {/* العمود الرابع */}
          <div className="flex flex-col space-y-2 w-[100px]">
            <h4 className="text-base font-semibold text-gray-100 mb-3">Follow us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-sky-400 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © ShopEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
