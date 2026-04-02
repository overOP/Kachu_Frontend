import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";

type Factory = {
  title: string;
  banner: string;
  desc: string;
  sideImg: string;
  bottomImg: string;
  location: string;
  established: string;
};

type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
};

type FactoryKey = "coco" | "kraft" | "pepsi" | "nestle";

const ShopBydetails: React.FC = () => {
  const { name } = useParams<{ name: FactoryKey }>();

  const factoryDetails: Record<FactoryKey, Factory> = {
    coco: {
      title: "Coco Factory",
      banner: "../public/shop/coco/cococo.png",
      desc: "Bottlers Nepal Limited (BNL) is a public listed company in Nepal, with operations spanning over 44 years, located in the Balaju Indistrial District (BID) in Kathmandu. The plant has both Returnable Glass Bottles (RGB) and PET packaging lines, producing different products from the portfolio to serve consumers their favorite beverages at all times.",
      sideImg: "/shop/coco/img2.png",
      bottomImg: "/shop/coco/img3.png",
      location:
        "Bottlers Nepal Limited, Balaju,\nIndustrial District Balaju, \nKathmandu, Nepal",
      established: "1979",
    },
    kraft: {
      title: "Kraft Heinz Factory",
      banner: "/shop/kraft/img.png",
      desc: "The Kraft Heinz Company is one of the world's largest food and beverage manufacturers, formed in 2015 through the merger of Kraft Foods Group and H.J. Heinz Company. The company operates globally, producing a wide range of consumer food products including condiments, cheese, dairy, ready-to-eat meals.",
      sideImg: "/shop/kraft/img2.png",
      bottomImg: "/shop/kraft/img3.png",
      location: "Chicago, Illinois, USA\nPittsburgh, Pennsylvania, USA",
      established: "2015",
    },
    pepsi: {
      title: "Pepsi Factory",
      banner: "/shop/pepsi/img.jpg",
      desc: "Varun Beverages Nepal is the authorized manufacturer and distributor of Pepsi products in Nepal. The company produces a wide range of beverages including Pepsi, Mountain Dew, Mirinda, 7UP, Aquafina, and Sting. With modern bottling plants and a strong distribution network, Pepsi products are widely available across Nepal.",
      sideImg: "/shop/pepsi/img2.jpg",
      bottomImg: "/shop/pepsi/img3.jpg",
      location: "Pepsi-Cola, Kathmandu, Nepal\nNawalparasi, Nepal",
      established: "1985 ",
    },
    nestle: {
      title: "Nestlé",
      banner:
        "https://fabrikbrands.com/wp-content/uploads/Brands-Owned-By-Nestle-hero-scaled.jpg",
      desc: "Nestlé is one of the world's largest food and beverage companies, founded in Switzerland in 1867. In Nepal, Nestlé products such as Nescafé, Maggi, KitKat, Cerelac, and Lactogen are widely available through distributors and retail networks. The company does not operate a major manufacturing plant in Nepal but serves the market through imports and distribution channels.",
      sideImg:
        "https://i.pinimg.com/736x/19/9d/ca/199dca07de54667b5aa94ee12baf0185.jpg",
      bottomImg:
        "https://i.pinimg.com/736x/37/c5/2e/37c52e536dba34327750afcc86d2a84c.jpg",
      location:
        "Available across Nepal (via distributors)\nNo manufacturing plant in Nepal",
      established: "1867 (Global Company)",
    },
  };

  const productsData: Record<FactoryKey, Product[]> = {
    coco: [
      { id: 1, name: "Coco Powder", price: "NPR 13641", img: "/products/coco1.png" },
      { id: 2, name: "Dark Chocolate", price: "NPR 1500", img: "/products/coco2.png" },
      { id: 3, name: "Cocoa Butter", price: "NPR 2200", img: "/products/coco3.png" },
      { id: 4, name: "Chocolate Drink", price: "NPR 500", img: "/products/coco4.png" },
    ],
    kraft: [
      { id: 1, name: "Kraft Cheese", price: "NPR 800", img: "/products/kraft1.png" },
      { id: 2, name: "Heinz Ketchup", price: "NPR 450", img: "/products/kraft2.png" },
      { id: 3, name: "Kraft Mayonnaise", price: "NPR 600", img: "/products/kraft3.png" },
      { id: 4, name: "Mac & Cheese", price: "NPR 700", img: "/products/kraft4.png" },
    ],
    pepsi: [
      { id: 1, name: "Pepsi Bottle", price: "NPR 120", img: "/products/pepsi1.png" },
      { id: 2, name: "Mountain Dew", price: "NPR 130", img: "/products/pepsi2.png" },
      { id: 3, name: "7UP", price: "NPR 120", img: "/products/pepsi3.png" },
      { id: 4, name: "Mirinda", price: "NPR 120", img: "/products/pepsi4.png" },
    ],
    nestle: [
      { id: 1, name: "Nescafé Coffee", price: "NPR 350", img: "/products/nestle1.png" },
      { id: 2, name: "KitKat", price: "NPR 60", img: "/products/nestle2.png" },
      { id: 3, name: "Maggi Noodles", price: "NPR 30", img: "/products/nestle3.png" },
      { id: 4, name: "Cerelac", price: "NPR 450", img: "/products/nestle4.png" },
    ],
  };

  const factory = name ? factoryDetails[name] : undefined;
  const products = name ? productsData[name] : [];

  if (!factory) return <div className="p-10">Factory not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img src={factory.banner} alt="" className="w-full h-100 object-cover" />
        <h1 className="absolute bottom-6 left-40 mb-28 text-white text-3xl font-bold">
          {factory.title}
        </h1>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12 bg-gray-200">
        <div>
          <p className="text-gray-700 text-[19px] leading-relaxed mt-40">
            {factory.desc}
          </p>
          <img src={factory.bottomImg} alt="" className="rounded-xl w-162 h-106 mt-50" />
        </div>

        <div>
          <img src={factory.sideImg} alt="" className="rounded-xl w-90 h-112.5 mt-4 ml-50" />
          <div className="p-4 rounded-xl mt-40 flex flex-col gap-4">
            <p className="text-gray-700 text-sm whitespace-pre-line">
              <strong className="text-[19px]">Location</strong> <br />
              <span className="text-[16px]">{factory.location}</span>
            </p>
            <p className="text-gray-700 text-sm">
              <strong className="text-[19px]">Established</strong> <br />
              <span className="text-[16px]">{factory.established}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="p-6 md:p-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Products from this Factory
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
            >
              <a
                href={`https://wa.me/9762483563?text=I want to buy ${item.name}`}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-green-500 text-white p-2 rounded-full text-xl hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBydetails;