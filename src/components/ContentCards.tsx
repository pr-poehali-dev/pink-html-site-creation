import React from "react";

const ContentCards = () => {
  const cards = [
    {
      title: "Элегантный дизайн",
      description:
        "Создаём визуально привлекательные решения, которые радуют глаз и создают незабываемые впечатления.",
      icon: "🌸",
    },
    {
      title: "Инновационные решения",
      description:
        "Используем передовые технологии и креативный подход для достижения выдающихся результатов.",
      icon: "✨",
    },
    {
      title: "Индивидуальный подход",
      description:
        "Каждый проект уникален. Мы учитываем все ваши пожелания и создаём персональные решения.",
      icon: "💖",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Мы создаём не просто сайты, а целые цифровые произведения искусства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100"
            >
              <div className="text-4xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-bold text-pink-800 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-pink-600 text-center leading-relaxed">
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
