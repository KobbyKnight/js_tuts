const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const clickButton = document.getElementById("btn");

clickButton.addEventListener("click", () => {
    const randomNumber = generateRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];

    color.innerHTML = colors[randomNumber];
});


function generateRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}