document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const results = document.getElementById("results-div");

    // Function to validate the entered number
    function isValidNumber(numberEntered) {
        var regEx = /^1?\s?(\(\d{3}\)|\d{3})[-\s.]?\d{3}[-\s.]?\d{4}$/;
        if (numberEntered.trim() === "") {
            alert("Please provide a phone number"); 
            return ""; 
        } else if (regEx.test(numberEntered)) {
            return "Valid US Number: " + numberEntered;
        } else {
            return "Invalid US Number: " + numberEntered;
        }
    }

    // Event listener for the click event on the check button
    checkBtn.addEventListener("click", function() {
        var numberEntered = userInput.value;
        results.textContent = isValidNumber(numberEntered);
    });

    // Event listener for the click event on the clear button
    clearBtn.addEventListener("click", function() {
        userInput.value = ""; 
        results.textContent = ""; 
    });
});
