import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-100 shadow-sm border-b border-pink-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-800">PinkSite</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-pink-700 hover:text-pink-900 transition-colors duration-200 font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-pink-700 hover:text-pink-900 transition-colors duration-200 font-medium"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-pink-700 hover:text-pink-900 transition-colors duration-200 font-medium"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-pink-700 hover:text-pink-900 transition-colors duration-200 font-medium"
            >
              Контакты
            </a>
          </div>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 font-medium">
            Связаться
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
