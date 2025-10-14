let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let i of l) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
};

let listEuler2 = (a, l) => {
    let sum = 0;
    for (let i of l) {
        for (let m of a) {
            if (i % m === 0) {
                sum += i;
                break;
            }
        }
    }
    return sum;
};

let listEuler3 = (a, l) => {
    let sum = 0;
    l.forEach((item) => {
        if (a.some((num) => item % num === 0)) {
            sum += item;
        }
    });
    return sum;
};

let eulerlist = () => {
    let a = 2;
    let b = 3;
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler1(a, b, l);
    document.getElementById("result1").innerText = "Result: " + result;
};

let euler2Lists = () => {
    let a = [2, 3];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler2(a, l);
    document.getElementById("result2").innerText = "Result: " + result;
};

let euler2Lists1 = () => {
    let a = [2, 3, 5];
    let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    let result = listEuler3(a, l);
    document.getElementById("result3").innerText = "Result: " + result;
};
