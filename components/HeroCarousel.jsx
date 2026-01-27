import { useEffect, useState } from "react";

const images = [
  "principal/Principal 01.jpeg",
  "principal/08.jpeg",
  "principal/03.jpeg",
  
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Olancho Mountains"
          className={`
            absolute inset-0 w-full h-full object-cover scale-[1.15]
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-50"></div>
    </div>
  );
}
