import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* ---------- Header Section ---------- */}
<section className="relative h-[380px] bg-gray-100 flex flex-col justify-center items-center text-center overflow-hidden">
  {/* Layer غامق بسيط */}
  <div className="absolute inset-0 bg-[#83838399]/60 backdrop-blur-[1px] z-0"></div>

  {/* الصور - توزيع متوازن */}
  <img
    src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80"
    className="absolute top-[21px] left-[930px] w-28 opacity-85 rotate-[-4deg] z-0 drop-shadow-md"
    alt="model"
  />
  <img
    src="  https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
    className="absolute top-[34px] left-[423px] w-28 opacity-90 rotate-[2deg] z-0 drop-shadow-md"
    alt="model"
  />
  <img
    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
    className="absolute top-[167px] left-[31px] w-24 opacity-80 rotate-[3deg] z-0 drop-shadow-md"
    alt="shoe"
  />
  <img
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
    className="absolute top-[299px] left-[1178px] w-28 opacity-80 rotate-[-3deg] z-0 drop-shadow-md"
    alt="shoe"
  />
  <img
    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
    className="absolute top-[190px] left-[281px] w-20 opacity-75 rotate-[5deg] z-0 drop-shadow-sm"
    alt="bag"
  />
  <img
    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80"
    className="absolute top-[253px] left-[873px] w-24 opacity-80 rotate-[-5deg] z-0 drop-shadow-sm"
    alt="sunglasses"
  />
  <img
    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80"
    className="absolute top-[25%] right-[80%] w-20 opacity-75 blur-[0.5px] z-0 drop-shadow-sm"
    alt="watch"
  />
  <img
    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80"
    className="absolute bottom-[15%] left-[55%] w-24 opacity-80 rotate-[8deg] z-0 drop-shadow-sm"
    alt="dress"
  />

  {/* النص */}
  <div className="relative z-10 px-4">
    <h1 className="text-3xl font-semibold mb-3 text-gray-700 drop-shadow-md">
      Contect Us
    </h1>
    <p className="text-secondary max-w-md mx-auto leading-relaxed">
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
