import { useRef, useState, useEffect } from "react";

function FloatingImage({ src, alt }) {
  const imgRef = useRef(null);
  const animationFrame = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);

    animationFrame.current = requestAnimationFrame(() => {
      const rect = imgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPos({ x, y });
    });
  };

  const handleClick = () => {
    if (!imgRef.current) return;
    imgRef.current.animate(
      [
        { transform: "scale(1.5) rotateY(0deg)" },
        { transform: "scale(1.8) rotateY(360deg)" },
        { transform: "scale(1.5) rotateY(0deg)" },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
      }
    );
  };

  const transformStyle = isHovered
    ? `scale(1.5) translate(${pos.x * 0.25}px, ${pos.y * 0.25}px) rotateX(${
        pos.y * 0.4
      }deg) rotateY(${pos.x * 0.4}deg)`
    : "scale(1) translate(0px, 0px) rotateX(0deg) rotateY(0deg)";

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="w-24 h-24 object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        willChange: isHovered ? "transform" : "auto",
      }}
    />
  );
}

export default FloatingImage;
