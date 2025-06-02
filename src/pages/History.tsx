import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const History = () => {
  const timelinePeriods = [
    {
      period: "1005 год",
      title: "Основание Казани",
      description: "Город основан булгарами как крепость на берегу Казанки",
      icon: "🏰",
    },
    {
      period: "1438 год",
      title: "Казанское ханство",
      description: "Образование независимого Казанского ханства",
      icon: "👑",
    },
    {
      period: "1552 год",
      title: "Присоединение к России",
      description:
        "Иван Грозный завоевал Казань, город вошёл в состав Московского государства",
      icon: "⚔️",
    },
    {
      period: "1804 год",
      title: "Казанский университет",
      description: "Основан один из старейших университетов России",
      icon: "📚",
    },
    {
      period: "1920 год",
      title: "Татарская АССР",
      description:
        "Казань стала столицей Татарской Автономной Советской Социалистической Республики",
      icon: "🏛️",
    },
    {
      period: "2005 год",
      title: "1000-летие города",
      description: "Масштабная реконструкция к юбилею, строительство метро",
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">📜 История Казани</h1>
          <p className="text-xl opacity-90">
            Тысячелетняя история великого города
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              Ключевые события
            </h2>

            <div className="space-y-8">
              {timelinePeriods.map((period, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-red-600"
                >
                  <div className="text-4xl">{period.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-green-800">
                        {period.title}
                      </h3>
                      <span className="text-red-600 font-semibold text-lg">
                        {period.period}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {period.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              Культурное наследие
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🕌</div>
                <h3 className="font-bold text-green-700 mb-2">Ислам</h3>
                <p className="text-gray-600">
                  Татарская исламская культура с древними традициями
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="font-bold text-green-700 mb-2">Православие</h3>
                <p className="text-gray-600">
                  Русские православные храмы и монастыри
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="font-bold text-green-700 mb-2">Театр</h3>
                <p className="text-gray-600">
                  Богатые театральные и музыкальные традиции
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
