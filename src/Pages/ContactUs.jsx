import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import ContactUsBg from "@/assets/ContactUs.jpg"; // تأكدي من المسار صح
export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* ---------- Header Section ---------- */}
<section 
  className="relative h-[380px] flex flex-col justify-center items-center text-center overflow-hidden"
  style={{
    backgroundImage: `url(${ContactUsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Content */}
  <div className="relative z-20 px-4 text-black">
    <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">
      Contact Us
    </h1>
    <p className="max-w-md mx-auto text-sm md:text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Dolor odio venenatis tortor
      cras lorem libero mi sit cursus.
    </p>
  </div>
</section>




      {/* ---------- Contact Section ---------- */}
      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 -mt-20 relative z-20">
        {/* Left Side — Contact Info */}
        <div className="border-r pr-8">
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Sed elit scelerisque in hac
            tempor.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-emerald-700">Head Office</h4>
                <p className="text-gray-600 text-sm">
                  376 Hill-Crest Lane, Irvine, California DC 1234
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-emerald-700">Email</h4>
                <p className="text-gray-600 text-sm">Hello@ShopEasy.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-emerald-700">Call Us</h4>
                <p className="text-gray-600 text-sm">+62 212 002 2012</p>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <p className="text-sm font-medium mb-2">Follow Our Social Media</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200"
            >
              <Linkedin className="text-emerald-700" size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200"
            >
              <Facebook className="text-emerald-700" size={18} />
            </a>
                        <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200"
            >
              <Twitter className="text-emerald-700" size={18} />
            </a>
          </div>
        </div>

        {/* Right Side — Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                
              <Input placeholder="Name" />
              <Input placeholder="Company" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Phone" />
              <Input placeholder="Email" />
            </div>

            <Input placeholder="Subject" />
            <Textarea placeholder="Message" rows={4} />

            <Button className="w-full bg-primary hover:bg-emerald-700">
              Send
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
