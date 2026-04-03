import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  img: string;
  Description: string;
}

const Productsdetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state as Product | undefined;
  if (!product) return <div className="p-6 text-center">No Product Found</div>;

  const relatedProducts: Product[] = [
    {
      id: 1,
      name: "Coco Powder",
      brand: "Coco",
      Description: "High-quality cocoa powder perfect for baking and beverages.",
      price: "NPR 13641",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308328905/KB/KA/VP/798985/cocoa-powder-1-kg-1000x1000.jpg",
    },
    {
      id: 2,
      name: "Dark Chocolate",
      brand: "Coco",
      Description: "Rich and delicious dark chocolate for desserts and snacks.",
      price: "NPR 1500",
      img: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      name: "Kraft Cheese",
      brand: "Kraft",
      Description: "Creamy and flavorful cheese for your meals.",
      price: "NPR 800",
      img: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg",
    },
    {
      id: 4,
      name: "Nestle Milk",
      brand: "Nestle",
      Description: "Fresh and nutritious milk for your family.",
      price: "NPR 500",
      img: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-200 min-h-screen mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-h-140 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.Description}</p>
            <h3 className="text-2xl font-bold mb-2">{product.price}</h3>
            <p className="text-gray-500 mb-1">Minimum Order: 500 pieces</p>
            <p className="text-gray-500 mb-4">Delivery: 5-10 Days</p>

          <a
            href={`https://wa.me/9779762483563?text=I want ${product.name}`}
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg w-fit hover:bg-green-600 transition"
            >
            <FaWhatsapp /> Inquire on WhatsApp
          </a>
            </div>
        </div>
      </div>
      <hr  className="mt-20 border border-gray-500"/>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-18 text-center">Related Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-50 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">By {item.brand}</p>
                  <p className="font-bold mt-1">{item.price}</p>
                </div>
                <a
                  href={`https://wa.me/9779762483563?text=I want ${item.name}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
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