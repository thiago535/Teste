import React from 'react';
import { VehicleCard } from './VehicleCard';

const vehicles = [
  {
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Mercedes-Benz C300",
    price: "R$ 320.000",
    year: "2023",
    mileage: "0 km"
  },
  {
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "BMW X5",
    price: "R$ 450.000",
    year: "2023",
    mileage: "5.000 km"
  },
  {
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Audi Q8",
    price: "R$ 480.000",
    year: "2022",
    mileage: "15.000 km"
  },
  {
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Porsche Cayenne",
    price: "R$ 720.000",
    year: "2023",
    mileage: "0 km"
  }
];

export function VehicleGrid() {
  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Veículos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}