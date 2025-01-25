import React, { useEffect, useRef, useState } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

interface BouncingBallProps {
  colors?: string[]; // Array of colors for the balls
}

const BouncingBall: React.FC<BouncingBallProps> = ({
  colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Create 4 bouncing balls with random initial positions, velocities, and colors
    const balls: Ball[] = [...colors, ...colors].map((color) => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      dx: (Math.random() - 0.5) * 1.5, // Random horizontal speed
      dy: (Math.random() - 0.5) * 1.5, // Random vertical speed
      radius: 30 + Math.random() * 40, // Random radius between 30 and 70
      color,
    }));

    const resizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const drawBall = (ball: Ball) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color; // Set the ball color
      ctx.fill();
      ctx.closePath();
    };

    const update = () => {
      // Clear the canvas before drawing the balls
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas

      // Update each ball's position and handle wall collisions
      balls.forEach((ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Ball collision with walls
        if (
          ball.x + ball.radius > windowSize.width ||
          ball.x - ball.radius < 0
        ) {
          ball.dx *= -1;
        }
        if (
          ball.y + ball.radius > windowSize.height ||
          ball.y - ball.radius < 0
        ) {
          ball.dy *= -1;
        }

        // Draw each ball
        drawBall(ball);
      });

      animationFrameId = requestAnimationFrame(update);
    };

    const initialize = () => {
      canvas.width = windowSize.width;
      canvas.height = windowSize.height;
      update();
    };

    initialize();

    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [windowSize, colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -2,
        pointerEvents: "none",
      }}
    />
  );
};

export default BouncingBall;
