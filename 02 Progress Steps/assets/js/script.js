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

console.log(contCircle);

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
    console.log(actives);
    if (actives.length > 1) {
        btnPrev.disabled = false;
    }   else if (actives.length === circle.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = true;
        
    }
}









// function nextStep() {
    

//     barProg.style.width = (parseInt(barProg.style.width, 10) + 33) + '%';
//     if (barProg.style.width >= "25%") {
//         btnPrev.setAttribute("disabled", "false");
//     }
// }