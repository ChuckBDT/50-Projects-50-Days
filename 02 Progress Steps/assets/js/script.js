// Variables
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const contCircle = document.querySelectorAll(".circle");
const barProg = document.getElementById("progress");
let currentActive = 1;

// Listeners

btnNext.addEventListener("click", nextStep);
btnPrev.addEventListener("click", prevStep);


// Functions

function nextStep() {
    currentActive++
    if (currentActive > contCircle.length) {
        currentActive = contCircle.length;
    }
    update()
}

function prevStep() {
    
    if (currentActive > 1) {
        currentActive--
    }
    update()
}

function update() { 
    contCircle.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })
    
    const actives = document.querySelectorAll(".active");
    barProg.style.width = ((((actives.length - 1) / (contCircle.length - 1))*100)+ "%");
    if (actives.length === 1) {
        btnPrev.disabled = true;
        btnNext.disabled = false;
    } else if (actives.length === contCircle.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;  
    }
}