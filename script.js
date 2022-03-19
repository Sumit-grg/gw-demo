const checkbox = document.querySelector("input[name=checkbox]");
const sidemenu = document.getElementById("what");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    sidemenu.style.display = "block";
  } else {
    console.log("Checkbox is not checked..");
    sidemenu.style.display = "none";
  }
});

window.onscroll = function() {
  if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight - 100) {
  document.querySelector(".downarrow").style.display = "none";
  document.querySelector(".footer-container").style.display = "block";
} else {
  document.querySelector(".downarrow").style.display = "block";
  document.querySelector(".footer-container").style.display = "none";

  }
}

const play = document.getElementById("vid");

play.play();