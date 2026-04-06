"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  img: string;
  rate: string;
  quantity: string;
  logo: string;
  Description: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();

  const productsData: Record<string, Product[]> = {
    coco: [
      {
        id: 1,
        name: "Coco Powder",
        brand: "Coco",
        price: "NPR 13641",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/5/308328905/KB/KA/VP/798985/cocoa-powder-1-kg-1000x1000.jpg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
        Description:
          "High-quality cocoa powder perfect for baking and beverages.",
      },
      {
        id: 2,
        name: "Dark Chocolate",
        brand: "Coco",
        price: "NPR 1500",
        img: "https://tse1.mm.bing.net/th/id/OIP.VeVdBK9dzHdUR6Lcadl1fwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png",
        Description:
          "Rich and delicious dark chocolate for desserts and snacks.",
      },
    ],
    kraft: [
      {
        id: 3,
        name: "Kraft Cheese",
        brand: "Kraft",
        price: "NPR 800",
        img: "https://kraftnaturalcheese.com/wp-content/uploads/2022/07/shredded_sharp-cheddar_fine_8oz.jpg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://logos-world.net/wp-content/uploads/2023/03/Kraft-Foods-Logo-1960-500x281.png",
        Description: "Creamy and flavorful cheese for your meals.",
      },
      {
        id: 4,
        name: "Kraft Butter",
        brand: "Kraft",
        price: "NPR 1200",
        img: "https://caffeinecam.com/cdn/shop/files/51815934575d6ee3afba51008a35384a60295bf4ba91d13efdebf3e6e499c9d2__39252.1651937463.1280.1280.jpg?v=1689674558",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://logos-world.net/wp-content/uploads/2023/03/Kraft-Foods-Logo-1960-500x281.png",
        Description: "Smooth and fresh butter for cooking and baking.",
      },
    ],
    pepsi: [
      {
        id: 5,
        name: "Pepsi Can",
        brand: "Pepsi",
        price: "NPR 200",
        img: "https://www.pizzaboxbanksiagrove.com.au/wp-content/uploads/2023/02/Can-Pepsi.jpg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969-2048x1152.png",
        Description: "Refreshing and carbonated soft drink in a can.",
      },
      {
        id: 6,
        name: "Pepsi Bottle",
        brand: "Pepsi",
        price: "NPR 300",
        img: "https://i5.walmartimages.com/asr/b38dc094-610a-4f09-8768-0ffc3579b4c1.fa1789875811c789c50794326229e168.jpeg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969-2048x1152.png",
        Description: "Refreshing Pepsi in a convenient bottle size.",
      },
    ],
    nestle: [
      {
        id: 7,
        name: "Nestle Milk",
        brand: "Nestle",
        price: "NPR 500",
        img: "https://pbs.twimg.com/media/E4pfDxPWEAQ7aGb.jpg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://logoeps.com/wp-content/uploads/2013/04/nestle-deserts-vector-logo.png",
        Description: "Fresh and nutritious milk for your family.",
      },
      {
        id: 8,
        name: "Nestle KitKat",
        brand: "Nestle",
        price: "NPR 200",
        img: "https://propack.pro/wp-content/uploads/2023/01/nestle.jpg",
        rate: "4.5(1k reviews)",
        quantity: "MOQ: 50 units",
        logo: "https://logoeps.com/wp-content/uploads/2013/04/nestle-deserts-vector-logo.png",
        Description: "Delicious chocolate wafers to enjoy anytime.",
      },
    ],
  };

  const allProducts: Product[] = Object.values(productsData).flat();

  // --- Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, allProducts.length);
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (page: number) => setCurrentPage(page);

  // --- WhatsApp function ---
  const sendWhatsApp = (item: Product) => {
    const phone = "9779762483563"; // your WhatsApp number
    const message = `Hello, I am interested in this product:
Name: ${item.name}
Brand: ${item.brand}
Price: ${item.price}
Quantity: ${item.quantity}
Description: ${item.Description}
Image: ${item.img}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 sm:p-6 md:p-12 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#005C49]">
        Popular Products
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-start">
        Showing {startIndex + 1}-{endIndex} of {allProducts.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
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
              <div className="absolute top-2 left-2 p-1 sm:p-2 rounded-full">
                <img
                  src={item.logo}
                  alt="brand logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain transform group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>

            <div className="bg-white p-3 sm:p-5 relative">
              <p className="text-xs sm:text-sm text-gray-500">
                {item.quantity}
              </p>
              <h3 className="text-sm sm:text-base font-bold">{item.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Price</p>
              <p className="text-sm sm:text-base font-bold mt-1 sm:mt-2">
                {item.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sendWhatsApp(item);
                }}
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg shadow-lg"
              >
                Whatsapp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 flex-wrap">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm transition ${
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
          className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
