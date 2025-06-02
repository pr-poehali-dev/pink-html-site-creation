import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-900 to-rose-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-pink-100">PinkSite</h3>
            <p className="text-pink-200 mb-6 max-w-md">
              Создаём волшебные цифровые решения с душой и характером. Каждый
              проект — это история успеха.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-sm">💌</span>
              </div>
              <div className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-sm">🌐</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-100">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-white transition-colors"
                >
                  Портфолио
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-100">
              Контакты
            </h4>
            <ul className="space-y-2 text-pink-200">
              <li>hello@pinksite.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-700 mt-12 pt-8 text-center">
          <p className="text-pink-200">
            © 2024 PinkSite. Создано с 💖 для вас
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
