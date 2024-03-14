let curs = document.querySelector(".cursor");
let main = document.querySelector(".main");
let content = document.querySelector(".content");

main.addEventListener("mousemove", function (dets) {
  curs.style.left = dets.clientX + "px";
  curs.style.top = dets.clientY + "px";
});

content.addEventListener("mouseenter", function () {
  curs.classList.add("grow");
});

content.addEventListener("mouseleave", function () {
  curs.classList.remove("grow");
});
