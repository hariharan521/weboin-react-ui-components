import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const getLayerStyle = (diff) => {
  if (diff === 0) return {
    transform: "translateY(0px) scale(1)",
    opacity: 1,
    zIndex: 30,
  };
  if (diff === 1) return {
    transform: "translateY(-22px) scale(0.95)",
    opacity: 0.7,
    zIndex: 20,
  };
  if (diff === 2) return {
    transform: "translateY(-40px) scale(0.9)",
    opacity: 0.4,
    zIndex: 10,
  };
  return {
    transform: "translateY(70px) scale(0.85)",
    opacity: 0,
    zIndex: 0,
  };
};

export default function AboutWeboin() {

  const [cards, setCards] = useState([]);
  const [about, setAbout] = useState({});
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/about.json")
      .then(res => res.json())
      .then(data => {
        setCards(data.cards);
        setAbout(data.about);
      });
  }, []);

  const total = cards.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!total) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, total]);

  if (!cards.length) return null;

  return (
    <section className="w-full h-screen flex bg-white font-[Poppins]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full px-8 md:px-14">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="border border-gray-800 text-gray-800 px-4 py-1 rounded-full text-lg w-fit mb-6">
            About Weboin
          </span>

          <h2 className="text-5xl font-medium text-[#1e2a6e] leading-tight mb-6">
            {about.heading}
          </h2>

          <p className="text-lg text-gray-500 mb-4">
            {about.subtext}
          </p>

          <p className="text-lg text-gray-700">
            {about.description}
          </p>
        </motion.div>

        {/* RIGHT SLIDER */}
        <div className="relative w-[540px] h-[340px] mt-32 ml-10">

          {cards.map((card, i) => {
            const diff = (i - current + total) % total;
            const style = getLayerStyle(diff);
            const isActive = diff === 0;

            return (
              <div
                key={card.id}
                onClick={isActive ? next : undefined}
                style={style}
                className={`absolute bottom-0 left-0 right-0 h-[280px] 
                  rounded-2xl p-6 flex flex-col justify-between
                  transition-all duration-500 cursor-pointer
                  
                  ${diff === 0 && "bg-gradient-to-br from-[#1B2A6B] to-[#0A1240] shadow-2xl"}
                  ${diff === 1 && "bg-[#16235a]"}
                  ${diff === 2 && "bg-[#111d4e]"}
                `}
              >
                <div>
                  <h2 className="text-white text-xl font-bold text-center mb-3">
                    {card.title}
                  </h2>

                  <p className="text-gray-200 text-sm text-center leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}