document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var value = move.getAttribute("data-value");
    var a = (e.clientX * value) / 250;
    var b = (e.clientY * value) / 250;

    move.style.transform = "translateX(" + a + "px) translateY(" + b + "px)";
  });
}
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
