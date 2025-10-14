let currentWeight = 0;

function check() {
    currentWeight = parseFloat(document.getElementById("baggageInput").value);

    if (isNaN(currentWeight)) {
        alert("Please enter a valid number.");
        return;
    }

    if (currentWeight > 15) {
        alert("Your baggage is overweight!");
        document.getElementById("removeSection").style.display = "block";
    } else {
        alert("Your baggage is within the limit. You may proceed.");
        document.getElementById("removeSection").style.display = "none";
    }
}

function removeWeight() {
    let removeAmount = parseFloat(document.getElementById("removeInput").value);

    if (isNaN(removeAmount) || removeAmount <= 0) {
        alert("Please enter a valid amount to remove.");
        return;
    }

    currentWeight = currentWeight - removeAmount;
    document.getElementById("baggageInput").value = currentWeight.toFixed(2);

    if (currentWeight <= 15) {
        alert("Weight is now acceptable. You may proceed.");
        document.getElementById("removeSection").style.display = "none";
    } else {
        alert("Still overweight. Please remove more.");
    }
}
