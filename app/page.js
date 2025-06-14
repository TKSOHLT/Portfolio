"use client";

import React, { useEffect, useState, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "./animations";
import Header from "./components/Header";
import HabilitiesCard from "./HabilitiesCard";
import Head from "next/head";
import Socials from "./components/Socials";
import WorkCard from "./components/WorkCard";
import ProjectResume from "./components/ProjectResume";
import { useTheme } from "next-themes";
import { useLanguage } from '@/src/context/LanguageContext';
import FloatingImage from "./FloatingImage";

export default function Home() {
  const { data } = useLanguage();
  const { resume } = data;

  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const theme = useTheme();
  const [visibleCount, setVisibleCount] = useState(6);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };


  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useIsomorphicLayoutEffect(() => {
    if (
      textOne.current &&
      textTwo.current &&
      textThree.current &&
      textFour.current
    ) {
      stagger(
        [textOne.current, textTwo.current, textThree.current, textFour.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>

        {/* About */}
        <div className="relative mt-10 laptop:mt-20 p-2 laptop:p-0 flex flex-col laptop:flex-row justify-between items-start laptop:items-center" ref={aboutRef}>
          <div className="w-full laptop:w-3/5">
            <h1 className="tablet:m-10 text-2xl font-bold">{data.headerOne}</h1>
            <p className="tablet:m-10 mt-2 text-xl opacity-75">
              {data.aboutpara}
            </p>
          </div>

          <div className="hidden laptop:flex gap-6 pr-10 relative" id="floating-tech">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-start-2">
                <FloatingImage src="/images/flutter.webp" alt="Flutter" />
              </div>
              <div className="col-start-1">
                <FloatingImage src="/images/kotlin.png" alt="Kotlin" />
              </div>
                <FloatingImage src="/images/vue.png" alt="Vue" />
                <FloatingImage src="/images/react.webp" alt="React" />
              <div className="col-start-2">
                <FloatingImage src="/images/mysql.png" alt="Mysql" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">{data.headerTwo}</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.slice(0, visibleCount).map((service, index) => (
              <HabilitiesCard
                key={index}
                name={service.title}
                description={service.description}
                image={service.image}
              />
            ))}

            {/* Placeholder para mantener el botón a la derecha si número de elementos es impar */}
            <div className="hidden laptop:block " />

            {visibleCount < data.services.length && (
              <div className="flex justify-end">
                <div
                  className="group text-center mt-6 border-2 p-3 border-gray-300 rounded-lg transition-colors duration-300 w-1/2"
                  onClick={handleShowMore}
                >
                  <button
                    className="inline-flex items-center justify-center gap-2 text-gray-600 group-hover:text-gray-800 group-hover:bg-gray-50 font-medium text-sm sm:text-base w-full h-full py-1"
                  >
                    <span>{data.seeMore}</span>
                    <svg
                      className="w-4 h-4 text-inherit transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">{data.headerThree}</h1>
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-6xl p-10 mob:p-10 desktop:p-10 rounded-lg shadow-sm`}
            >
              {resume.experiences.map(
                ({ id, dates, type, position, sections, bullets }) => (
                  <ProjectResume
                    key={id}
                    dates={dates}
                    type={type}
                    position={position}
                    sections={sections}
                  ></ProjectResume>
                )
              )}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">{data.headerFour}</h1>
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-6xl p-10 mob:p-10 desktop:p-10 rounded-lg shadow-sm`}
            >
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">{data.headerFive}</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                images={project.images}
                name={project.title}
                description={project.description}
                bullets={project.bullets}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
