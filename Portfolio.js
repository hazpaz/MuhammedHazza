import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaBehance, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="h-screen grid grid-cols-1 md:grid-cols-2 items-center"
      >
        <div className="h-full w-full">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-10 text-center flex flex-col items-center">
          <h2 className="text-5xl font-bold">Your Name</h2>
          <p className="text-lg mt-4">You can edit this text to describe yourself and your work.</p>
          <Button className="mt-6 px-6 py-2 text-lg">Edit This Button</Button>
          <div className="flex gap-4 mt-6 text-2xl">
            <FaTwitter className="cursor-pointer" />
            <FaBehance className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
