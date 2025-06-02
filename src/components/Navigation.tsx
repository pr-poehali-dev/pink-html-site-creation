import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-green-50 to-emerald-100 shadow-sm border-b border-green-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-800">
            🏛️ Казань Туризм
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
            >
              Достопримечательности
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
            >
              Культура
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
            >
              Отели
            </a>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium">
            Забронировать тур
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
