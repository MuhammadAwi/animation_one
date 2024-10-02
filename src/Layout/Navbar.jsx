import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".container", {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 1,
    });
  });
  useGSAP(() => {
    tl.from("p", {
      y: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  });
  return (
    <div className="container flex items-center justify-between p-10 text-white text-[20px] ">
      <button className=" text-[40px] font-semibold font-mono ">Muhammad Awais</button>
      <div className="flex items-center gap-6 list ">
        <p>About</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Footer</p>
      </div>
    </div>
  );
}
