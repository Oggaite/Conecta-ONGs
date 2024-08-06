const windowHeight = window.innerHeight;
console.log("A altura da janela do navegador é:", windowHeight);

function toggleSubNavbar() {
  var subNavbar = document.getElementById("subNavbar");

  if (subNavbar.style.display === "block") {
    subNavbar.classList.remove("show");
    subNavbar.classList.add("hide");
    setTimeout(() => { 
      subNavbar.style.display = "none"; 
    }, 300);
  } else {
    subNavbar.style.display = "block";
    subNavbar.classList.remove("hide");
    subNavbar.classList.add("show");
  }
}

const box = document.querySelector(".apresentacao__links__link");

box.addEventListener("mouseover", () => {
  box.classList.add("hovered");
});

box.addEventListener("mouseout", () => {
  box.classList.remove("hovered");
});
      
