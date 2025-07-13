'use client'

import { useRef } from "react";
import ButtonColor from "./components/ButtonColor";
import CardComponent from "./components/CardComponent";
import CardProductComponent from "./components/CardProductComponent";
import Navbar from "./components/Navbar";


export default function Home() {
  
  const collections_section_ref = useRef<HTMLDivElement>(null)
  const contact_section_ref = useRef<HTMLDivElement>(null)
  const about_section_ref = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-full overflow-x-hidden">

      <Navbar 
        section_ref={
          {
            collections_ref: collections_section_ref,
            about_ref: about_section_ref,
            contact_ref: contact_section_ref
          }
        }
      />

      {/* Hero Section */}
      <div className="flex flex-col min-h-dvh md:flex-row md:justify-center relative mt-16 py-10 items-center text-center text-pretty gap-4 bg-zinc-950 bg-[url(/bg_image.jpg)]">
        <div className="absolute w-30 h-30 bg-red-300 rounded-full -left-14 top-40 z-0 blur-3xl opacity-25"></div>
        <div className="z-1 flex flex-col gap-4 text-center items-center md:text-left px-4 md:w-[50%] md:items-start">
          <div className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-shadow-lg text-gray-100">Future of Fashion</div>
          <div className="font-semibold my-2 lg:w-[600px] text-shadow-lg">Discover cutting-edge designs that blend timeless elegance with modern innovation. Our curated collection redefines luxury for the contemporary lifestyle.</div>
          <ButtonColor
            text="Explore Collections"
          />
          <button type="button" className="cursor-pointer rounded-full ring-1 ring-gray-400 px-6 py-2 font-semibold transition-all ease-in-out delay-100 duration-300 bg-zinc-400 hover:-translate-y-1 hover:bg-zinc-700">Learn More</button>
        </div>
        <div className="relative flex flex-row flex-wrap align-middle justify-center w-96 mt-10">
          <img src="/hero_1.jpg" className="bg-red-400 rounded-3xl w-48 h-60 overflow-hidden z-1 translate-x-8 animate-wiggle-bounce"></img>
          <img src="/hero_2.jpg" className="bg-teal-400 rounded-3xl w-43 h-55 overflow-hidden z-2 -translate-x-4 translate-y-30 animate-wiggle-bounce"></img>
          <img src="/hero_3.jpg" className="bg-sky-400 rounded-3xl w-38 h-50 overflow-hidden z-3 animate-wiggle-bounce"></img>
        </div>
      </div>

      {/* Our Collection Section */}
      <div ref={collections_section_ref} className="flex flex-col items-center justify-center min-h-dvh text-center text-pretty gap-4 px-8 py-10">
        <div className="text-5xl font-bold text-nowrap">Our Collections</div>
        <div className="font-semibold text-gray-400">Discover our carefully curated collections that define modern luxury and timeless elegance.</div>
        <div className="flex flex-col scale-88 -translate-y-30 md:scale-100 md:-translate-y-0 md:mt-10 md:flex-row flex-wrap gap-10 justify-center">
            <CardProductComponent 
              image_path="/collection_summer.jpg"
              title="Summer Essentials"
              description="Lightweight fabrics and vibrant colors for the perfect summer wardrobe."
              price={89}
              position="-translate-y-0"
            />
            <CardProductComponent 
              image_path="/collection_urban.jpg"
              title="Urban Elegance"
              description="Sophisticated pieces that transition seamlessly from day to night."
              price={149}
              position="-translate-y-20"
            />
            <CardProductComponent 
              image_path="/collection_minimalist.jpg"
              title="Minimalist Luxury"
              description="Clean lines and premium materials for the modern minimalist."
              price={199}
              position="scale-140 -translate-y-20"
            />
            <CardProductComponent 
              image_path="/collection_pieces.jpg"
              title="Statement Pieces"
              description="Bold designs that make an unforgettable impression."
              price={299}
              position=""
            />
        </div>
      </div>


      {/* Why Choose Us Section */}
      <div ref={about_section_ref} className="flex flex-col min-h-dvh items-center justify-center text-center text-pretty gap-4 px-8 py-10">
        <div className="text-5xl font-bold">Why Choose Us</div>
        <div className="font-semibold text-gray-400">Experience luxury redefined through our commitment to quality, sustainability, and innovative design.</div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center mt-10 gap-8">
          <CardComponent 
            content={
              <div className="flex flex-col justify-center items-center text-pretty">
                <div className="flex w-16 h-16 items-center justify-center bg-gradient-to-tr from-red-400 to-teal-400 rounded-full text-3xl">✨</div>
                <div className="mt-6 text-2xl font-extrabold">Premium Quality</div>
                <div className="text-xl">Handcrafted with the finest materials and attention to detail that exceeds expectations.</div>
              </div>
            }
          />
          <CardComponent 
            content={
              <div className="flex flex-col justify-center items-center text-pretty">
                <div className="flex w-16 h-16 items-center justify-center bg-gradient-to-tr from-red-400 to-teal-400 rounded-full text-3xl">🌱</div>
                <div className="mt-6 text-2xl font-extrabold">Sustainable Fashion</div>
                <div className="text-xl">Ethically sourced materials and eco-friendly production processes for a better tomorrow.</div>
              </div>
            }
          />
          <CardComponent 
            content={
              <div className="flex flex-col justify-center items-center text-pretty">
                <div className="flex w-16 h-16 items-center justify-center bg-gradient-to-tr from-red-400 to-teal-400 rounded-full text-3xl">🚀</div>
                <div className="mt-6 text-2xl font-extrabold">Innovative Design</div>
                <div className="text-xl">Cutting-edge aesthetics that push the boundaries of contemporary fashion.</div>
              </div>
            }
          />
        </div>
      </div>

      {/* Subscription Section */}
      <div ref={contact_section_ref} className="flex flex-col items-center text-center text-pretty gap-4 px-8 py-20 mt-30 bg-gradient-to-br from-red-400 to-teal-400">
        <div className="text-4xl font-extrabold text-nowrap">Stay in Style</div>
        <div className="font-semibold text-gray-200">Be the first to know about new collections, exclusive offers, and fashion insights.</div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input type="email" className="bg-white min-w-64 px-5 py-2 rounded-3xl shadow-xl text-black invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-2 focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500" placeholder="Enter your email address"></input>
          <button type="button" className="text-red-500 bg-white px-5 py-3 rounded-3xl font-bold text-xs shadow-xl cursor-pointer max-w-32 transition-all delay-100 duration-200 hover:-translate-y-1">Subscribe</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center text-center text-pretty gap-10 md:gap-20 px-8 py-20">
            <div className="flex flex-col gap-2 text-center items-center">
              <div className="text-xl font-bold mb-2">Shop</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">New Arrivals</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Women</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Men</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Accessories</div>
            </div>
            <div className="flex flex-col gap-2 text-center items-center">
              <div className="text-xl font-bold mb-2">Support</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Size Guide</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Shipping Info</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Returns</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Contact Us</div>
            </div>
            <div className="flex flex-col gap-2 text-center items-center">
              <div className="text-xl font-bold mb-2">Company</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">About Us</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Careers</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Press</div>
              <div className="text-gray-300 cursor-pointer hover:text-red-500">Sustainability</div>
            </div>
      </div>

      <div className="w-full text-center border-t-1 border-gray-500 pt-6 pb-3">© 2025 Your Company. All rights reserved.</div>
    </div>
  )
}