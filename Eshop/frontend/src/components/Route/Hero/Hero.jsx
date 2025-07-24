import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

// KanbanCard Component - Nested within the same file
const KanbanCard = ({
  businessName,
  address,
  tags,
  rating,
  avatarSrc,
}) => {
  const renderStars = (starCount) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < starCount ? "★" : "☆";
    }
    return stars;
  };

  const tagColors = {
    Grocery: "bg-blue-100 text-blue-700",
    Wholesale: "bg-yellow-100 text-yellow-700",
    "Beauty products": "bg-gray-100 text-gray-700",
    Vegetables: "bg-green-100 text-green-700",
    Fruits: "bg-gray-100 text-gray-700",
    Bakery: "bg-purple-100 text-purple-700",
    "Dairy Products": "bg-purple-100 text-purple-700",
    Product: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
      <p className="font-semibold text-gray-800">{businessName}</p>
      <p className="text-sm text-gray-600">{address}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${
              tagColors[tag] || "bg-gray-200 text-gray-800"
            } text-xs px-2 py-1 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">
            {renderStars(rating)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <img src={avatarSrc} alt="Avatar" className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// KanbanColumn Component - Nested within the same file
const KanbanColumn = ({
  title,
  cards,
  onAddCard,
}) => {
  return (
    <div className="kanban-column flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onAddCard}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m-6-6h12">
            </path>
          </svg>
        </button>
      </div>
      <div className="kanban-column-scroll space-y-4 overflow-y-auto pr-2">
        {cards.map((card, index) => (
          <KanbanCard
            key={index}
            businessName={card.businessName}
            address={card.address}
            tags={card.tags}
            rating={card.rating}
            avatarSrc={card.avatarSrc}
          />
        ))}
      </div>
    </div>
  );
};

// Main CRM Dashboard Content
const CRMDashboardContent = () => {
  const [columns, setColumns] = useState([
    {
      id: "grocery",
      title: "Grocery",
      cards: [
        {
          businessName: "Balaji Kirana",
          address: "D7 Pragati Vihar",
          tags: ["Grocery"],
          rating: 2,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Apna Kirana",
          address: "C14 bank calony",
          tags: ["Grocery"],
          rating: 1,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
      ],
    },
    {
      id: "grocery-wholesale",
      title: "Grocery & Wholesale",
      cards: [
        {
          businessName: "Pandit ji ki Dukan",
          address: "A12 Pragti Vihar",
          tags: ["Grocery", "Wholesale"],
          rating: 2,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Govind Kirana",
          address: "Kalpi road",
          tags: ["Grocery", "Wholesale"],
          rating: 1,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Annapurna Kirana",
          address: "D16 Pragti Vihar",
          tags: ["Grocery", "Wholesale"],
          rating: 0,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
      ],
    },
    {
      id: "mart",
      title: "Mart",
      cards: [
        {
          businessName: "The Small City Mart",
          address: "Race course road",
          tags: ["Grocery", "Beauty products"],
          rating: 2,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Daily Basket",
          address: "Indramni Nagar",
          tags: ["Grocery", "Vegetables"],
          rating: 2,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Agrawal & Sons Traders",
          address: "Narayan Vihar",
          tags: ["Bakery", "Dairy Products"],
          rating: 1,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Grow Fast",
          address: "Kansana Kothi",
          tags: ["Product"],
          rating: 1,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
      ],
    },
    {
      id: "vegetables-fruits",
      title: "Vegetables & Fruits",
      cards: [
        {
          businessName: "Apna Falwala",
          address: "Sabji mandi",
          tags: ["Fruits", "Vegetables"],
          rating: 2,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
        {
          businessName: "Hari Bhari Sabji",
          address: "sabji mandi",
          tags: ["Vegetables"],
          rating: 1,
          avatarSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/007/873/341/small/phone-icon-illustration-designs-that-are-suitable-for-websites-apps-and-more-free-vector.jpg",
        },
      ],
    },
  ]);

  const handleAddCard = (columnId) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        const newCard = {
          businessName: "New Opportunity Title",
          address: "New Client Name",
          tags: ["New Tag"],
          rating: 0,
          avatarSrc:
            "https://placehold.co/24x24/E0E0E0/333333?text=N",
        };
        return {
          ...column,
          cards: [newCard, ...column.cards],
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="bg-white shadow-sm p-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <img src="https://www.ewaysservices.com/images/eways.jpg" alt="Eways Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-xl font-semibold text-blue-600">
              Eways
            </h1>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Q Search"
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
              </path>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
              </path>
            </svg>
          </button>
        </div>
      </header> */}

      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        <div className="flex space-x-6 h-full items-start">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              title={column.title}
              cards={column.cards}
              onAddCard={() => handleAddCard(column.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <div
        className={relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}}
        style={{ backgroundImage: "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)" }}>
        <div className={${styles.section} w-[90%] 800px:w-[60%]}>
          <h1
            className="text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-semibold capitalize">
            Best Collection for <br /> Home Decoration
          </h1>
          <p className="pt-5 text-[16px] font-Poppins font-[400] text-[#000000ba]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className="inline-block">
            <div className={${styles.button} mt-5}>
              <span className="text-[#fff] font-Poppins text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div> */}

      {/* CRM Dashboard Section */}
      <CRMDashboardContent />
    </div>
  );
};

export default Hero;