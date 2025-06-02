import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-green-900 mb-6 leading-tight">
            Добро пожаловать в
            <span className="text-red-700 block mt-2">Казань 🕌</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя третью столицу России — город, где встречаются
            Восток и Запад, древние традиции и современная культура в сердце
            Татарстана.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Планировать поездку
            </button>
            <button className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-200">
              Виртуальная экскурсия
            </button>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
