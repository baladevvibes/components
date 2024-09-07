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
import faqLightData from "../FaqLightData";
import HomeCard from "../../HomePage/HomeCard";
import { VscSymbolColor } from "react-icons/vsc";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineFontSize } from "react-icons/ai";
import fontData from "../../components/Font";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import faqData from "../FaqData";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
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

export default function FaqTableTailwind() {
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

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: faqData[1]?.htmlcode,
    },
    "darkThemeCode.js": {
      _id: 1,
      name: "darkThemeCode.js",
      language: "javascript",
      value: faqLightData[1]?.htmlcode,
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
  };

  const file = files[fileName];

  const handleCopy = () => {
    navigator.clipboard.writeText(file.value);

    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
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
    var removeComponents = "041";
    var tagName = "faq";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <div className="bg-[rgb(255 255 255)]">
      <Header />
      <div className={`pt-[100px] container mx-auto px-2 sm:px-3`}>
        <ComponentsHeader
          title={`Faq table tailwind css`}
          des={`This section is product-based. It has a design like a FAQ, and inside has table data. The user easily understands and gets the group of data.`}
          section_name={`FAQ`}
          using_font="DM Sans, sans-serif"
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
                        {dark ? "da" : "li"}
                      </p>
                    </div>
                  </div>

                  <a href={`/faq/faq-table-tailwind/preview`}>
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

                  {/* <div className=" border h-8 mt-[4px] border-[#e6e6e6]"></div>

                  <div className={` group `}>
                    <img
                      src="../../Image/overall/icons/tailwind.png"
                      alt="Bootstrap"
                      className="h-[14px] mt-[10px] cursor-pointer "
                    />
                    <p className={` text-sm text-center mt-[6px]  font-semibold`}> tw</p>
                  </div>


                  <div className={` group pr-3 `}>
                    <img
                      src="../../Image/overall/icons/bootstrap.png"
                      alt="Bootstrap"
                      className="h-[20px] mt-[8px] cursor-pointer "
                    />
                    <p className={` text-sm text-center mt-[2px] `}> bs</p>
                  </div> */}

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
                  } `}
                >
                <div className="  dark:bg-[#1e1e1e]">
   
      <div className=" py-[150px] container mx-auto">
        <section className=" w-[96%] mx-auto ">
          <details class="group overflow-auto  relative pb-2">
            <summary class="flex relative mt-4 border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Apple
              </span>
            </summary>
            <span className=" absolute w-auto top-7 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4 ">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      MacBook Pro 14” and 16” M3, M3 Pro or M3 Max chip
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹169900.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      iPad Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹99900.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      iPhone 15 Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹129800.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Apple Watch SE
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹29900.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
          <details class="group  relative pb-2">
            <summary class="flex relative  border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Redmi
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Xiaomi 14 Ultra
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹99,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 Pro+ 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹29,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹24,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹16,999
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
          <details class="group  relative pb-2">
            <summary class="flex relative  border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Samsung
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy M35 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹19,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy S24 Ultra
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹107,298
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy A35 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹23,765
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy M34
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹34,280
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </section>
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

        <TagRender tag="faq"/>
        </div>

        <div id="container-c3d10aadb78d1e6613b3fc5333e31d3e"></div>
      </div>
      <Footer />
    </div>
  );
}
