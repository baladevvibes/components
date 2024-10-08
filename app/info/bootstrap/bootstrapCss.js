const bootStrapCSS = [
  {
    _id: 0,
    name: "Info Design Section",
    stylecode: `@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap");

.container {
  width: 1400px !important;
  margin: 0px auto;
}
.raleway-font {
  font-family: "Raleway", sans-serif !important;
}
.rowdies {
  font-family: "Rowdies", sans-serif;
}
.covid-img {
  width: 100%;
}
.covid-img-div {
  position: absolute;
  bottom: 0;
  background-color: #3772ff;
  border-top-left-radius: 254px;
  border-top-right-radius: 254px;
}
.title-h4 {
  color: #b80c09;
  padding-top: 10px;
  font-size: 28px;
}
.title-num {
  color: #b80c09;
  font-size: 54px;
}
.des-para {
  color: #444;
}
.highlight {
  padding: 100px 0px;
}
@media only screen and (min-width: 640px) and (max-width: 768px) {
  .container {
    width: 100%;
  }
  .covid-img-div {
    display: flex;
    position: relative !important;

    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;
  }
  .covid-img {
    width: auto !important;

    height: auto !important;
  }
  .covid-img-div {
    display: flex;
    position: relative !important;
    justify-content: center;
    align-items: center;
  }
}
`,
  },
  {
    _id: 1,
    name: "Info number section css",
    stylecode: `/* Rowdies */
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap");
.info-title {
  font-family: "Rowdies", sans-serif;
  font-size: 50px !important;
  color: #fcfcfc;
}
.info-para {
  color: #fcfcfc;
}
.info {
  background-color: #054a91;
  padding: 50px 0px;
  margin: 100px 0px;
}

@media only screen and (min-width: 1024px) and (max-width: 1280px) {
}

@media only screen and (min-width: 900px) and (max-width: 1023px) {
}

@media only screen and (min-width: 768px) and (max-width: 900px) {
}

@media only screen and (min-width: 640px) and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;
  }
}
`,
  },
];

export default bootStrapCSS;
