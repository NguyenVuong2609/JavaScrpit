function plusFunction() {
    let A = parseFloat(document.getElementById("num1").value)
    let B = parseFloat(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= A + B
}
function minusFunction() {
    let A = parseFloat(document.getElementById("num1").value)
    let B = parseFloat(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= A - B
}
function multiFunction() {
    let A = parseFloat(document.getElementById("num1").value)
    let B = parseFloat(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= A * B
}
function divFunction() {
    let A = parseFloat(document.getElementById("num1").value)
    let B = parseFloat(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= A / B
}