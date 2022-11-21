// Bai 1
// function squareNum(){
//     let x = parseFloat(prompt("Xin moi nhap so ban muon tinh binh phuong: "));
//     x = x * x;
//     return x;
// }
// document.getElementById("result").innerHTML = "Binh phuong cua so ban nhap la: " + squareNum();

// Bai 2
// function findCircleArea() {
//     const Pi = 3.14;
//     let R = parseFloat(prompt("Xin moi nhap ban kinh hinh tron cua ban: "));
//     let S = R * R * Pi;
//     return S;
// }
// document.getElementById("result").innerHTML = "Dien tich hinh tron cua ban la: " + findCircleArea();

// function findCirclePerimeter() {
//     const Pi = 3.14;
//     let R = parseFloat(prompt("Xin moi nhap ban kinh hinh tron cua ban: "));
//     let P = R * 2 * Pi;
//     return P;
// }
// document.getElementById("result").innerHTML = "Chu vi hinh tron cua ban la: " + findCirclePerimeter();

// Bai 3
// function findFactorial() {
//     let x = parseInt(prompt("Xin moi nhap so ban muon tinh giai thua: "));
//     for ( i = 0; i <= x; i++) {
//         if ( x == 0 || x == 1) {
//             return 1;
//         } else {
//             let y = "";
//             let z = 1;
//             for ( j = 1; j <= x; j++) {
//                 y = z * j;
//                 z = y;
//                 console.log(y);
//             }
//             return y;
//         }
//     }
// }
// document.getElementById("result").innerHTML = "Ket qua la: " + findFactorial();

// Bai 4
// function checkNum() {
//     let a = prompt("Xin moi nhap: ");
//     if ( a = parseInt(a)) {
//         a = true;
//     } else {
//         a = false;
//     }
//     return a;
// }
// document.getElementById("result").innerHTML = checkNum();

// Bai 5
// function findMin() {
//     let a = parseInt(prompt("Nhap vao so A: "));
//     let b = parseInt(prompt("Nhap vao so B: "));
//     let c = parseInt(prompt("Nhap vao so C: "));
//     let minList = [a, b, c];
//     let min = minList[0];
//     for ( i = 1; i < minList.length; i++) {
//         if (minList[i] < min) {
//             min = minList[i];
//         }
//     }
//     return min;
// }
// document.getElementById("result").innerHTML = findMin();

// Bai 6
// function checkNum() {
//     let a = parseInt(prompt("Xin moi nhap: "));
//     if ( a > 0 ) {
//         a = true;
//     } else {
//         a = false;
//     }
//     return a;
// } 
//     document.getElementById("result").innerHTML = checkNum();

// Bai 7
function swapNum(){
    let a = parseInt(prompt("Nhap so A: "));
    let b = parseInt(prompt("Nhap so B: "));
    let numList = [a,b];
    let c = numList[0];
    numList[0] = numList[1];
    numList[1] = c;
    return numList;
}
document.getElementById("result").innerHTML = swapNum();
