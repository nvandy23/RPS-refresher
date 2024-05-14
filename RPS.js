const yc=document.querySelector(".Your_choices")
const cc =document.querySelector(".com_choice")
const array = ["Rock","Paper","Scissors"]

yc.addEventListener('click',(evt) =>{
    console.log(evt.target.textContent)
    const randomIndex = Math.floor(Math.random() * array.length);
    cc.textContent = array[randomIndex];
})



