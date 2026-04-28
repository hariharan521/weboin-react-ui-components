import React, { useEffect, useState } from "react";
import portfolioData from "../../DB/Portfolio.json";

const PortfolioCard = () => {
  const projects = portfolioData.projects || [];

  const [sliders, setSliders] = useState(() => {
    const init = {};
    projects.forEach((item) => (init[item.id] = 0));
    return init;
  });

  const [counters, setCounters] = useState({});

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setSliders((prev) => {
        const updated = { ...prev };
        projects.forEach((item) => {
          updated[item.id] = (updated[item.id] + 1) % item.images.length;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ANIMATED COUNTERS
  useEffect(() => {
    const initial = {};
    projects.forEach((item) => {
      item.stats.forEach((_, idx) => {
        initial[`${item.id}-${idx}`] = 0;
      });
    });
    setCounters(initial);

    const timeout = setTimeout(() => {
      projects.forEach((item) => {
        item.stats.forEach((stat, idx) => {
          const key = `${item.id}-${idx}`;
          const target = parseFloat(stat.value);
          const steps = 80;
          const inc = target / steps;
          let cur = 0;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            cur = Math.min(cur + inc, target);
            setCounters((prev) => ({ ...prev, [key]: cur }));
            if (step >= steps) clearInterval(timer);
          }, 20);
        });
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const formatValue = (value, suffix) => {
    const num = parseFloat(value);
    if (["ms", "fps", "%", "+", "x", "K"].includes(suffix)) {
      return Math.round(num) + suffix;
    }
    return Number.isInteger(num) ? num + suffix : num.toFixed(1) + suffix;
  };

  const Card = ({ data, reverse }) => {
    const current = sliders[data.id] || 0;

    return (
      <div
        className={`flex flex-col md:flex-row ${
    reverse ? "md:flex-row-reverse" : ""
  } rounded-3xl overflow-hidden bg-white shadow-lg md:shadow-none`}
      >
        {/* SLIDER */}
        <div
          className="relative flex-shrink-0 w-full md:w-[420px] overflow-hidden rounded-3xl"
          style={{ height: "320px", minHeight: "320px" }}
        >
          {/* Badge */}
          <div className="absolute top-4 left-0 right-0 flex ml-5 z-20 pointer-events-none">
            <div className="px-4 py-1.5 text-[11px] font-medium text-white bg-black/25 backdrop-blur-md border border-white/25 rounded-full shadow-sm">
              Explore Our Success Stories
            </div>
          </div>

          {/* Slides wrapper — clips to container */}
          <div className="relative w-full h-full overflow-hidden">
            {data.images.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "scale(1)" : "scale(1.04)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  zIndex: i === current ? 1 : 0,
                }}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {data.images.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setSliders((prev) => ({ ...prev, [data.id]: i }))
                }
                className={`h-2 rounded-full transition-all duration-500 border-0 cursor-pointer ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* GAP between slider and content — visible on desktop */}
     <div className="hidden md:block w-4 flex-shrink-0" />

<div className="h-3 md:hidden" />

        {/* CONTENT */}
        <div
          className="flex-1 flex flex-col justify-center gap-4 p-6 md:p-8 rounded-3xl"
          style={{
            background: "rgba(222, 221, 240, 0.4)",
            backdropFilter: "blur(16px)",
            minHeight: "320px",
          }}
        >
          <span className="text-xs font-semibold bg-white/70 px-3 py-1 rounded-full w-fit text-gray-600 shadow-sm">
            {data.category}
          </span>

          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] leading-snug">
            {data.title}
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            {data.description}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            {data.stats.map((stat, idx) => {
              const key = `${data.id}-${idx}`;
              const displayed = counters[key] ?? 0;
              return (
                <div
                  key={idx}
                  className="bg-white/80 rounded-2xl text-center shadow-sm"
                  style={{ padding: "10px 6px" }}
                >
                  <div className="font-bold text-lg md:text-xl text-[#1a1a2e]">
                    {formatValue(displayed, stat.suffix)}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {projects.map((item, index) => (
        <Card key={item.id} data={item} reverse={index % 2 === 1} />
      ))}
    </div>
  );
};

export default PortfolioCard;
