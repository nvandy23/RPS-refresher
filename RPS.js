const yc=document.querySelector(".Your_choices")
const cc =document.querySelector(".com_choice")
const ys = document.querySelector(".Your_score")
const cs =document.querySelector(".Computer_score")
const array = ["Rock","Paper","Scissors"]
let score = 0
let score1 = 0
const scoreReact =  document.createElement('div')
cs.insertAdjacentElement('afterend', scoreReact);


yc.addEventListener('click',(evt) =>{
    console.log(evt.target.textContent)
    const randomIndex = Math.floor(Math.random() * array.length);
    cc.textContent = array[randomIndex];
    if(evt.target.textContent === cc.textContent) {
        scoreReact.textContent = "It's a tie!"
    }
    else if(evt.target.textContent === "Rock" && cc.textContent ==="Scissors" || evt.target.textContent === "Scissors" && cc.textContent === "Paper" || evt.target.textContent === "Paper" && cc.textContent === "Rock"){
        score++
        ys.textContent = score
        scoreReact.textContent = "You win!"
    }
    else {
        score1++;
        cs.textContent = score1
        scoreReact.textContent ="You lose!"

    }
})






