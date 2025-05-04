const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let feetInput = document.querySelector("#feet");
    let inchesInput = document.querySelector("#inches");
    const result = document.querySelector("#results");

    let feet = parseInt(feetInput.value); 
    let inches = parseInt(inchesInput.value);

    if (isNaN(feet) || isNaN(inches)) {
        result.textContent = "Please enter a valid number!";
    } else if (feet < 0) {
        result.textContent = "Please enter a Feet value bigger than 0.";
    } else if (inches < 0 || inches >= 12) {
        result.textContent = "Please enter an inch value between 0 and 12.";
    } else {
        let totalInches = feet * 12 + inches;
        let cm = totalInches * 2.54;
        result.textContent = `${cm.toFixed(2)} cm`;
        feetInput.value = "";
        inchesInput.value = "";
    }
});