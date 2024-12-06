import React from 'react';

interface VehicleCardProps {
  image: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
}

export function VehicleCard({ image, name, price, year, mileage }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-2xl font-bold text-blue-600 mt-2">{price}</p>
        <div className="mt-4 flex justify-between text-gray-600">
          <span>{year}</span>
          <span>{mileage}</span>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}