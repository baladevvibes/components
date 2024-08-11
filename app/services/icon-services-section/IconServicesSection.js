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

export default function IconServicesSection() {
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
  const files = {
    "app.js": {
      _id: 0,
      name: "app.js",
      language: "javascript",
      value: servicesData[1]?.htmlcode,
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

  const FilterCard = () => {
    // id=1
    var arr = [];
    var idSection = "024";
    HomeComponents?.forEach((el) => {
      if (el._id !== idSection) {
        arr.push(el);
      }
    });
    var arrSort = arr.sort(function (a, b) {
      return a.tag.indexOf("services") - b.tag.indexOf("services");
    });
    var reve = arrSort.reverse();
    var arrData=[];
    var anotherData=[]
    reve.forEach((el)=>{
      if(el.tag=="services"){
        arrData.push(el)
      }else{
        anotherData.push(el)
      }
    })
    const shuffledArray = anotherData.sort((a, b) => 0.5 - Math.random())
    const finalData = arrData.concat(shuffledArray)
    setRelatedComponents(finalData);
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
          title={`Icon Services Section`}
          des={`This component create on 01/July/2024 using CSS framework tailwindcss. It fully
              responsive component.`}
          section_name={`Services`}
          using_font=" Quicksand "
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
                  <a href={`/services/icon-services-section/preview`}>
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
                  <div className="  container mx-auto my-32">
                    <div
                      className={` grid ${
                        xlScreen ? `grid-cols-4 gap-10` : ""
                      }  ${mdScreen ? `grid-cols-2 gap-6 ` : ``}  ${
                        lgScreen ? `grid-cols-3 gap-10` : ``
                      } ${smScreen ? `grid-cols-1 gap-4` : ``} ${
                        responsiveState
                          ? ``
                          : `lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-10 lge:gap-10 md:gap-4 mdsm:gap-4 sm:gap-4 `
                      } px-4`}
                    >
                      <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
                        <div
                          style={{ background: `${color?.hex}` }}
                          class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538]  opacity-50 rounded-full"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            draggable="false"
                            class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M222,216a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm24-80v24a6,6,0,0,1-6,6H61.07a37.77,37.77,0,0,1-36.4-27.08L10.6,92A14,14,0,0,1,24,74h8a6,6,0,0,1,4.24,1.76L58.49,98h26.1L74.73,68.43A14,14,0,0,1,88,50h8a6,6,0,0,1,4.25,1.76L146.49,98H208A38,38,0,0,1,246,136Zm-12,0a26,26,0,0,0-26-26H144a6,6,0,0,1-4.24-1.76L93.52,62H88a2,2,0,0,0-1.9,2.63L98.6,102.1a6,6,0,0,1-5.69,7.9H56a6,6,0,0,1-4.24-1.76L29.52,86H24a1.93,1.93,0,0,0-1.6.81,1.91,1.91,0,0,0-.31,1.76l14.06,46.9A25.86,25.86,0,0,0,61.07,154H234Z"></path>
                          </svg>
                        </div>
                        <h3 class="2xl:text-4xl quicksand-font pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
                          Flights
                        </h3>
                        <p class="pb-2 pt-2 quicksand-font sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
                          Select your departure and destination cities, dates,
                          and preferred class to view available flights.
                        </p>
                      </div>

                      <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
                        <div
                          style={{ background: `${color?.hex}` }}
                          class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538]  opacity-50 rounded-full"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            draggable="false"
                            class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>
                          </svg>
                        </div>
                        <h3 class="2xl:text-4xl quicksand-font pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
                          Ship
                        </h3>
                        <p class="pb-2 pt-2 quicksand-font sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
                          Enter your departure and arrival ports, travel dates,
                          and cabin preference to find available ships.
                        </p>
                      </div>

                      <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
                        <div
                          style={{ background: `${color?.hex}` }}
                          class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538]  opacity-50 rounded-full"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 32 32"
                            draggable="false"
                            class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M 14 3 C 12.742188 3 11.847656 3.890625 11.40625 5 L 10 5 C 7.25 5 5 7.25 5 10 L 5 21 C 5 23.425781 6.449219 25.523438 8.53125 26.46875 L 6 29 L 8.34375 29 L 10.375 26.96875 C 10.574219 26.988281 10.792969 27 11 27 L 21 27 C 21.207031 27 21.425781 26.988281 21.625 26.96875 L 23.65625 29 L 26 29 L 23.46875 26.46875 C 25.550781 25.523438 27 23.425781 27 21 L 27 10 C 27 7.25 24.75 5 22 5 L 20.59375 5 C 20.152344 3.890625 19.257813 3 18 3 Z M 14 5 L 18 5 C 18.566406 5 19 5.433594 19 6 L 19 7 L 22 7 C 23.320313 7 24.4375 7.828125 24.84375 9 L 7.15625 9 C 7.5625 7.828125 8.679688 7 10 7 L 13 7 L 13 6 C 13 5.433594 13.433594 5 14 5 Z M 7 11 L 25 11 L 25 16 L 7 16 Z M 7 18 L 25 18 L 25 21 C 25 23.21875 23.21875 25 21 25 L 11 25 C 8.78125 25 7 23.21875 7 21 Z M 16 19 C 14.894531 19 14 19.894531 14 21 C 14 22.105469 14.894531 23 16 23 C 17.105469 23 18 22.105469 18 21 C 18 19.894531 17.105469 19 16 19 Z"></path>
                          </svg>
                        </div>
                        <h3 class="2xl:text-4xl quicksand-font pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
                          Train
                        </h3>
                        <p class="pb-2 pt-2 quicksand-font sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
                          Enter your departure and arrival stations, travel
                          dates, and class preference to find available trains.
                        </p>
                      </div>

                      <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
                        <div
                          style={{ background: `${color?.hex}` }}
                          class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538]  opacity-50 rounded-full"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 32 32"
                            draggable="false"
                            class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M 5 5 C 3.355469 5 2 6.355469 2 8 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 14.5625 C 31 14 30.828125 13.445313 30.53125 12.96875 L 26.4375 6.40625 C 25.890625 5.53125 24.9375 5 23.90625 5 Z M 5 7 L 10 7 L 10 13 L 4 13 L 4 8 C 4 7.4375 4.4375 7 5 7 Z M 12 7 L 18 7 L 18 13 L 12 13 Z M 20 7 L 23.90625 7 C 24.253906 7 24.566406 7.175781 24.75 7.46875 L 28.1875 13 L 20 13 Z M 4 15 L 29 15 L 29 17 L 26 17 L 26 19 L 29 19 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"></path>
                          </svg>
                        </div>
                        <h3 class="2xl:text-4xl quicksand-font pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
                          Van
                        </h3>
                        <p class="pb-2 pt-2 quicksand-font sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
                          Enter your departure and arrival stations, travel
                          dates, and class preference to find available trains.
                        </p>
                      </div>
                    </div>
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
