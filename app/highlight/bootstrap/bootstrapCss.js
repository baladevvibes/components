const bootStrapCSS = [
  {
    _id: 0,
    name: "highlight section css",
    tag:"highlight",
    stylecode: `/* Outfit */
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
/* Prompt */
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  width: 1400px !important;
  margin: 0px auto;
  padding: 10px 4px;
}
.Prompt{
    font-family: Prompt, sans-serif;
}
.outfit{
    font-family: Outfit,sans-serif;
}
.first-div {
  width: 70% !important;
  overflow: hidden!important;
}
.second-div {
  width: 30% !important;
  position: relative;
}
.sectionfour{
    position: relative;
}
.second-div-sub{
    background-color: #f2f2f2;
    position: absolute!important;
    width: 140%!important;
    right: 50px;
    padding: 30px;
}
.content-h4{
    padding-bottom: 0px;
    color:#EF2917;
    font-size: 30px;
}
.content-para{
    margin-bottom: 0px;
}
.design-pattern{
    padding: 100px 0px;
}
.truck001{
    height: 500px!important;
}


@media only screen and (min-width: 1024px) and (max-width: 1280px) {
}

@media only screen and (min-width: 900px) and (max-width: 1023px) {
}

@media only screen and (min-width: 768px) and (max-width: 900px) {
    .first-div {
        width: 100% !important;
        padding: 0px !important;
      }
      .second-div {
        padding: 0px!important;
        width: 100% !important;
        padding: 0px;
      }
      .second-div-sub{
        background-color: #f2f2f2;
        position: relative!important;
        width: 100%!important;
        right: 0px;
       
    }
}

@media only screen and (min-width: 640px) and (max-width: 768px) {
  .container {
    width: 100%;
  }
  .first-div {
    width: 100% !important;
    padding: 0px !important;
  }
  .second-div {
    width: 100% !important;
    padding: 0px !important;
  }
  .second-div-sub{
    background-color: #f2f2f2;
    position: relative!important;
    width: 100%!important;
    right: 0px;
}
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;

  }
  .second-div {
    padding: 0px !important;
  }
  .first-div {
    width: 100% !important;
    padding: 0px !important;
  }
  .second-div {
    width: 100% !important;
    padding: 0px !important;
  }
  .second-div-sub{
    background-color: #f2f2f2;
    position: relative!important;
    width: 100%!important;
    right: 0px;
}
.sectionfour{
  padding: 10px!important;
}
}
`,
  },
];

export default bootStrapCSS;
