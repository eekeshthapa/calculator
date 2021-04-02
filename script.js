function dis(val) {
    document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value;
    console.log(x)
    let y = eval(x);
    console.log(y);
    console.log(eval(x))
    console.log(x)
    document.getElementById("result").value = y;
    console.log(y);
    document.getElementById('history').innerHTML += x + '=' + y + ',' + ' ';
    document.getElementById('newline');
}

//function that clear the display
function clr() {
    document.getElementById("result").value = "";
}