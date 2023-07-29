"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsBlack = Poppins({ subsets: ["latin"], weight: "900" });

export default function Hero() {
  return (
    <div className="flex flex-col h-[90vh] items-center justify-center">
      <div className="h-3/5">
        <Image alt="profile" src="/hero_profile.svg" layout="fill" priority />
      </div>
      <div
        className={`${poppinsBlack.className} rellax text-turquoise-950 text-3xl xxs:text-5xl xs:text-7xl sm:text-[108px] md:text-[136px] lg:text-[192px] xl:text-[224px] 2xl:text-[256px] text-center max-w-screen mx-auto`}
        data-rellax-speed="7"
      >
        JONATHAN
      </div>
    </div>
  );
}
