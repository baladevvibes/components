const bootStrapCSS = [
  {
    _id: 0,
    name:"footer design html css",
    tag:"footer",
    stylecode: `/* Acme */
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
/* Varela */
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

.varela-round-font {
  font-family: "Varela Round", sans-serif;
}

.acme-font {
  font-family: "Acme", sans-serif !important;
}
.footer {
  background-color: #161925;
  padding: 30px 0px 0px 0px;
}
.footer-li {
  color: #fcfcfc;
  padding-bottom: 10px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  list-style-type: none; /* Remove bullets */
}
.footer-li:hover {
  color: #a3986c;
}
.footer-last{
  font-size: 12px;
  color: #fcfcfc;
  margin-top: 10px;
  font-family: "Varela Round", sans-serif;
}
.footer-ul{
  padding: 0px!important;
}

.footer-title {
  color: #a3986c;
  font-size: 38px;
  
}
.follow-us {
  color: #fcfcfc;
}
.social-media-icon {
  height: 30px;
  width: 30px;
  border-radius: 6px;
  cursor: pointer;
}
.social-media-icon:hover{
  background: #a3986c;
}
.footer-icon {
  color: #fcfcfc;
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
  .follow{
    margin-bottom: 30px!important;
  }
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;
  }
  .follow{
    margin-bottom: 30px!important;
  }
}
`,
  },
];

export default bootStrapCSS;
