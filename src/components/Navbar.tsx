import React from 'react';
import { Car } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AutoElite</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#vehicles" className="text-gray-600 hover:text-blue-600">Veículos</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
}