import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  img: string;
  Description?: string;
}

const Productsdetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state as Product | undefined;

  if (!product) return <div>No Product Found</div>;

  // Example related products
  const relatedProducts: Product[] = [
    { id: 1, name: "Coco Powder", brand: "Coco", Description: "High-quality cocoa powder for your daily needs", price: "NPR 13641", img: product.img },
    { id: 2, name: "Dark Chocolate", brand: "Coco", Description: "Rich and delicious dark chocolate bars", price: "NPR 1500", img: product.img },
    { id: 3, name: "Kraft Cheese", brand: "Kraft", Description: "Creamy and flavorful cheese for your meals", price: "NPR 800", img: product.img },
    { id: 4, name: "Nestle Milk", brand: "Nestle", Description: "Fresh and nutritious milk for your family", price: "NPR 500", img: product.img },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 p-6">
        <div>
          <img src={product.img} alt={product.name} className="w-full h-130 rounded-xl object-cover" />
          <div className="flex gap-4 mt-4">
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover" />
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover" />
            <img src={product.img} className="w-24 h-24 rounded-lg object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">Bright and Hydrated Skin to the MAX</p>
          <h3 className="text-2xl font-bold mb-2">{product.price}</h3>
          <p className="text-gray-500">Minimum Order: 500 pieces</p>
          <p className="text-gray-500 mb-4">Delivery: 5-10 Days</p>

          <a
            href={`https://wa.me/9762483563?text=I want ${product.name}`}
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg w-fit"
          >
            <FaWhatsapp /> Inquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <p className="text-xl text-gray-600 mb-2">
          <span className="text-gray-800 font-extrabold">Descriptions:</span> {product.Description}
        </p>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-[#DBDEE4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-gray-200 p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">By {item.brand}</p>
                  <p className="font-bold">{item.price}</p>
                </div>

                <a
                  href={`https://wa.me/9779762483563?text=I want ${item.name}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-green-500 text-white p-3 rounded-full"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productsdetails;