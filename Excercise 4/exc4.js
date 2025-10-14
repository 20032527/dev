function sumMultiples(factors, multiples) {
    let sum = 0;
    for (let m of multiples) {
        for (let f of factors) {
            if (m % f === 0) {
                sum += m;
                break;
            }
        }
    }
    return sum;
}

function processInput() {
    let input = document.getElementById("inputString").value.trim();
    let parts = input.split(":");

    if (parts.length !== 2) {
        document.getElementById("output").innerText = "Invalid input format.";
        return;
    }

    let factors = parts[0].trim().split(" ").map(Number);
    let multiples = parts[1].trim().split(" ").map(Number);

    if (factors.some(isNaN) || multiples.some(isNaN)) {
        document.getElementById("output").innerText = "Input contains invalid numbers.";
        return;
    }

    let total = sumMultiples(factors, multiples);

    let output = total + " : " + factors.join(" ") + " : " + multiples.join(" ");
    document.getElementById("output").innerText = output;
}
