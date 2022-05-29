import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Head from "next/head";
import Link from "next/link";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


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
import ProjectCards from "../components/projects/ProjectCards";
import ExperienceCards from "../components/experiences/ExperienceCards";

const App = () => {
  useEffect(() => {
    Aos.init({});
  }, [])

  const heroBg = {
    image: '/tower.JPG',
    scale: [1, 2, "easeIn"],
  }

  const heroText = {
    translateY: [0, 90],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-x-0 inset-y-20 flex flex-col items-center justify-start">
        <p className="text-8xl lg:text-9xl font-thin text-white font-sans">
          JONATHAN TAN
        </p>
        <p className="text-xl lg:text-3xl font-thin font-sans text-white text-center items-stretch">
          I design and engineer fullstack applications
        </p>
      </div>
    )
  }

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
      <Navbar/>
      <main className="bg-ivory dark:bg-dark_gray px-0 font-poppins space-y-80">
        {/* <Parallax pages={4} className="scroll-smooth">
          <ParallaxLayer
            speed={0}
            className="sticky z-0 font-poppins"> */}
        <ParallaxProvider>
          {/* <Parallax>
            <Navbar/>
          </Parallax> */}
          {/* </ParallaxLayer> */}
          {/* <ParallaxLayer
            offset={0.05}
            speed={2}
            > */}
          {/* <Parallax>
            <div className="static mx-10 align-items:center">
              <div className="relative overflow-hidden">
                <img src="/tower2.jpg" alt="Tower" className="object-cover" />
              </div>
              <div className="absolute w-full m-20 top-10 left-10 inset-x-0 space-y-5">
                <p className="text-8xl lg:text-9xl font-normal text-white">
                  JONATHAN TAN
                </p>
                <p className="ml-32 lg:ml-96 text-xl lg:text-3xl font-normal text-white">
                  I design and engineer fullstack applications
                </p>
              </div>
            </div>
          </Parallax> */}
          <div className="mx-10">
            <ParallaxBanner
              layers={[heroBg, heroText]}
              className="aspect-[1/1]"
            >
              {/* <div className="absolute inset-x-0 inset-y-20 flex flex-col items-center justify-start">
                <p className="text-8xl lg:text-9xl font-thin text-white font-sans">
                  JONATHAN TAN
                </p>
                <p className="text-xl lg:text-3xl font-thin font-sans text-white text-center items-stretch">
                  I design and engineer fullstack applications
                </p>
              </div> */}
            </ParallaxBanner>
          </div>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={1}
            speed={0.5}
            > */}
          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10" id="/#about">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                ABOUT ME
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 md:col-span-2">
                <p className="text-6xl text-black font-poppins font-medium">
                  I bring backend and data engineering to data-intensive applications.
                </p>
                <p className="text-lg text-black font-thin">
                  I&aposm a penultimate student at Singapore Management University, pursuing a double degree in Business Management and Information Systems.
                  On the side, I love a cup of iced latte with a hint of cherry to beat the Singapore weather.
                  Feel free to drop me a message or browse my projects! Always happy to chat.
                </p>
                <p className="text-lg text-black font-thin">
                  Also, a couple of my current favorite tech stacks:
                </p>
                <p className="text-lg font-mono text-green">
                  PYTHON JAVA REACT MYSQL REDIS KAFKA
                </p>
              </div>
            </div>
          </Parallax>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={1.5}
            speed={0.5}
            > */}
          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                WORK EXPERIENCE
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 col-span-2">
                <div>
                  <ExperienceCards/>
                </div>
              </div>
            </div>
          </Parallax>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={2}
            speed={0.5}
            className="overflow-visible"
            > */}
          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10 overflow-visible">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                PROJECTS
              </div>
              <div className="relative inset-y-0 col-span-2 flex gap-10">
                <p className="py-1 text-sm text-black align-center">
                  01 / 05
                </p>
                <Link href="/projects">
                  <button className="px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-mint hover:border-mint focus:outline-none focus:ring-2 focus:ring-offset-2">
                    View All
                  </button>
                </Link>
              </div>
                <div className="relative inset-y-0 right-0 space-y-5 col-span-3 overflow-visible">
                  <ProjectCards />
                </div>
            </div>
          </Parallax>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={3}
            speed={0.5}
            > */}
          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                CONTACT ME
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 col-span-2">
                {/* Insert Contact Me Form */}
              </div>
            </div>
          </Parallax>
          {/* </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={3.5}
            speed={0.5}
            > */}
          <Parallax>
            <Footer />
          </Parallax>
          {/* </ParallaxLayer> */}
        {/* </Parallax> */}
        </ParallaxProvider>
      </main>
    </>
  )
}

export default App;
