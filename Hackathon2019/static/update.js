var userInput = document.getElementById("user-input");
var button = document.getElementById("enter-button");



button.addEventListener("click", function () {
    console.log(userInput);
    alert("Good job! You recycled " + userInput.value + " things!");
})