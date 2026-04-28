import { useState } from "react";

/* ─── DATA ─── */
const ROW1 = [
  { label: "Responsive Design Controls", icon: "circle", muted: true },
  { label: "Drag and Drop UI Builder", icon: "triangle" },
  { label: "Visual Workflow Automation", icon: "square" },
  { label: "Built-in Scalable Database", icon: "triangle", muted: true },
];

const ROW2 = [
  { label: "API Integration Toolkit", icon: "circle", muted: true },
  { label: "Secure User Authentication", icon: "triangle" },
  { label: "One-Click App Deployment", icon: "circle", muted: true },
];

/* ─── ICONS ─── */
const CircleIcon = () => (
  <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#7b9de6]" />
);

const TriangleIcon = ({ muted }) => (
  <span
    className="w-0 h-0"
    style={{
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderBottom: `9px solid ${muted ? "#b0bcd8" : "#5e7dda"}`,
    }}
  />
);

const SquareIcon = () => (
  <span className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-[#3b5cdb]" />
);

function Icon({ type, muted }) {
  if (type === "circle") return <CircleIcon />;
  if (type === "triangle") return <TriangleIcon muted={muted} />;
  return <SquareIcon />;
}

/* ─── TAG ─── */
function Tag({ label, icon, muted }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border rounded-[10px] bg-white whitespace-nowrap transition-all duration-300 cursor-pointer
      ${muted ? "text-gray-400" : "text-gray-700"}
      hover:-translate-y-[2px] hover:shadow-md text-xs md:text-sm`}
    >
      <Icon type={icon} muted={muted} />
      {label}
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function DigitalMarketing() {
  return (
    <div className="font-[Poppins]">
      {/* KEYFRAMES */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* HERO */}
      <section className="text-center py-12 md:py-20 px-4">
        <h1 className="text-2xl md:text-5xl font-medium mb-3 leading-snug">
          Digital Marketing for Every Industry across The Globe
        </h1>

        <p className="text-gray-500 text-sm md:text-lg">
          From cost-effective digital marketing strategies to convenient{" "}
          <br className="hidden md:block" />
          shopping experiences with an E-commerce website
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-[#eef3fb] py-10 md:py-16 px-4 flex flex-col items-center">
        {/* ROW 1 */}
        <div
          className="mt-6 overflow-hidden w-full max-w-[1100px]
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex gap-3 md:gap-5 whitespace-nowrap animate-[scrollLeft_25s_linear_infinite] md:animate-[scrollLeft_18s_linear_infinite]">
            {[...ROW1, ...ROW1].map((item, i) => (
              <Tag key={i} {...item} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div
          className="mt-6 overflow-hidden w-full max-w-[1100px]
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex gap-3 md:gap-5 whitespace-nowrap animate-[scrollRight_25s_linear_infinite] md:animate-[scrollRight_18s_linear_infinite]">
            {[...ROW2, ...ROW2].map((item, i) => (
              <Tag key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
