"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  useEffect(() => {
    const setupMatrix = (canvas) => {
      const ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = "source-over";

      const letters = "01";
      const fontSize = 26;
      let width = (canvas.width = window.innerWidth * 0.15);
      let height = (canvas.height = window.innerHeight);

      const columns = Math.floor(width / fontSize);
      const drops = Array(columns)
        .fill()
        .map(() => ({
          y: Math.random() * height,
          speed: Math.random() * 0.1 + 0.1, // ✅ much slower and smoother
        }));

      function draw() {
        // Clear softly (keeps slight trail without black overlay)
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.clearRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;
        ctx.shadowColor = "rgba(16,185,129,0.4)";
        ctx.shadowBlur = 4;

        drops.forEach((drop, i) => {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          const x = i * fontSize;
          const y = drop.y * fontSize;

          ctx.fillStyle = "rgba(16,185,129,0.7)";
          ctx.fillText(text, x, y);

          // Move down slowly
          drop.y += drop.speed;

          // Reset smoothly at random points, not instant pop
          if (y > height * 0.7 && Math.random() > 0.995) {
            drop.y = 0;
          }
        });
      }

      const interval = setInterval(draw, 60); // ✅ slower update rate for fluidity

      const handleResize = () => {
        width = canvas.width = window.innerWidth * 0.15;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize);
      };
    };

    if (leftCanvasRef.current) setupMatrix(leftCanvasRef.current);
    if (rightCanvasRef.current) setupMatrix(rightCanvasRef.current);
  }, []);

  return (
    <>
      {/* Left side */}
      <canvas
        ref={leftCanvasRef}
        className="fixed top-0 left-0 h-full w-[15vw] z-10 opacity-40 pointer-events-none"
        style={{ background: "transparent" }}
      />
      {/* Right side */}
      <canvas
        ref={rightCanvasRef}
        className="fixed top-0 right-0 h-full w-[15vw] z-10 opacity-40 pointer-events-none"
        style={{ background: "transparent" }}
      />
    </>
  );
}
