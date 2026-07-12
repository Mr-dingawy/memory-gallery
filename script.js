const sideBtn = document.getElementById("side-btn");
const side = document.getElementById("side");
const sideClose = document.getElementById("side-btn-close");


console.log(side,sideBtn.sideClose)
console.log(sideBtn)
console.log(sideClose)

sideBtn.addEventListener("click", () => {
    side.classList.toggle("hide");
});
sideClose.addEventListener("click", () => {
    side.classList.add("hide");
});



