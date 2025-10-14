function parse(i) {
    let o = parseInt(i);
    if (isNaN(o)) throw "NaN";
    return o;
}

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

    if (parts.length === 1) {
        // No colon, treat whole input as factors only (example: "2 3 5 67")
        try {
            let factors = parts[0].trim().split(" ").map(x => parse(x));
            document.getElementById("output").innerText = sumMultiples(factors, []) + " : " + factors.join(" ");
        } catch {
            document.getElementById("output").innerText = "corrupt : " + input;
        }
        return;
    }

    if (parts.length !== 2) {
        document.getElementById("output").innerText = "corrupt : " + input;
        return;
    }

    let rawFactors = parts[0].trim().split(" ");
    let rawMultiples = parts[1].trim().split(" ");

    // Modified version: prepend "corrupt" if any parse error occurs
    try {
        let factors = rawFactors.map(x => parse(x));
        let multiples = rawMultiples.map(x => parse(x));
        let total = sumMultiples(factors, multiples);
        document.getElementById("output").innerText = total + " : " + rawFactors.join(" ") + " : " + rawMultiples.join(" ");
    } catch {
        document.getElementById("output").innerText = "corrupt : " + input;
    }
}

function processInputFixed() {
    let input = document.getElementById("inputString").value.trim();
    let parts = input.split(":");

    if (parts.length !== 2) {
        document.getElementById("output").innerText = "corrupt : " + input;
        return;
    }

    let rawFactors = parts[0].trim().split(" ");
    let rawMultiples = parts[1].trim().split(" ");

    // Try to parse factors, omit corrupted values
    let factors = [];
    for (let x of rawFactors) {
        try {
            factors.push(parse(x));
        } catch {
            // omit corrupted value
        }
    }
    // Try to parse multiples, omit corrupted values
    let multiples = [];
    for (let x of rawMultiples) {
        try {
            multiples.push(parse(x));
        } catch {
            // omit corrupted value
        }
    }

    if (factors.length === 0 || multiples.length === 0) {
        document.getElementById("output").innerText = "corrupt";
        return;
    }

    let total = sumMultiples(factors, multiples);
    document.getElementById("output").innerText = total + " : " + rawFactors.join(" ") + " : " + rawMultiples.join(" ");
}
