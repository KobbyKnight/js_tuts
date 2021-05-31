let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn"); //select all elements with .btn class

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log("click");
        // Get classes of the specific btn object
        const btnClasses = e.currentTarget.classList;
        // console.log(btnClasses);
        if (btnClasses.contains("decrease")) {
            value.textContent = --count;
        } else if (btnClasses.contains("increase")) {
            value.textContent = ++count;
        } else {
            count = 0;
            value.textContent = count;
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "#222"
        }
    });
    
});