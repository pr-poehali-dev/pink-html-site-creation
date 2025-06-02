import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-pink-900 mb-6 leading-tight">
            Добро пожаловать в
            <span className="text-pink-600 block mt-2">мир розовых грёз</span>
          </h1>
          <p className="text-xl text-pink-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаём удивительные проекты с изысканным дизайном и неповторимой
            атмосферой. Погрузитесь в мир элегантности и красоты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Начать путешествие
            </button>
            <button className="border-2 border-pink-500 text-pink-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-500 hover:text-white transition-all duration-200">
              Узнать больше
            </button>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;
