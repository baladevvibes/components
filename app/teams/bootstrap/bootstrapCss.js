const bootStrapCSS = [
  {
    _id: 0,
    name: "team section design",
    tag:"team",
    stylecode: `.img-tag {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
.img-tag-first {
  background-color: #f7d002;
}
.img-tag-second {
  background-color: #f71735;
}
.img-tag-third {
  background-color: #06bcc1;
}
.img-tag-fourth {
  background-color: #363537;
}
.padding-zero-tag {
  padding: 0px !important;
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
  .img-tag {
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
}
`,
  },
];

export default bootStrapCSS;
