import React, { useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


import router from "../components/ContainerBlock";
import meta from "../components/ContainerBlock";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCards from "../components/projects/ProjectCards";
import ExperienceCards from "../components/experiences/ExperienceCards";
import Contact from "../components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init({});
  }, [])

  const heroBg = {
    image: '/tower.JPG',
    scale: [1, 2, "easeIn"],
    opacity: [2, 0, "easeInQuad"],
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
      <main className="bg-ivory dark:bg-dark_gray px-0 font-poppins space-y-80 transition ease-in-out">
        <ParallaxProvider>
          <div className="mx-10" name="home">
            <ParallaxBanner
              layers={[heroBg, heroText]}
              className="aspect-[1/1]"
            >
            </ParallaxBanner>
          </div>

          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10" name="about">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                ABOUT ME
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 col-span-2 lg:right-100 lg:w-2/3">
                <p className="text-6xl text-black font-poppins font-medium">
                  I bring backend and data engineering to data-intensive applications.
                </p>
                <p className="text-lg text-black font-thin">
                  I'm a penultimate student at Singapore Management University, pursuing a double degree in Business Management and Information Systems.
                  On the side, I love a cup of iced latte with a hint of cherry to beat the Singapore weather.
                  Feel free to drop me a message or browse my projects! Always happy to chat.
                </p>
                <p className="text-lg text-black font-thin">
                  Also, a couple of my current favorite tech stacks:
                </p>
                <p className="text-lg font-mono text-green dark:text-mint">
                  PYTHON JAVA REACT MYSQL REDIS KAFKA
                </p>
              </div>
            </div>
          </Parallax>

          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10" name="experience">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                WORK EXPERIENCE
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 col-span-2">
                <ExperienceCards className="min-w-1/2"/>
              </div>
            </div>
          </Parallax>

          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10 overflow-visible" name="projects">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                PROJECTS
              </div>
              <div className="relative inset-y-0 col-span-2 flex gap-10">
                <p className="py-1 text-sm text-black align-center">
                  01 / 03
                </p>
                <Link href="/projects">
                  <button className="px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-mint hover:border-mint focus:outline-none focus:ring-2 focus:ring-offset-2" disabled>
                    View All
                  </button>
                </Link>
              </div>
                <div className="relative inset-y-0 right-0 space-y-5 col-span-3 overflow-visible">
                  <ProjectCards />
                </div>
            </div>
          </Parallax>

          <Parallax 
            opacity={[0, 2, "easeOutQuad"]}
          >
            <div className="relative mx-10 grid grid-cols-3 gap-10" name="contact">
              <div className="relative mx-20 max-w-lg inset-y-0 text px-2 md:px-7 text-xl text-black align-top font-thin">
                CONTACT ME
              </div>
              <div className="relative inset-y-0 right-0 space-y-5 col-span-2">
                <Contact/>
              </div>
            </div>
          </Parallax>

          <Parallax>
            <Footer />
          </Parallax>
        </ParallaxProvider>
      </main>
    </>
  )
}

export default App;
