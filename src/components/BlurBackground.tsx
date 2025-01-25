import React from "react";
import "../styles/globals.css";

function BlurBackground() {
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/30 pointer-events-none z-[-1]"></div>
  );
}

export default BlurBackground;
