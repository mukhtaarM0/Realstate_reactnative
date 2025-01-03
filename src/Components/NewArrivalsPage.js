import React from "react";

const NewArrivalsPage = () => {
  const products = [
    {
      id: 1,
      title: "New Apartment in Hargeisa",
      description:
        "This modern apartment features spacious rooms, a great view, and all amenities for a comfortable stay.",
      image: "../image/apartment1.jpeg",
    },
    {
      id: 2,
      title: "Luxurious Villa in Burco",
      description:
        "A stunning villa with a pool and beautiful garden, perfect for families or groups looking for luxury.",
      image: "../image/villa1.jpeg",
    },
    {
      id: 3,
      title: "Beach House in Berbera",
      description:
        "Experience the best of Berbera with this cozy beach house just steps away from the shore.",
      image: "../image/stikar.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Latest Arrivals & Promotions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {product.description.substring(0, 100)}...
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;
