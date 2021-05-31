const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const clickButton = document.getElementById("btn");


clickButton.addEventListener("click", () => {
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        let random = generateRandomNumber();
        hexColor += hex[random];        
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
});

function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}