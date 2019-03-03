var submit = document.getElementById("button");

submit.addEventListener("click", function () {
    var recycledPlastics = document.getElementById("plastic").value;
    var recycledPaper = document.getElementById("paper").value;
    var recycledGlass = document.getElementById("glass").value;
    var recycledCans = document.getElementById("cans").value;

    var bottleOil = .00959;

    console.log(recycledPlastics);
    alert("By recycling " + recycledPlastics + " platic bottles, you have saved " + (bottleOil * recycledPlastics) + " gallons of oil.");

})