var submit = document.getElementById("button");

submit.addEventListener("click", function () {
    var recycledPlastics = document.getElementById("plastic").value;
    var recycledPaper = document.getElementById("paper").value;
    var recycledGlass = document.getElementById("glass").value;
    var recycledCans = document.getElementById("cans").value;

    var bottleOil = .00959;
    var tenPaperWater = .3472;

    console.log(recycledPlastics);
    alert("By recycling " + recycledPlastics + " platic bottles, you have saved " + (bottleOil * recycledPlastics) + " gallons of oil.");
    if (recycledPaper >= 10)
    {
        alert("By recycling " + recycledPaper + " pieces of paper, you have saved " + (tenPaperWater * recycledPaper) + " gallons of water.");
    }

})