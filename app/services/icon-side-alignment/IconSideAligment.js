"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../style.css";
import Editor, { loader } from "@monaco-editor/react";
import Footer from "../../components/Footer";
import servicesData from "../servicesData";
import HomeComponents from "../../HomePage/HomeComponents";
import componentConfig from "../../config/componentConfig";
import ComponentsHeader from "../../components/ComponentsHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeCard from "../../HomePage/HomeCard";
import { VscSymbolColor } from "react-icons/vsc";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineFontSize } from "react-icons/ai";
import fontData from "../../components/Font";

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

export default function IconSideAligment() {
  const [smScreen, setSmScreen] = useState(false);
  const [mdScreen, setMdScreen] = useState(false);
  const [lgScreen, setLgScreen] = useState(false);
  const [xlScreen, setXlScreen] = useState(true);
  const [code, setCode] = useState(false);
  const [reelatedComp, setRelatedComponents] = useState();
  const [copy, setCopy] = useState(false);
  const [fileName, setFileName] = useState("app.js");
  const [responsiveState, setResponsiveState] = useState(false);
  const [color, setColor] = useColor("#ff0000b0");
  const [forceRender, setForceRender] = useState(false);
  const [colorCode, setColorCode] = useState(false);
  const [fontFlag, setFontFlag] = useState(false);
  const [fontT1Data, setFontt1Data] = useState("cormorant");
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: servicesData[0]?.htmlcode,
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

    console.log(fontT1Data)
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

  const FilterCard = () => {
    // id=1
    var arr = [];
    var idSection = "023";
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
    FilterCard();
  }, []);
  return (
    <div className="bg-[rgb(255 255 255)]">
      <Header />
      <div className={`pt-[100px] container mx-auto px-2 sm:px-3`}>
        <ComponentsHeader
          title={`Icon services section tailwind css`}
          des={`This component create on 28/June/2024 using CSS framework tailwindcss. It fully
              responsive component.`}
          section_name={`Services`}
          using_font=" REM "
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
                  <a href={`/services/icon-side-alignment/preview`}>
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

                  {/* <div className={`relative group`}>
                    <div
                      onClick={() => handleClickFont()}
                      className={`flex justify-center p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <AiOutlineFontSize />
                      <div className="  p-4 rounded-lg drop-css bg-white  z-50 absolute top-16 ">
                        <div className=" text-secondary font-semibold ">
                          Select T1
                        </div>
                        <select
                          onChange={(e) => handleChnage(e)}
                          name="font"
                          className=" text-textcolor  outline-none  border-b-2 border-b-textcolor "
                        >
                          {fontData?.map((v, i) => {
                            return (
                              <option className=" text-textcolor ">
                                {v?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <p className={` text-sm text-center `}> font</p>
                  </div> */}

                  <div className={`relative group`}>
                    <div
                      onClick={() => handleColor()}
                      className={`flex justify-center p-1.5 border  ${
                        colorCode ? `bg-secondary text-white` : ``
                      } border-[#ccc]   group-hover:bg-secondary  cursor-pointer  rounded-md`}
                    >
                      <VscSymbolColor
                        className={`text-1xl ${
                          colorCode ? `text-white` : ``
                        }  text-textcolor group-hover:text-white`}
                      />
                    </div>
                    {colorCode ? (
                      <>
                        {" "}
                        <div className=" absolute z-50 top-16 -left-16">
                          <div className=" flex justify-end px-2 py-2 bg-[white] cursor-pointer">
                            <IoIosClose
                              onClick={() => handleColor()}
                              className=" hover:bg-primary "
                            />
                          </div>
                          <ColorPicker color={color} onChange={setColor} />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <p className={` text-sm text-center `}> color</p>
                  </div>

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
                  <div className=" container mx-auto  min-h-[100vh] h-[100vh] overflow-y-scroll  px-10 sm:px-0">
                    <section className="py-8 sm:p-2">
                      <div className=" container mx-auto  sm:pb-0">
                        <div
                          className={` REM-font text-[#222] text-[44px] sm:text-[34px] text-center sm:pt-8   `}
                        >
                          Our Services
                        </div>
                        <div
                          className={` grid ${
                            xlScreen ? `grid-cols-3 gap-16` : ``
                          } ${lgScreen ? `grid-cols-2 gap-16` : ``} ${
                            mdScreen ? `grid-cols-2 gap-5` : ``
                          } ${smScreen ? `grid-cols-1 gap-4` : ``}  ${
                            responsiveState
                              ? ``
                              : ` lg:grid-cols-3 lge:grid-cols-3  md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-16 lge:gap-16 md:gap-5 mdsm:gap-5 sm:gap-4`
                          }   pt-16`}
                        >
                          <div className=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
                            <div className=" h-[40px] w-[40px] relative border-2 center border-[#222]">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                class=" text-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z"></path>
                              </svg>
                              <div
                                style={{ background: `${color?.hex}` }}
                                className=" h-[36px] w-[36px] absolute top-[-16px] right-[-8px]"
                              ></div>
                            </div>
                            <div className=" text-[32px] REM-font py-4">
                              Web Design
                            </div>
                            <p className=" REM-font text-text-color sm:text-base">
                              Web design involves creating visually appealing
                              and functional websites by organizing content and
                              interactive elements. It focuses on usability,
                              responsiveness, and aesthetics to enhance user
                              experience.
                            </p>
                          </div>

                          <div className=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
                            <div className=" h-[40px] w-[40px] relative border-2 center border-[#222]">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                class=" text-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                              </svg>
                              <div
                                style={{ background: `${color?.hex}` }}
                                className=" h-[36px] w-[36px] absolute top-[-16px] right-[-8px]"
                              ></div>
                            </div>
                            <div className="REM-font text-[32px] py-4">
                              Frontend Development
                            </div>
                            <p className="REM-font text-text-color">
                              Frontend development focuses on building the user
                              interface and experience of websites using HTML,
                              CSS, and JavaScript. It ensures that web
                              applications are visually appealing, interactive,
                              and responsive across different devices and
                              browsers.
                            </p>
                          </div>

                          <div className=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
                            <div className=" h-[40px] w-[40px] relative border-2 center border-[#222]">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 384 512"
                                class=" text-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
                              </svg>
                              <div
                                style={{ background: `${color?.hex}` }}
                                className=" h-[36px] w-[36px]   absolute top-[-16px] right-[-8px]"
                              ></div>
                            </div>
                            <div className="REM-font text-[32px] py-4">
                              Backend Support
                            </div>
                            <p className="REM-font text-text-color">
                              Backend development focuses on building the
                              server-side logic, databases, and APIs that enable
                              the functionality of web applications. It ensures
                              efficient data processing, storage, and secure
                              communication with the frontend.
                            </p>
                          </div>
                          <div></div>
                          <div></div>
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
          <h3
            className={` title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
          >
            Related Components
          </h3>
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
