function ex1() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("result1").innerText = "Result: " + sum;
}

function ex2() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        document.getElementById("result2").innerText = "Please enter valid numbers.";
        return;
    }

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    document.getElementById("result2").innerText = "Result: " + sum;
}
