let word = document.getElementById("word");
let saywordBtn = document.getElementById("sayword");
let nextwordBtn = document.getElementById("nextword");
let nextword2Btn = document.getElementById("nextword2");
let nextword3Btn = document.getElementById("nextword3")


saywordBtn.addEventListener("click", () => {
    word.innerHTML = "haha my click here botton is working."
})

nextwordBtn.addEventListener("click", () => {
    word.innerHTML = "my dream is robotic arm but i have no engineer team and i am new programmer now."
})

nextword2Btn.addEventListener("click", () =>{
    word.innerHTML = "and the big dream is gipsy danger or striker eureka. nah but in this world never have kaiju."
})

nextword3Btn.addEventListener("click", () =>{
  word.innerHTML = "and this is my all dream thank for reading. END."
})