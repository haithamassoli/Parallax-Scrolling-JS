let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let mountains_behind = document.getElementById("mountains_behind");
let moontext = document.getElementById("moontext");
let explorer = document.querySelector(".explorer");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = `${value * 0.9}px`;
  stars.style.left = `${value * 2}px`;
  mountains_behind.style.top = `${value * 0.5}px`;
  moontext.style.marginRight = `${value * 4}px`;
  moontext.style.marginTop = `${value * 1.5}px`;
  explorer.style.marginTop = `${value * 2}px`;
  mountains_front.style.top = `${value * 0}px`;
  header.style.top = value * 0.5 + "px";
});
