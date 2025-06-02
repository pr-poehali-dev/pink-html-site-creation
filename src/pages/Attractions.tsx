import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Attractions = () => {
  const attractions = [
    {
      title: "Казанский кремль",
      description:
        "Объект всемирного наследия ЮНЕСКО с уникальной архитектурой",
      image:
        "https://images.unsplash.com/photo-1580500166-afdb6b1e85eb?w=800&h=400&fit=crop",
      highlights: [
        "Мечеть Кул-Шариф",
        "Благовещенский собор",
        "Башня Сююмбике",
      ],
    },
    {
      title: "Мечеть Кул-Шариф",
      description: "Главная соборная мечеть Республики Татарстан",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=400&fit=crop",
      highlights: ["8 минаретов", "Музей ислама", "Смотровая площадка"],
    },
    {
      title: "Улица Баумана",
      description: "Пешеходная улица в историческом центре города",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      highlights: ["Театры и музеи", "Кафе и рестораны", "Уличные артисты"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🏛️ Достопримечательности Казани
          </h1>
          <p className="text-xl opacity-90">
            Откройте для себя красоту древней столицы Татарстана
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-3xl font-bold text-green-800 mb-4">
                      {attraction.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {attraction.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-700">
                        Основные особенности:
                      </h4>
                      <ul className="space-y-1">
                        {attraction.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <span className="text-red-600 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Attractions;
