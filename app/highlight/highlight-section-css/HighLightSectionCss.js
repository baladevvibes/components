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
import highlightData from "../highLightData";
import ThemeHightLight from "../ThemeHightLight";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import bootStrapHtml from "../bootstrap/bootStrapHtml";
import bootStrapCSS from "../bootstrap/bootstrapCss";

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

export default function HighLightSectionCss() {
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
      value: highlightData[3]?.htmlcode,
    },
    "darkThemeCode.js": {
      _id: 1,
      name: "darkThemeCode.js",
      language: "javascript",
      value: ThemeHightLight[2]?.htmlcode,
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
  console.log(count, anotherData);

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
    var removeComponents = "051";
    var tagName = "highlight";
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
          title={`highlight section css example`}
          des={`highlight section CSS example and with clean design and proper color code. It is fully responsive.`}
          section_name={`highlight`}
          using_font="outfit, Prompt "
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

                  <a href={`/highlight/highlight-section-css/preview`}>
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
                <div    className={` ${
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
                  }  py-32   dark:bg-[#1e1e1e]`}>
                     <div>
        <section className=" container px-4 mx-auto">
          <div className={` ${xlScreen? `flex`: ``} ${lgScreen? `block`: ``} ${mdScreen? `block`: ``} ${smScreen? `block`: ``} ${responsiveState? ``:`lg:flex lge:flex md:block mdsm:block sm:block`}  h-full`}>
            <div className={` ${xlScreen? `w-[70%]`: ``} ${lgScreen? `w-full`: ``} ${mdScreen? `w-full`: ``} ${smScreen? `w-full`: ``} ${responsiveState ? ``:`lg:w-[70%]  lge:w-[70%] md:w-full mdsm:w-full sm:w-full` } `}>
              <img
                src="../../Image/overall/transport/truck001.webp"
                alt="truck001"
              />
            </div>
            <div className={` ${xlScreen?`w-[30%]`:``} ${lgScreen?`w-full`:``} ${mdScreen?`w-full`:``} ${smScreen?`w-full`:``}  ${responsiveState? ``: `lg:w-[30%] lge:w-[30%] md:w-full mdsm:w-full sm:w-full`}  relative flex justify-center items-center`}>
              <div className={`h-full   ${xlScreen? `  absolute w-[140%] right-10`:``}  ${smScreen? ` absolute w-[140%] right-10`:``}  ${smScreen? ` relative w-full right-0`:``} ${smScreen? ` relative w-full -right-0`:``} ${responsiveState?``:` lg:absolute lge:absolute md:relative mdsm:relative sm:relative   lg:w-[140%] lge:w-[140%] md:w-full mdsm:w-full sm:w-full  lg:right-10 lge:right-10 md:right-0 mdsm:right-0 sm:right-0`}  `}>
                <div className="bg-[#f2f2f2]   dark:bg-[#454545] p-10  block">
                  <h4 className=" text-4xl title text-[#EF2917]  Prompt font-semibold pb-4 ">
                    
                    Lorem ipsum
                  </h4>

                  <p className=" dark:text-[#fcfcfc] outfit  text-[#444444] leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print.
                  </p>
                  <p className="dark:text-[#fcfcfc]  outfit text-[#444444]  pt-4 leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print. and publishing
                    industries for previewing layouts and visual mockups.Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </section>
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

        <div className="px-6 tags space-x-10 pb-10 space-y-5">
            <h4 className={` title-font pt-2 pb-4 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}>Find Components</h4>
            <a href="/hero" className=" hover:brightness-125 tracking-wide">
              Hero
            </a>
            <a href="/card" className=" hover:brightness-125 tracking-wide">
              Card
            </a>
            <a href="/about" className=" hover:brightness-125 tracking-wide">
              About
            </a>
            <a href="/services" className=" hover:brightness-125 tracking-wide">
              Service
            </a>
            <a href="/skeleton" className=" hover:brightness-125 tracking-wide">
              Skeleton
            </a>
            <a href="/tab" className=" hover:brightness-125 tracking-wide">
              Tab
            </a>
          
          </div>
      </div>
      <Footer />
    </div>
  );
}
