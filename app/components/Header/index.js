"use client";

import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import { useLanguage } from '../../../src/context/LanguageContext.js';

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { language, toggleLanguage, data } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Button
                  onClick={() =>
                    toggleLanguage()
                  }
                >
                  <p className="text-md px-1 mt-1 font-medium">{language}</p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4362_66)">
                      <path d="M6.56122 0C6.82189 0.0783668 7.04367 0.189963 7.18328 0.451648C7.2062 0.494569 7.30692 0.734931 7.30692 0.761515V1.79994H11.9745C13.0098 1.79994 13.2009 3.47389 12.1484 3.70401L10.6794 3.71453C10.0247 5.92043 9.07804 8.02748 7.83135 9.91216C7.81564 9.97695 8.57576 10.7772 8.68214 10.8833C9.17438 11.3743 10.0896 11.9298 9.45488 12.794C8.84313 13.6272 8.0691 12.8649 7.56372 12.3645C7.25669 12.0607 6.98185 11.716 6.67687 11.4094L5.80316 12.4066C5.09455 13.1155 4.37693 13.8183 3.58616 14.4223C2.99553 14.8734 1.95619 15.778 1.4078 14.7568C0.871518 13.7579 2.05098 13.272 2.63466 12.8164C3.52666 12.12 4.4506 11.2145 5.19887 10.3439C5.2455 10.2896 5.49947 9.98775 5.50231 9.95092C5.0384 9.27581 4.57295 8.6029 4.15876 7.89013C3.90685 7.45648 3.21447 6.26685 3.21602 5.80191C3.21834 5.13815 3.85533 4.69481 4.42588 4.91634C4.86479 5.08692 4.98714 5.63106 5.19372 6.02815C5.62208 6.85253 6.1053 7.65143 6.65112 8.39051C7.57274 6.96745 8.27207 5.37851 8.79831 3.7389H0.890837C0.817169 3.7389 0.62115 3.67493 0.544133 3.64143C0.252809 3.51377 0.0706996 3.23381 0.00372862 2.9076C0.011456 2.81954 -0.00708977 2.7157 0.00372862 2.63069C0.0457143 2.30171 0.41457 1.82764 0.736546 1.82764H5.51982L5.55846 1.7861V0.761515C5.55846 0.734931 5.65917 0.494569 5.6821 0.451648C5.82171 0.189963 6.04348 0.0783668 6.30415 0L6.56122 0Z" fill="currentColor"/>
                      <path d="M15.5847 15.5107L11.4371 15.5058L10.6976 17.4281C10.2633 18.4225 8.92132 18.0243 9.00684 16.9366C10.183 13.6654 11.4889 10.4438 12.7103 7.18945C13.0679 6.45951 14.0134 6.50409 14.32 7.24954L17.9717 16.8031C18.2115 17.9083 16.8679 18.4734 16.3458 17.5018L15.5847 15.5107ZM12.1674 13.5967H14.8418L13.4921 10.135L12.1674 13.5967Z" fill="currentColor"/>
                    </g>
                  </svg>
                </Button>

                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button
                    onClick={() => router.push("/resume")}
                  >
                    Resume
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("mailto:rodriguezbolanosmoises@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>

                  <Button
                    onClick={() => router.push("/resume")}
                    classes="first:ml-1"
                  >
                    Resume
                  </Button>

                  <Button
                    onClick={() =>
                      window.open("mailto:rodriguezbolanosmoises@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              Resume
            </Button>

            <Button
              onClick={() =>
                window.open("mailto:rodriguezbolanosmoises@gmail.com")
              }
            >
              Contact
            </Button>

            <Button
              onClick={() =>
                toggleLanguage()
              }
            >
              <p className="text-md px-1 mt-1 font-medium">{language}</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4362_66)">
                  <path d="M6.56122 0C6.82189 0.0783668 7.04367 0.189963 7.18328 0.451648C7.2062 0.494569 7.30692 0.734931 7.30692 0.761515V1.79994H11.9745C13.0098 1.79994 13.2009 3.47389 12.1484 3.70401L10.6794 3.71453C10.0247 5.92043 9.07804 8.02748 7.83135 9.91216C7.81564 9.97695 8.57576 10.7772 8.68214 10.8833C9.17438 11.3743 10.0896 11.9298 9.45488 12.794C8.84313 13.6272 8.0691 12.8649 7.56372 12.3645C7.25669 12.0607 6.98185 11.716 6.67687 11.4094L5.80316 12.4066C5.09455 13.1155 4.37693 13.8183 3.58616 14.4223C2.99553 14.8734 1.95619 15.778 1.4078 14.7568C0.871518 13.7579 2.05098 13.272 2.63466 12.8164C3.52666 12.12 4.4506 11.2145 5.19887 10.3439C5.2455 10.2896 5.49947 9.98775 5.50231 9.95092C5.0384 9.27581 4.57295 8.6029 4.15876 7.89013C3.90685 7.45648 3.21447 6.26685 3.21602 5.80191C3.21834 5.13815 3.85533 4.69481 4.42588 4.91634C4.86479 5.08692 4.98714 5.63106 5.19372 6.02815C5.62208 6.85253 6.1053 7.65143 6.65112 8.39051C7.57274 6.96745 8.27207 5.37851 8.79831 3.7389H0.890837C0.817169 3.7389 0.62115 3.67493 0.544133 3.64143C0.252809 3.51377 0.0706996 3.23381 0.00372862 2.9076C0.011456 2.81954 -0.00708977 2.7157 0.00372862 2.63069C0.0457143 2.30171 0.41457 1.82764 0.736546 1.82764H5.51982L5.55846 1.7861V0.761515C5.55846 0.734931 5.65917 0.494569 5.6821 0.451648C5.82171 0.189963 6.04348 0.0783668 6.30415 0L6.56122 0Z" fill="currentColor"/>
                  <path d="M15.5847 15.5107L11.4371 15.5058L10.6976 17.4281C10.2633 18.4225 8.92132 18.0243 9.00684 16.9366C10.183 13.6654 11.4889 10.4438 12.7103 7.18945C13.0679 6.45951 14.0134 6.50409 14.32 7.24954L17.9717 16.8031C18.2115 17.9083 16.8679 18.4734 16.3458 17.5018L15.5847 15.5107ZM12.1674 13.5967H14.8418L13.4921 10.135L12.1674 13.5967Z" fill="currentColor"/>
                </g>
              </svg>
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              Resume
            </Button>

            <Button
              onClick={() =>
                window.open("mailto:rodriguezbolanosmoises@gmail.com")
              }
            >
              Contact
            </Button>

            <Button
              onClick={() =>
                toggleLanguage()
              }
            >
              <p className="text-md px-1 mt-1 font-medium">{language}</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4362_66)">
                  <path d="M6.56122 0C6.82189 0.0783668 7.04367 0.189963 7.18328 0.451648C7.2062 0.494569 7.30692 0.734931 7.30692 0.761515V1.79994H11.9745C13.0098 1.79994 13.2009 3.47389 12.1484 3.70401L10.6794 3.71453C10.0247 5.92043 9.07804 8.02748 7.83135 9.91216C7.81564 9.97695 8.57576 10.7772 8.68214 10.8833C9.17438 11.3743 10.0896 11.9298 9.45488 12.794C8.84313 13.6272 8.0691 12.8649 7.56372 12.3645C7.25669 12.0607 6.98185 11.716 6.67687 11.4094L5.80316 12.4066C5.09455 13.1155 4.37693 13.8183 3.58616 14.4223C2.99553 14.8734 1.95619 15.778 1.4078 14.7568C0.871518 13.7579 2.05098 13.272 2.63466 12.8164C3.52666 12.12 4.4506 11.2145 5.19887 10.3439C5.2455 10.2896 5.49947 9.98775 5.50231 9.95092C5.0384 9.27581 4.57295 8.6029 4.15876 7.89013C3.90685 7.45648 3.21447 6.26685 3.21602 5.80191C3.21834 5.13815 3.85533 4.69481 4.42588 4.91634C4.86479 5.08692 4.98714 5.63106 5.19372 6.02815C5.62208 6.85253 6.1053 7.65143 6.65112 8.39051C7.57274 6.96745 8.27207 5.37851 8.79831 3.7389H0.890837C0.817169 3.7389 0.62115 3.67493 0.544133 3.64143C0.252809 3.51377 0.0706996 3.23381 0.00372862 2.9076C0.011456 2.81954 -0.00708977 2.7157 0.00372862 2.63069C0.0457143 2.30171 0.41457 1.82764 0.736546 1.82764H5.51982L5.55846 1.7861V0.761515C5.55846 0.734931 5.65917 0.494569 5.6821 0.451648C5.82171 0.189963 6.04348 0.0783668 6.30415 0L6.56122 0Z" fill="currentColor"/>
                  <path d="M15.5847 15.5107L11.4371 15.5058L10.6976 17.4281C10.2633 18.4225 8.92132 18.0243 9.00684 16.9366C10.183 13.6654 11.4889 10.4438 12.7103 7.18945C13.0679 6.45951 14.0134 6.50409 14.32 7.24954L17.9717 16.8031C18.2115 17.9083 16.8679 18.4734 16.3458 17.5018L15.5847 15.5107ZM12.1674 13.5967H14.8418L13.4921 10.135L12.1674 13.5967Z" fill="currentColor"/>
                </g>
              </svg>
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
