"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  //find text
  const originaltext = document.querySelector(".animatedText").textContent;

  //delete content of the original text container
  document.querySelector(".animatedText").textContent = "";

  //split text into a span for each letter, array
  const textarray = Array.from(originaltext);
  console.log("TEXT ARRAY", textarray);

  textarray.forEach((letter, i) => {
    let newSpan = document.createElement("span");
    newSpan.textContent = letter;
    document.querySelector(".animatedText").appendChild(newSpan);
  });

  //add staggered animation
  document.querySelectorAll(".animatedText span").forEach((elm, i) => {
    elm.classList.add("animate");
    elm.style.animationDelay = `${i / 40}s`;
  });
}
