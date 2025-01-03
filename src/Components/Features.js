// FeaturedPropertyTypes.js
import React from 'react';

const properties = [
  { name: "Family House", count: 122, iconColor: "bg-red-100", textColor: "text-red-500" },
  { name: "House & Villa", count: 156, iconColor: "bg-green-100", textColor: "text-green-500" },
  { name: "Apartment", count: 300, iconColor: "bg-yellow-100", textColor: "text-yellow-500" },
  { name: "Office & Studio", count: 80, iconColor: "bg-purple-100", textColor: "text-purple-500" },
  { name: "Villa & Condo", count: 80, iconColor: "bg-blue-100", textColor: "text-blue-500" }
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Property Types</h2>
          <p className="text-gray-500 mt-2">Find All Type of Property.</p>
        </div>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {properties.map((property) => (
            <div 
              key={property.name}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div 
                className={`h-12 w-12 flex items-center justify-center rounded-full ${property.iconColor}`}>
                {/* Placeholder for icons */}
                <span className={`${property.textColor} text-2xl`}>🏠</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">{property.name}</h3>
              <p className="mt-2 text-gray-400">{property.count} Property</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
