const bootStrapCSS = [
  {
    _id: 0,
    name: "call to action section ui design",
    tag:"call to action",
    stylecode: `/* Actor */
@import url("https://fonts.googleapis.com/css2?family=Actor&display=swap");
/* Jost */
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap");

.container {
  width: 1400px !important;
  margin: 0px auto;
  padding: 10px 4px;
}
.Actor {
  font-family: "Actor", sans-serif;
}
.jost-font {
  font-family: "Jost", sans-serif !important;
}
.boat-title {
  color: #f9f9f9;
  padding-bottom: 2px;
  letter-spacing: 2px;
}
.boat-para {
  color: #f9f9f9;
  width: 70%;
  font-size: 20px;
  line-height: 30px; 
}
.boat-path {
  background-color: #101010ab;
}
.img-div {
  margin: 80px 0px;
  height: 350px;
}
.img-boat {
  object-fit: cover;
}
.boat-button{
  border-radius: 4px;
}
.boat-button:hover{
  background-color: #5AA9E6;
  color:#f9f9f9;
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
  .boat-para {
    width: 100%!important;
    font-size: 16px!important;
  }
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;

  }
  .boat-para {
    width: 100%!important;
    font-size: 16px!important;
  }
}
`,
  },
];

export default bootStrapCSS;
