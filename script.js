const sideBtn = document.getElementById("side-btn");
const side = document.getElementById("side");
const sideClose = document.getElementById("side-btn-close");
const btn = document.getElementById("themeToggle");



sideBtn.addEventListener("click", () => {
    side.classList.toggle("hide");
});
sideClose.addEventListener("click", () => {
    side.classList.add("hide");
});


btn.addEventListener("click", () => {
    const html = document.documentElement;
    console.log(html)

    if (html.getAttribute("data-bs-theme") === "dark") {
        html.setAttribute("data-bs-theme", "light");
        btn.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
        html.setAttribute("data-bs-theme", "dark");
        btn.classList.replace("bi-sun-fill", "bi-moon-fill");

    }
});



