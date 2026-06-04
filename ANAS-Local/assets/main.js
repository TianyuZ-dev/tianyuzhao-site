const dashboards = [
  { id: "viz1780074022948", mobileHeight: "1527px" },
  { id: "viz1780074077968", mobileHeight: "1527px" },
];

dashboards.forEach(({ id, mobileHeight }) => {
  const divElement = document.getElementById(id);
  if (!divElement) return;

  const vizElement = divElement.getElementsByTagName("object")[0];
  if (!vizElement) return;

  if (divElement.offsetWidth > 800) {
    vizElement.style.width = "100%";
    vizElement.style.height = (divElement.offsetWidth * 0.75) + "px";
  } else if (divElement.offsetWidth > 500) {
    vizElement.style.width = "100%";
    vizElement.style.height = (divElement.offsetWidth * 0.75) + "px";
  } else {
    vizElement.style.width = "100%";
    vizElement.style.height = mobileHeight;
  }
});

if (document.querySelector(".tableauViz")) {
  const scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  document.body.appendChild(scriptElement);
}
