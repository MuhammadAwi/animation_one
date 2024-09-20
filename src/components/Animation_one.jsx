/* eslint-disable @next/next/no-img-element */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import Animation_two from "./Animation_two";

export default function Animation_one() {
  const [xMove, setXMove] = useState(0);
  const [yMove, setYMove] = useState(0);
  const xMovements = gsap.utils.random(-400, 400, 10);
  const yMovements = gsap.utils.random(-200, 200, 20);
  useGSAP(() => {
    gsap.to(".animateBee", {
      x: xMove,
      y: yMovements,
      delay: 0,
    });
  }, [xMovements, yMovements]);
  useGSAP(() => {
    gsap.from(".btn", {
      opacity: 0,
      delay: 0.4,
      duration: 1,
      y: 80,
      scale: 0.9,
    });
    gsap.from("h1", {
      opacity: 0,
      duration: 0.3,
      delay: 1,
      stagger: 1,
      y: 50,
      color: "red",
    });
  });

  return (
    <div className="p-20 ">
      <div className="text-white text-[20px] ">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
      <div className="flex items-center justify-between mt-20 ">
        <div className="">
          <button
            onClick={() => {
              setXMove(xMovements);
              setYMove(yMovements);
            }}
            className="btn bg-white p-4 rounded-md text-20 active:scale-90"
          >
            Animate Me!
          </button>
          <img
            src="/assets/images/bee.webp"
            className="animateBee mt-40 "
            alt=""
          />
        </div>
        <Animation_two />
      </div>
    </div>
  );
}
