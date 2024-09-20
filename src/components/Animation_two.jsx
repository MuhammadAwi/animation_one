import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function Animation_two() {
  useGSAP(() => {
    gsap.from(".box", {
      rotate: 360,
      delay: 0.5,
      opacity: 0,
      duration: 1,
      scale: 0,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="secondAnimation flex items-center justify-center mt-60 ">
      <div className="box w-80 h-80 bg-yellow-600 rounded-2xl "></div>
    </div>
  );
}
