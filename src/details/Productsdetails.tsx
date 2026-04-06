import React, { useState } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  img: string;
  Description: string;
  logo: string;
}

const Productsdetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state as Product | undefined;
  if (!product) return <div className="p-6 text-center">No Product Found</div>;

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Coco Powder",
      brand: "Coco",
      Description:
        "High-quality cocoa powder perfect for baking and beverages.",
      price: "NPR 13641",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308328905/KB/KA/VP/798985/cocoa-powder-1-kg-1000x1000.jpg",
      logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
    },
    {
      id: 2,
      name: "Dark Chocolate",
      brand: "Coco",
      Description: "Rich and delicious dark chocolate for desserts and snacks.",
      price: "NPR 1500",
      img: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
    },
    {
      id: 3,
      name: "Kraft Cheese",
      brand: "Kraft",
      Description: "Creamy and flavorful cheese for your meals.",
      price: "NPR 800",
      img: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg",
      logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
    },
    {
      id: 4,
      name: "Nestle Milk",
      brand: "Nestle",
      Description: "Fresh and nutritious milk for your family.",
      price: "NPR 500",
      img: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg",
      logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
    },
    // Add more products if needed
  ];

  // --- Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // number of related products per page
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, allProducts.length);
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (page: number) => setCurrentPage(page);

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen mt-10">
      {/* Product Details */}
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

      <hr className="mt-20 border border-gray-500" />

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Related Products
        </h3>
        <p className="text-start text-gray-600 mb-6">
          Showing {startIndex + 1}-{endIndex} of {allProducts.length} products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-[#DBDEE4] rounded-2xl overflow-hidden group border-b-5 border-gray-300 shadow-[4px_4px_10px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white h-44 sm:h-48 md:h-52 lg:h-60">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 mx-auto mt-3 sm:mt-4 border border-gray-300 object-cover rounded-t-2xl transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 left-2 p-1 sm:p-2 rounded-full bg-white shadow-md">
                  <img
                    src={item.logo}
                    alt="brand logo"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain transform group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              <div className="bg-white p-3 sm:p-5 relative">
                <p className="text-xs sm:text-sm text-gray-500">By {item.brand}</p>
                <h3 className="text-sm sm:text-base font-bold mt-1">{item.name}</h3>
                <p className="text-sm sm:text-base font-bold mt-2">{item.price}</p>

                <a
                  href={`https://wa.me/9779762483563?text=I want ${item.name}`}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-lg flex items-center gap-1"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition cursor-pointer"
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                page === currentPage
                  ? "bg-[#15803D] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productsdetails;