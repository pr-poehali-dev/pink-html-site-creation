import React from "react";

const ContentCards = () => {
  const cards = [
    {
      title: "Казанский Кремль",
      description:
        "Объект Всемирного наследия ЮНЕСКО. Древняя крепость с мечетью Кул-Шариф, башней Сююмбике и Благовещенским собором.",
      icon: "🏰",
    },
    {
      title: "Мечеть Кул-Шариф",
      description:
        "Главная мечеть Татарстана и одна из самых больших в России. Символ возрождения исламской культуры в регионе.",
      icon: "🕌",
    },
    {
      title: "Казанский университет",
      description:
        "Один из старейших университетов России, где учились Лев Толстой и Владимир Ленин. Памятник образования и науки.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Главные достопримечательности
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Казань — это живая история, где каждый камень хранит память веков
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
            >
              <div className="text-4xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-green-600 text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
