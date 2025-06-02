import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-green-100">
              🏛️ Казань Туризм
            </h3>
            <p className="text-green-200 mb-6 max-w-md">
              Откройте для себя красоту и историю столицы Татарстана. Мы поможем
              вам спланировать незабываемое путешествие.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm">✉️</span>
              </div>
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm">🌐</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-100">
              Разделы
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Кремль
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Музеи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Рестораны
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  События
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-100">
              Контакты
            </h4>
            <ul className="space-y-2 text-green-200">
              <li>info@kazan-tourism.ru</li>
              <li>+7 (843) 567-89-10</li>
              <li>Казань, Татарстан</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Казань Туризм. Создано с ❤️ для путешественников
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
