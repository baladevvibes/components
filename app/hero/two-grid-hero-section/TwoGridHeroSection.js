"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../style.css";
import Editor, { loader } from "@monaco-editor/react";
import Footer from "../../components/Footer";
import heroData from "../heroData";
import componentConfig from "../../config/componentConfig";
import ComponentsHeader from "../../components/ComponentsHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeCard from "../../HomePage/HomeCard";
import HomeComponents from "../../HomePage/HomeComponents";

export const metadata = {
  title: "Two Grid Hero Section",
  description:
    "This component create on 10/06/2024 using CSS framework tailwindcss. It full responsive component. This template used for Hero section",
  keywords:
    "hero section,free components,free code, make components, make component",
  openGraph: {
    title: "Two Grid Hero Section",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Hero section",
    url: "https://makecomponents.com/hero/two-grid-hero-section",
    siteName: "makecomponents.com",
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Two Grid Hero Section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const myCustomTheme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "ffa500", fontStyle: "italic" },
    { token: "keyword", foreground: "00ff00" },
    { token: "identifier", foreground: "ffffff" },
  ],
  colors: {
    "editor.background": "#202020",
    "editor.lineHighlightBackground": "#333333",
  },
};

export default function SideHalfGridAbout() {
  const [smScreen, setSmScreen] = useState(false);
  const [mdScreen, setMdScreen] = useState(false);
  const [lgScreen, setLgScreen] = useState(false);
  const [xlScreen, setXlScreen] = useState(true);
  const [code, setCode] = useState(false);
  const [copy, setCopy] = useState(false);
  const [reelatedComp, setRelatedComponents] = useState();
  const [fileName, setFileName] = useState("app.js");
  const [responsiveState, setResponsiveState] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: heroData[1]?.htmlcode,
    },
    "index.css": {
      _id: 1,
      name: "index.css",
      language: "css",
      value: componentConfig[0]?.css,
    },
    "tailwind.config.js": {
      _id: 2,
      name: "tailwind.config.js",
      language: "javascript",
      value: componentConfig[0]?.tailwindcss,
    },
  };

  const file = files[fileName];

  const handleCopy = () => {
    navigator.clipboard.writeText(file.value);

    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("myCustomTheme", myCustomTheme);
      monaco.editor.setTheme("myCustomTheme");
    });
  }, []);

  const handleCode = () => {
    setCode(!code);
    setForceRender(!forceRender);
  };

  const FilterCard = () => {
    // id=1
    var arr = [];
    var idSection = "013";
    HomeComponents?.forEach((el) => {
      if (el._id !== idSection) {
        console.log(el);
        arr.push(el);
      }
    });

    setRelatedComponents(arr);
  };

  const handleScreen = (size) => {
    setResponsiveState(true);
    if (size === "sm") {
      setSmScreen(true);
      setMdScreen(false);
      setLgScreen(false);
      setXlScreen(false);
    } else if (size === "md") {
      setMdScreen(true);
      setLgScreen(false);
      setSmScreen(false);
      setXlScreen(false);
    } else if (size === "lg") {
      setLgScreen(true);
      setSmScreen(false);
      setMdScreen(false);
      setXlScreen(false);
    } else if (size === "xl") {
      setLgScreen(false);
      setSmScreen(false);
      setMdScreen(false);
      setXlScreen(true);
    }
    setForceRender(true);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    FilterCard();
  }, []);
  return (
    <div className="bg-[rgb(255 255 255)]">
      <Header />
      <div className={`pt-[100px] container mx-auto px-2 sm:px-3`}>
        <ComponentsHeader
          title={`Two Grid Hero Section`}
          des={`This component create using CSS framework tailwindcss. It fully
              responsive component.`}
          section_name={`Hero`}
          using_font="Cinzel , Alegreya"
        />

        <div data-aos="fade-up" className="drop-css p-2 rounded-lg pb-4   px-4">
          <div className={` `}>
            <div
              data-aos="fade-up"
              className={` grid lge:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}
            >
              <div
                className={`sm:hidden md:hidden mdsm:hidden lg:flex lge:flex flex space-x-5`}
              >
                {code ? (
                  <>
                    <div className={`  text-[red] text-base`}>
                      *Kindly use Tailwind config
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => handleScreen("sm")}
                      className={` group`}
                    >
                      <div
                        className={` p-1.5 border ${
                          smScreen ? "bg-secondary text-white" : ""
                        } border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className={`text-1xl ${
                            smScreen ? `text-white` : ``
                          } text-textcolor  group-hover:text-white`}
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> sm</p>
                    </div>

                    <div
                      onClick={() => handleScreen("md")}
                      className={` group`}
                    >
                      <div
                        className={` p-1.5 border  border-[#ccc]   ${
                          mdScreen ? "bg-secondary text-white" : ""
                        }  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className={`text-1xl ${
                            mdScreen ? `text-white` : ``
                          } text-textcolor  group-hover:text-white`}
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> md</p>
                    </div>

                    <div
                      onClick={() => handleScreen("lg")}
                      className={` group`}
                    >
                      <div
                        className={` p-1.5 border   ${
                          lgScreen ? "bg-secondary" : ""
                        }  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className={`text-1xl ${
                            lgScreen ? `text-white` : ``
                          } text-textcolor  group-hover:text-white`}
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> lg</p>
                    </div>

                    <div
                      onClick={() => handleScreen("xl")}
                      className={` group`}
                    >
                      <div
                        className={` p-1.5 border    border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          class=" text-1xl  text-textcolor group-hover:text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> xl</p>
                    </div>
                  </>
                )}
              </div>

              <div className={` flex justify-end`}>
                <div className={` flex space-x-5`}>
                  <a href="/hero/two-grid-hero-section/preview">
                    <div className={` group`}>
                      <div
                        className={` p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          class=" text-base text-textcolor group-hover:text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                          ></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> pre</p>
                    </div>
                  </a>
                  {/* <div className={` group`}>
                    <a
                      href={`/File/about/GalleryFrameAboutus.html`}
                      download="GalleryFrameAboutus.html"
                      locale={false}
                    >
                      <div
                        className={` p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          class=" text-1xl  text-textcolor group-hover:text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path>
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>
                        </svg>
                      </div>
                      <p className={` text-sm text-center `}> dow</p>
                    </a>
                  </div> */}

                  <div className={`relative group`}>
                    <div
                      onClick={() => handleCopy()}
                      className={`flex justify-center p-1.5 border  ${
                        copy ? ` bg-secondary` : ``
                      } border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className={` text-1xl  ${
                          copy ? ` text-white` : ``
                        } text-textcolor group-hover:text-white`}
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                        ></path>
                      </svg>
                    </div>
                    <p className={` text-sm text-center `}> copy</p>

                    {copy ? (
                      <div
                        data-aos="fade-up"
                        className={`  flex absolute -top-12 ${
                          file?._id === 2 ? `-left-24` : `-left-10`
                        }  drop-css  rounded-md text-sm bg-[#82bd69] py-1 px-3 text-[#13250e]  `}
                      >
                        <div>
                          {file?.name === "app.js" ? (
                            "index.html"
                          ) : (
                            <>{file?.name}</>
                          )}{" "}
                        </div>{" "}
                        <div className={` px-1`}> Copied</div>{" "}
                      </div>
                    ) : null}
                  </div>

                  <div onClick={() => handleCode()} className={` group`}>
                    <div
                      className={`flex justify-center p-1.5 border ${
                        code ? ` bg-secondary` : ``
                      }  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className={`text-1xl  ${
                          code ? `text-white` : ``
                        } text-textcolor group-hover:text-white`}
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></path>
                      </svg>
                    </div>
                    <p className={` text-sm text-center `}> code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border border-[#ccc] rounded-b-lg  pt-2 px-1 pb-4  overflow-auto`}
          >
            {code ? (
              <>
                <button
                  name="app"
                  className={` ${
                    fileName === "app.js" ? `bg-primary` : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "app.js"}
                  onClick={() => setFileName("app.js")}
                >
                  index.html
                </button>
                <button
                  name="style"
                  className={` ${
                    fileName === "index.css" ? `bg-primary` : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "index.css"}
                  onClick={() => setFileName("index.css")}
                >
                  index.css
                </button>
                <button
                  name="tailwindconfig"
                  className={` ${
                    fileName === "tailwind.config.js"
                      ? `bg-primary`
                      : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "tailwind.config.js"}
                  onClick={() => setFileName("tailwind.config.js")}
                >
                  Tailwind config
                </button>
                <Editor
                  height="80vh"
                  // theme="vs-dark"
                  path={file.name}
                  options={{ readOnly: true }}
                  defaultLanguage={file.language}
                  defaultValue={file.value}
                />
              </>
            ) : (
              <>
                <div
                  className={`sm:px-0 lg:px-4 lge:px-4 md:px-6 mdsm:px-6 ${
                    smScreen
                      ? `  w-[640px] h-auto overflow-auto mx-auto   `
                      : `${
                          mdScreen
                            ? `  w-[780px] h-auto overflow-auto mx-auto`
                            : ` ${
                                lgScreen
                                  ? `w-[980px] h-auto overflow-auto mx-auto `
                                  : ` ${xlScreen ? `w-full` : ``} `
                              }  `
                        }`
                  } `}
                >
                  <section className={` `}>
                  <div className={` py-20`}>
      <header>

 
      <div className={`grid grid-cols-3 h-[100vh] overflow-hidden relative`}>
        <nav className={` absolute z-20 top-0 w-full py-4`}>
          <div className={` container mx-auto`}>
            <div className={` grid grid-cols-12`}>
              <div
                className={`  ${xlScreen ? ` col-span-4` : ``} ${lgScreen? `col-span-full`: ``} ${mdScreen ? ` col-span-full`: ``} ${smScreen? ` col-span-full` : ``} ${responsiveState? ``: `lg:col-span-4 lge:col-span-4 md:col-span-4 mdsm:col-span-full sm:col-span-full`}  px-4`}
              >
                <div className={` relative`}>
                  <div
                    className={`pt-2 cinzel-font ${xlScreen ? ` text-5xl text-[#fff] text-left`:``} ${lgScreen ? ` text-5xl text-[#181818] text-left`: ``} ${mdScreen ? ` text-5xl text-left text-[#181818] `: ``} ${smScreen? ` text-left  text-[#181818] text-3xl`: ``} ${responsiveState? ``: `lg:text-[#fff] lge:text-[#fff] md:text-[#181818] mdsm:text-[#181818] sm:text-[#181818] lg:text-5xl lge:text-5xl md:text-5xl mdsm:text-5xl sm:text-3xl lg:text-left lge:text-left md:text-left mdsm:text-left sm:text-left  `}  font-semibold  `}
                  >
                    Logo
                  </div>
                  <div className={` ${xlScreen ? `hidden` : ``} ${lgScreen ? `block w-full `:``} ${mdScreen ? `block`: ``}  ${smScreen? `block`: ``} ${responsiveState ? ``: `lg:hidden lge:hidden md:hidden mdsm:block sm:block`} w-full absolute top-4 right-4 flex justify-end`}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-[30px] sm:text-[24px]"><path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path></svg>

                  </div>
                </div>
              </div>
              <div className={` ${xlScreen? `block`: ``} ${lgScreen? ` hidden `: ``} col-span-8`}>
                <div 
                  className={` ${xlScreen ? `block`: ``} ${lgScreen? `hidden`: ``} ${mdScreen ? `hidden`: ``} ${smScreen? `hidden`: ``}  ${responsiveState ? ``: `  lg:block lge:block md:block mdsm:hidden sm:hidden`}`}
                >
                  <div className={`  flex space-x-16 justify-end px-4 py-4`}>
                    <div
                      className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                    >
                      Home
                    </div>
                    <div
                      className={`alegreya-font text-[22px]  text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                    >
                      About
                    </div>

                    <div
                      className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                    >
                      Services
                    </div>
                    <div
                      className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                    >
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={` ${xlScreen ? `block`: ``} ${lgScreen ? `hidden`:``} ${mdScreen ? `hidden`: ``} ${smScreen ? `hidden`: ``}  ${responsiveState ? ``: `lg:block lge:block md:hidden mdsm:hidden sm:hidden `} bg-[#181818] h-full relative`}>
          <div className={` `}>
            <div
              className={` absolute flex justify-center items-center h-full  left-0 bottom-50 z-10  mx-4`}
            >
              <div>
                <div className={` group cursor-pointer mt-8`}>
                  <div
                    className={`border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                  >
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg>
                  </div>
                </div>

                <div className={`mt-6 group cursor-pointer`}>
                  <div
                    className={` border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                  >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  </div>
                </div>

                <div className={`mt-6 group cursor-pointer`}>
                  <div
                    className={`border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                  >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={` px-4 flex justify-center items-center h-full  ${xlScreen ? `mt-6`: ``} ${lgScreen? `mt-0`: ``} ${responsiveState? ``: ` lg:mt-6 lge:mt-0`}  ml-24 z-10`}>
            <div className={` block`}>
              <h1 className="  text-[#fff] pb-4 ml-14 text-[50px] cinzel-font font-semibold ">
                Collect
              </h1>
              {/* Hello */}
              <img
                src={`../../Image/hero/hero002/shirts.webp`}
                className={`h-[50vh] mt-2 w-full  object-cover`}
                alt="shirts"
              />
            </div>
          </div>
        </div>

        <div
          className={` ${xlScreen? `col-span-2`: ``} ${lgScreen? `col-span-full`: ``} ${mdScreen? `col-span-full`: ``} ${smScreen? `col-span-full`: ``} ${responsiveState? ``: `lg:col-span-2 lge:col-span-2 md:col-span-full mdsm:col-span-full sm:col-span-full`}  h-full relative`}
        >
          <div
            className={` h-full absolute top-0  w-full bg-[#f2f2f2ad]`}
          ></div>
          <div className={`  container mx-auto`}>
            <div className={`absolute h-full flex justify-start items-center`}>
              <div className={` block`}>
              <h1
                className={` text-[#181818]  ${xlScreen ? `mt-6 text-[50px]`: ``} ${lgScreen? `mt-10 text-[30px]`: ``} ${mdScreen? `text-[30px]`: ``} ${smScreen? `text-[30px]`: ``} ${responsiveState? ``: `lg:text-[50px] lge:text-[50px] md:text-[30px] mdsm:text-[30px] sm:text-[30px] lg:mt-6 lge:mt-10`}  relative   px-4    font-semibold cinzel-font `}
              >
                Clothes and T-shirts
              </h1>
              <p
                className={`pt-1 alegreya-font  text-[#333] font-semibold text-justify ${xlScreen? `text-[24px] w-[70%] `: ``} ${lgScreen? `text-[20px] w-[90%] `: ``} ${mdScreen? ` text-[20px] w-[90%]`: ``} ${smScreen? `w-[100%] text-[20px] `: ``} ${responsiveState? ``: `lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%]`}  px-4`}
              >
                Explore the latest trends in fashion with our exclusive
                collection of clothes and t-shirts. Whether you're looking for
                casual comfort or stylish elegance, we've got you covered.
              </p>
              <p
                className={`pt-1 alegreya-font  text-[#333] font-semibold text-justify ${xlScreen? `text-[24px] w-[70%] `: ``} ${lgScreen? `text-[20px] w-[90%] `: ``} ${mdScreen? ` text-[20px] w-[90%]`: ``} ${smScreen? `w-[100%] text-[20px] `: ``} ${responsiveState? ``: `lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%]`}  px-4`}
              >
                Stay ahead of the fashion curve with our weekly new arrivals.
                Each piece is designed with you in mind, blending comfort,
                quality, and style.
              </p>

              <button
                className={`alegreya-font ${xlScreen? `text-[22px]`: ``}  ${lgScreen? `text-[18px]`:``} ${mdScreen? `text-[18px]`: ``} ${smScreen? `text-[16px]`: ``} ${responsiveState? ``: `lg:text-[22px] lge:text-[22px] md:text-[22px] mdsm:text-[18px] sm:text-[16px]`}  font-semibold tracking-widest mx-4 bg-[#181818] text-base mt-4 hover:bg-[#fff] border-2 border-[#181818]  hover:font-semibold hover:text-[#181818] px-16 py-3 text-[#fff]`}
              >
                Shop Now
              </button>
            
              </div>
              </div>
          </div>

          <img
            src={`https://images.unsplash.com/photo-1608739872119-f78feab7f976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            className={` h-full object-cover`}
            alt="clothes"
          />
        </div>
      </div>
      </header>
    </div>
                  </section>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <h1
            className={` title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
          >
            Related Components
          </h1>
        </div>

        <div
          className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
        >
          {reelatedComp?.map((v, i) => {
            return (
              <HomeCard
                title={v?.title}
                img={v?.image}
                tag={v?.tag}
                link={v?.link}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
