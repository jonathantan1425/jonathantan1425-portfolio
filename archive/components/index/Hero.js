import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from 'react-spring';
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Hero() {

  return (
    <div className="mx-10 align-items:center">
      <div className="relative overflow-hidden">
        <div className="md:h-hero">
          <animated.img src="/flower.jpg" alt="Flower" className="object-cover" />
        </div>
        <div className="text absolute w-full px-2 py-20 md:px-7 top-10 left-10 inset-x-0 text-6xl lg:text-9xl font-normal text-white">
          JONATHAN TAN
        </div>
        <div className="text relative w-full p-2 md:p-8 top-10 left-10 inset-x-0 text-6xl lg:text-9xl font-bold text-white">
          I design and engineer fullstack applications.
        </div>
      </div>
    </div>
  )
}