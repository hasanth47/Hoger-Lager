let score1 = document.querySelector('.score1');
let score2 = document.querySelector('.score2');
const score3 = document.querySelector('.score3');
const score4 = document.querySelector('.score4');
const score5 = document.querySelector('.score5');
const btnL = document.querySelector('.btnL');
const btnH = document.querySelector('.btnH');
const btnSt = document.querySelector('.btnSt');


btnSt.addEventListener("click", Visible);
btnL.addEventListener("click", Visible2);
btnH.addEventListener("click", Visible3);

function Visible() {
    score1.style.display = "block";
    score1.innerHTML = RandomInt();
    score2.style.display ="none"
    score3.style.display ="none"
    score4.style.display ="none"
    score5.style.display ="none"
    
}

function Visible2() {
    score2.style.display = "block";
    score2.innerHTML =  RandomIntBetween(0, score1.innerHTML);
    score1.style.display = "none"
    score3.style.display = "none"
    score4.style.display ="none"
    score5.style.display ="none"
}

function Visible3() {
    score3.style.display = "block";
    score3.innerHTML = RandomIntBetween(Number(score1.innerHTML), 100);
    score2.style.display = "none"
    score1.style.display ="none"
    score5.style.display ="none"
    score4.style.display ="none"

}

function RandomInt() {
    return Math.floor(Math.random() * 100 + 1);
}


function RandomIntBetween(min, max) {
    if(min >= max) 
        console.error("Min (" + min + ") is larger/equal to max (" + max + ").");

    console.log("Generating number between " + min + " and " + max);
    let generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log("generated number: " + generatedNumber)
    return generatedNumber;

}