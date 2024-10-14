"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../style.css";
import Editor, { loader } from "@monaco-editor/react";
import Footer from "../../components/Footer";
import HomeComponents from "../../HomePage/HomeComponents";
import componentConfig from "../../config/componentConfig";
import ComponentsHeader from "../../components/ComponentsHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import cardLightData from "../../card/cardLightData";
import HomeCard from "../../HomePage/HomeCard";
import { VscSymbolColor } from "react-icons/vsc";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineFontSize, AiOutlineMenuFold } from "react-icons/ai";
import fontData from "../../components/Font";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import footerData from "../footerData";
import DarkThemefooter from "../DarkThemeFooter";

import bootStrapHtml from "../bootstrap/bootStrapHtml";
import bootStrapCSS from "../bootstrap/bootstrapCss";
import TagRender from "../../tag/TagRender";

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

export default function FooterDesignHtml() {
  const [smScreen, setSmScreen] = useState(false);
  const [mdScreen, setMdScreen] = useState(false);
  const [lgScreen, setLgScreen] = useState(false);
  const [xlScreen, setXlScreen] = useState(true);
  const [code, setCode] = useState(false);
  const [reelatedComp, setRelatedComponents] = useState();
  const [copy, setCopy] = useState(false);
  const [fileName, setFileName] = useState("app.js");
  const [responsiveState, setResponsiveState] = useState(false);
  const [color, setColor] = useColor("#00bc9538");
  const [forceRender, setForceRender] = useState(false);
  const [colorCode, setColorCode] = useState(false);
  const [fontFlag, setFontFlag] = useState(false);
  const [fontT1Data, setFontt1Data] = useState("cormorant");
  const [dark, setDark] = useState(false);
  const [tailwind, setTailwind] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    setCode(false);
    setTailwind(false);
    document.body.classList.toggle("dark");
  };
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: footerData[2]?.htmlcode,
    },
    "darkThemeCode.js": {
      _id: 1,
      name: "darkThemeCode.js",
      language: "javascript",
      value: DarkThemefooter[0]?.htmlcode,
    },
    "index.css": {
      _id: 2,
      name: "index.css",
      language: "css",
      value: componentConfig[0]?.css,
    },
    "tailwind.config.js": {
      _id: 3,
      name: "tailwind.config.js",
      language: "javascript",
      value: componentConfig[0]?.tailwindcss,
    },
    "bootstrapIndex.html": {
      _id: 4,
      name: "bootstrapIndex.html",
      language: "html",
      value: bootStrapHtml[0]?.htmlcode,
    },
    "bootstrapStyleSheet.css": {
      _id: 5,
      name: "bootstrapStyleSheet.css",
      language: "css",
      value: bootStrapCSS[0]?.stylecode,
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

  const handleTailwind = () => {
    setCode(false);
    setTailwind(true);
    setFileName("app.js");
    setForceRender(!forceRender);
  };

  const handleBootstrap = () => {
    setCode(true);
    setFileName("bootstrapIndex.html");

    setTailwind(false);
    // document.getElementById("screen-display").style.display = "none"
    setForceRender(!forceRender);
  };

  const handleColor = () => {
    setColorCode(!colorCode);
  };

  const handleChnage = (e) => {
    console.log(e.target.value);
    fontData?.forEach((el) => {
      if (el.name === e.target.value) {
        setFontt1Data(el.class);
      }
    });
    setForceRender(!forceRender);

    console.log(fontT1Data);
  };

  const handleClickFont = () => {
    setForceRender(!forceRender);
    setFontFlag(!fontFlag);
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [count, setCount] = useState();
  const [defaultvalue, value] = useState(12);
  const [data, setData] = useState(HomeComponents);
  const [finalDataArr, setFinalData] = useState();
  const [anotherData, setAnotherData] = useState();
  // const [forceRender, setForceRender] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  

  const handleClick = () => {
    setCount(count + 1);
    setForceRender(!forceRender);
    var countInc = count + 1;
    var sum = countInc * defaultvalue;
    console.log(anotherData.length <= finalDataArr.length);
    var buttState = anotherData.length < finalDataArr.length;
    var finalData = finalDataArr.slice(0, sum);
    setAnotherData(finalData);
    setButtonState(buttState);
    // setFinalData(finalData)
  };

  useEffect(() => {
    setCount(1);
    var removeComponents = "054";
    var tagName = "footer";
    var newData = [];
    data.forEach((el) => {
      if (el._id === removeComponents) {
        console.log(el);
      } else {
        newData.push(el);
      }
    });
    var arrSort = newData.sort(function (a, b) {
      return a.tag.indexOf(tagName) - b.tag.indexOf(tagName);
    });
    var rev = arrSort.reverse();
    var arrData = [];
    var anotherData = [];
    rev.forEach((el) => {
      if (el.tag == tagName) {
        arrData.push(el);
      } else {
        anotherData.push(el);
      }
    });
    const shuffledArray = anotherData.sort((a, b) => 0.5 - Math.random());
    const finalDataArr = arrData.concat(shuffledArray);
    console.log(finalDataArr, "arrsort");
    var sum = 1 * defaultvalue;
    var finalData = finalDataArr.slice(0, sum);
    var buttState = anotherData.length < finalDataArr.length;
    setButtonState(buttState);
    setFinalData(finalDataArr);
    setAnotherData(finalData);
  }, []);
  return (
    <div className="bg-[rgb(255 255 255)]">
      <Header />
      <div className={`pt-[100px] container mx-auto px-2 sm:px-3`}>
        <ComponentsHeader
          title={`footer design html `}
          des={`footer design html design example and with clean design and proper color code. It is fully responsive.`}
          section_name={`footer`}
          using_font="varela-round-font,acme-font "
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
                {tailwind ? (
                  <>
                    <div className={`  text-[red] text-base`}>
                      *Kindly use Tailwind config
                    </div>
                  </>
                ) : (
                  <>
                    {code ? null : (
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
                  </>
                )}
              </div>

              <div className={` flex justify-end`}>
                <div className={` flex space-x-5`}>
                  <div onClick={() => darkModeHandler()}>
                    <div className={` group`}>
                      <div
                        className={` ${
                          dark ? `bg-secondary` : ``
                        } p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                      >
                        {dark ? (
                          <>
                            <CiLight
                              className={` ${
                                dark ? ` text-[#fff] text-[16px]` : ``
                              }`}
                            />
                          </>
                        ) : (
                          <>
                            <CiDark
                              className={`  group-hover:text-[#fff] text-[16px]`}
                            />
                          </>
                        )}
                      </div>

                      <p className={` text-sm text-center `}>
                        {dark ? "Da" : "Li"}
                      </p>
                    </div>
                  </div>

                  <a href={`/footer/footer-design-html-css/preview`}>
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
                          )}
                        </div>
                        <div className={` px-1`}> Copied</div>
                      </div>
                    ) : null}
                  </div>

                  {/* <div onClick={() => handleCode()} className={` group`}>
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
                  </div> */}

                  <div onClick={() => handleBootstrap()} className={` group`}>
                    <div
                      className={` ${
                        code ? `bg-secondary text-[#fff]` : ``
                      } p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <TbBrandBootstrap
                        className={`${
                          code ? `text-white` : ``
                        } text-base text-textcolor group-hover:text-white `}
                      />
                    </div>
                    <p className={` text-sm text-center `}> bs</p>
                  </div>

                  <div onClick={() => handleTailwind()} className={` group`}>
                    <div
                      className={` ${
                        tailwind ? `bg-secondary text-[#fff]` : ``
                      } p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <TbBrandTailwind
                        className={`${
                          tailwind ? `text-white` : ``
                        } text-base text-textcolor group-hover:text-white `}
                      />
                    </div>
                    <p className={` text-sm text-center `}> tw</p>
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
                  name="bootstrapIndex"
                  className={` ${
                    fileName === "bootstrapIndex.html"
                      ? `bg-primary`
                      : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "bootstrapIndex.html"}
                  onClick={() => setFileName("bootstrapIndex.html")}
                >
                  index.html
                </button>

                <button
                  name="bootstrapStyleSheet"
                  className={` ${
                    fileName === "bootstrapStyleSheet.css"
                      ? `bg-primary`
                      : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "bootstrapStyleSheet.css"}
                  onClick={() => setFileName("bootstrapStyleSheet.css")}
                >
                  style.css
                </button>

                <Editor
                  height="80vh"
                  // theme="vs-dark"
                  path={file?.name}
                  options={{ readOnly: true }}
                  defaultLanguage={file.language}
                  defaultValue={file.value}
                />
              </>
            ) : (
              <></>
            )}
            {tailwind ? (
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
                  name="darkThemeCode"
                  className={` ${
                    fileName === "darkThemeCode.js"
                      ? `bg-primary`
                      : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "darkThemeCode.js"}
                  onClick={() => setFileName("darkThemeCode.js")}
                >
                  darkThemeCode.html
                </button>
                <button
                  name="index"
                  className={` ${
                    fileName === "index.css" ? `bg-primary` : ` bg-[#f19c1c8a]`
                  }   rounded-t-lg py-2  px-4 mr-2`}
                  disabled={fileName === "index.css"}
                  onClick={() => setFileName("index.css")}
                >
                  index css
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
                  path={file?.name}
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
                  }  py-32   dark:bg-[#1e1e1e]`}
                >
                  <div className=" bg-[#161925] ">
                    <div className=" container mx-auto px-4 ">
                      <div
                        className={` grid ${xlScreen ? `grid-cols-2` : ``} ${
                          lgScreen ? `grid-cols-2` : ``
                        } ${mdScreen ? `grid-cols-1` : ``} ${
                          smScreen ? `grid-cols-1` : ``
                        } ${
                          responsiveState
                            ? ``
                            : `lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1`
                        }   pt-10`}
                      >
                        <div className=" ">
                          <h3 className="text-[#a3986c] acme-font text-5xl">
                            {" "}
                            Logo
                          </h3>
                        </div>

                        <div
                          className={` grid  ${xlScreen ? `grid-cols-2` : ``} ${
                            lgScreen ? `grid-cols-2` : ``
                          } ${mdScreen ? `grid-cols-1` : ``} ${
                            smScreen ? `grid-cols-1` : ``
                          } ${
                            responsiveState
                              ? ``
                              : `lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1`
                          } `}
                        >
                          <div>
                            <ul>
                              <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                                About us{" "}
                              </li>
                              <li className="pt-2 varela-round-font  text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                                Our services{" "}
                              </li>
                              <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                                Responsiblity{" "}
                              </li>
                              <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer pb-6">
                                Blog{" "}
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="varela-round-font text-[#fcfcfc]">
                              Follow us
                            </h4>

                            <div className=" flex lg:mb-0 lge:mb-0 md:mb-0 mdsm:mb-6 sm:mb-6  space-x-4 mt-2">
                              <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  version="1.2"
                                  baseProfile="tiny"
                                  viewBox="0 0 24 24"
                                  class=" text-[20px] text-[#fff] group-hover:text-[#191919]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                                </svg>
                              </div>
                              <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc] sm:pb-6  mdsm:mb-6 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  class="  text-[16px] text-[#fff] group-hover:text-[#191919]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                                </svg>
                              </div>
                              <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc]">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class=" text-[16px] text-[#fff] group-hover:text-[#191919]"
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
                                  <line
                                    x1="17.5"
                                    x2="17.51"
                                    y1="6.5"
                                    y2="6.5"
                                  ></line>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`pt-2 pb-6 border-[#ccc] border-t-[1px] grid  ${
                          xlScreen ? `grid-cols-2` : ``
                        } ${lgScreen ? `grid-cols-2` : ``} ${
                          mdScreen ? `grid-cols-1` : ``
                        } ${smScreen ? `grid-cols-1` : ``} ${
                          responsiveState
                            ? ``
                            : `lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1`
                        } `}
                      >
                        <div>
                          {" "}
                          <p className="varela-round-font text-[12px] text-[#fcfcfc] tracking-wider">
                            Copyright.All right reserved.
                          </p>{" "}
                        </div>
                        <div className=" grid grid-cols-2">
                          <div>
                            <p className="varela-round-font text-[12px] text-[#fcfcfc] tracking-wider">
                              Terms and Ploicy
                            </p>
                          </div>
                          <div>
                            <p className="varela-round-font px-2 text-[12px] text-[#fcfcfc] tracking-wider">
                              {" "}
                              90123456789
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <h2
            className={` title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
          >
            Related Components
          </h2>
        </div>

        <div
          className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
        >
          {anotherData?.map((v, i) => {
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

        <div class="my-6 flex justify-center">
          {buttonState ? (
            <button
              onClick={() => handleClick()}
              class=" bg-primary py-2 px-12 tracking-wider hover:brightness-125 text-white rounded-lg"
            >
              More Components
            </button>
          ) : null}
        </div>

        <div className=" pb-4">
          <TagRender tag="footer" />
        </div>

        <div id="container-c3d10aadb78d1e6613b3fc5333e31d3e"></div>
      </div>
      <Footer />
    </div>
  );
}
