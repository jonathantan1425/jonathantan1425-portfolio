import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Aos from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from 'react-scroll-parallax';

import ContainerBlock from "../components/ContainerBlock"
import router from "../components/ContainerBlock";
import meta from "../components/ContainerBlock";
import IndexAbout from "../components/index/IndexAbout";
import IndexContact from "../components/index/IndexContact";
import IndexEducation from "../components/index/IndexEducation";
import IndexProjects from "../components/index/IndexProjects";
import Hero from "../components/index/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <>
      <Head>
        <title>{meta.data}</title>
        <meta content={meta.description} name="description" />
        <meta
            property="og:url"
            content={`https://localhost${router.asPath}`}
        />
        <link
            rel="canonical"
            href={`https://localhost${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jonathan Tan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="h-screen bg-ivory dark:bg-dark_gray px-0">
        {/* <Parallax pages={3} className="scroll-smooth"> */}
          {/* <ParallaxLayer sticky={true}> */}
            <Navbar/>
          {/* </ParallaxLayer> */}
          {/* <ParallaxLayer
            offset={0.05}
            speed={2}
            > */}
            <div className="static mx-10 align-items:center">
              <div className="relative overflow-hidden">
                {/* <div className="md:h-hero"> */}
                {/* </div> */}
                <img src="/flower.jpg" alt="Flower" className="object-cover" />
              </div>
              <div className="absolute w-full px-2 py-20 md:px-7 top-10 left-10 inset-x-0">
                <p className="text-6xl lg:text-9xl font-normal text-white">
                  JONATHAN TAN
                </p>
                <p className="text-xl lg:text-3xl font-normal text-white">
                  I design and engineer fullstack applications
                </p>
              </div>
            </div>
          {/* </ParallaxLayer>
          <ParallaxLayer
            offset={0.1}
            speed={1}
            > */}
            
          {/* </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={0.5}
            > */}
            <div className="relative mx-10">
              <div className="static inset-y-0 left-0 text w-2/5 px-2 py-20 md:px-7 text-3xl text-black">
                ABOUT ME
              </div>
              <div className="inline-block inset-y-0 right-0">
                <p className="text-semibold text-2xl text-black">
                  I design and build data-intensive web applications, bringing the best of backend and data engineering.
                </p>
                <p className="text-xl text-black">
                  Problem-solving is my greatest passion. Code is a fabulous tool to dissect and resolve all kinds of problems. My formal disciplines in business, analytics, information systems and cloud solutions help me deliver business logic in my work.
                  On the side, I always love a cup of iced latte to beat the Singapore weather.
                  Feel free to drop me a message or browse my projects! Always happy to chat.
                </p>
              </div>
            </div>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={2}
            speed={0.5}
            > */}
            <Footer />
          {/* </ParallaxLayer> */}
        {/* </Parallax> */}
      </main>
    </>
  )
}

export default App;
