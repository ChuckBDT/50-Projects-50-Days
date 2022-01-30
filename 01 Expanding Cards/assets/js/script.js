// Variables
const panel = document.querySelectorAll(".panel");

// Listeners
panel.forEach(panel => {
    panel.addEventListener("click", changeActive);
});

// Functions
function changeActive(e) {
    let activeNow = document.querySelector(".panel.active");
    activeNow.classList.remove("active");
    e.currentTarget.classList.add("active");
}