"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../style.css";
import Editor, { loader } from "@monaco-editor/react";
import Footer from "../../components/Footer";
import footerData from "../footerData";
import HomeComponents from "../../HomePage/HomeComponents";
import componentConfig from "../../config/componentConfig";
import ComponentsHeader from "../../components/ComponentsHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeCard from "../../HomePage/HomeCard";

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

export default function LandingPageFooter() {
  const [smScreen, setSmScreen] = useState(false);
  const [mdScreen, setMdScreen] = useState(false);
  const [lgScreen, setLgScreen] = useState(false);
  const [xlScreen, setXlScreen] = useState(true);
  const [code, setCode] = useState(false);
  const [reelatedComp, setRelatedComponents] = useState();
  const [copy, setCopy] = useState(false);
  const [fileName, setFileName] = useState("app.js");
  const [responsiveState, setResponsiveState] = useState(false);

  const [forceRender, setForceRender] = useState(false);
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: footerData[0]?.htmlcode,
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

  const FilterCard = () => {
    // id=1
    var arr = [];
    var idSection = "015";
    HomeComponents?.forEach((el) => {
      if (el._id !== idSection) {
        console.log(el);
        arr.push(el);
      }
    });

    setRelatedComponents(arr);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    FilterCard()
  }, []);
  return (
    <div className="bg-[rgb(255 255 255)]">
      <Header />
      <div className={`pt-[100px] container mx-auto px-2 sm:px-3`}>
        <ComponentsHeader
          title={`Landing page footer section`}
          des={`This component create on 13/June/2024 using CSS framework tailwindcss. It fully
              responsive component.`}
          section_name={`Footer`}
          using_font=" Milonga font,DM Sans sans-serif "
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
                  <a href="/footer/landing-page-footer/preview">
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
            className={`border border-[#ccc] rounded-b-lg  pt-2 px-4 pb-4  overflow-auto`}
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
                  name="index"
                  className={` ${
                    fileName === "index.css" ? `bg-primary` : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "index.css"}
                  onClick={() => setFileName("index.css")}
                >
                  index
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
                  className={` ${
                    smScreen
                      ? `  w-[640px] h-auto overflow-auto mx-auto   px-20 `
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
                  <div
                    className={`   h-[80vh] overflow-auto py-20 `}
                  >
                     <div className="">
      <footer>
        <div className={`mt-4 bg-[#2b4a44] py-16`}>
          <div className={` container mx-auto sm:px-4 px-10`}>
            <div className={` grid ${xlScreen ? `grid-cols-5 `: ``} ${lgScreen? ` grid-cols-5 `: ``} ${mdScreen ? `grid-cols-5 `: ``} ${smScreen? ` grid-cols-1`: ``} ${responsiveState? ``: `grid-cols-5 sm:grid-cols-1`} `}>
              <div className={` col-span-2`}>
                <div>
                  <h1
                    className={`title text-[#ed9132]  text-left text-2xl font-semibold`}
                  >
                    <span
                      className={` milonga-font text-[#ed9132]  text-left text-5xl font-semibold`}
                    >
                      G
                    </span>
                    reen Valley
                  </h1>
                </div>
                <div
                  className={` flex w-full justify-start pb-7 pt-4 space-x-16`}
                >
                  <div className={` text-[#fff]  cursor-pointer `}>
                    About us
                  </div>
                  <div className={` text-[#fff]  cursor-pointer   `}>
                    Contact
                  </div>
                </div>
              </div>
              <div className={` col-span-3`}>
                <div className={` w-full flex  ${xlScreen? ` justify-end `: ``}  ${lgScreen? ` justify-end `: ``} ${mdScreen? ` justify-end `: ``} ${smScreen ? `justify-start`: ``} ${responsiveState ? `sm:justify-start`: ``} `}>
                  <iframe
                    width="300"
                    height="100"
                    style={{ border: "0", background: "#ccc" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={` grid ${xlScreen ? `grid-cols-5 `: ``} ${lgScreen? ` grid-cols-5 `: ``} ${mdScreen ? `grid-cols-5 `: ``} ${smScreen? ` grid-cols-1`: ``} ${responsiveState? ``: `grid-cols-5 sm:grid-cols-1`} pt-10 pb-4`}>
              <div className={`  ${xlScreen ? ` col-span-2`: ``}  ${lgScreen ? ` col-span-2`: ``}  ${mdScreen ? ` col-span-2`: ``}  ${smScreen ? `col-span-full`: ``} ${responsiveState? ``: ` col-span-2 sm:col-span-full`}`}>
                <div className={` ${xlScreen? `flex space-x-5 `: ``} ${lgScreen? `flex space-x-5 `: ``} ${mdScreen? `flex space-x-5 `: ``} ${smScreen ? `block  space-x-0`: ``} ${responsiveState ? ``: ` sm:block   flex  sm:space-x-0 space-x-5`} `}>
                  <div className={` flex`}>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-[#fff] cursor-pointer text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="telto:9876543210">
                      <p className={`pl-2 leading-5 text-[#fff]`}>9876543210</p>
                    </a>
                  </div>
                  <div className={` ${smScreen ? `pt-4 `:``} sm:pt-4 flex`}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#fff] cursor-pointer text-[20px] sm:mr-2 "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
                    </svg>
                    <a href="mailto:makecomponents7202@gmail.com">
                      <p className={`pl-2 sm:pl-0 leading-5 text-[#fff]`}>
                        makecomponents7202@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className={` col-span-3`}>
                <div
                  className={` flex ${xlScreen? ` justify-end `: ``}  ${lgScreen? ` justify-end `: ``} ${mdScreen? ` justify-end `: ``} ${smScreen ? `pt-4 justify-center`: ``} ${responsiveState ? `sm:justify-center justify-end`: ``} justify-end sm:justify-center sm:pt-4 space-x-6`}
                >
                  <div>
                    {" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" cursor-pointer text-[#fff] text-[24px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class=" cursor-pointer text-[#fff] text-[18px] mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class=" cursor-pointer text-[#fff] text-[18px] mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
             
                  </div>
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
