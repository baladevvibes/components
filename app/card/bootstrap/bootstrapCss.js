const bootStrapCSS = [
  {
    _id: 0,
    name:"css card design code",
    tag:"card",
    stylecode: `/*News  */
@import url("https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap");
.trip-img {
  height: 350px !important;
  width: 100%;
  object-fit: cover;
}
.card-section {
  padding: 100px 0px;
}
.trip-overlay {
  border-radius: 20px;
  cursor: pointer;
}
.even {
  margin-top: 20px;
}
.trip-text {
  color: #fcfcfc;
  font-family: "News Cycle", sans-serif;
  display: none;
}
.trip-overlay:hover .overlayer {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5578606442577031) 0%,
    rgba(131, 56, 236, 1) 100%
  );
}

.trip-overlay:hover .hidden-element {
  display: block;
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
  .odd{
    margin-top: 20px;
  }
}

@media only screen and (min-width: 200px) and (max-width: 640px) {
  .container {
    width: 100% !important;
    margin: 0px !important;
    max-width: 100% !important;
  }
  .trip-img {
    height: 450px !important;

  }
  .odd{
    margin-top: 20px;
  }
}
`,
  },
];

export default bootStrapCSS;
