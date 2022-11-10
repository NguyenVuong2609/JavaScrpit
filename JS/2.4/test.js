let a = true
let b = 5
let c = false
let d = "Long"

document.write(a || ( b && d && c)) && (c || (b && d && a))