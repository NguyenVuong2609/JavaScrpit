// Bai 1
// function alertMessage(){
//     alert("Xin chao!");
// }
// alertMessage();

// Bai 2
// function totalNum(x) {
//     x = x + 1;
//     console.log(x);
//     return x;
// }
// totalNum(x = parseInt(prompt('Xin moi nhap so: ')));
// totalNum(7);
// console.log(x);

// Bai 3
// function compareNum(a,b){
//     if (a > b) {
//         alert("A lon hon B.")
//     } else {
//         let c = a + b;
//         console.log(c);
//         return c;
//     }
// }

// compareNum(a = parseInt(prompt("Xin moi nhap so A: ")), b = parseInt(prompt("Xin moi nhap so B: ")));

// Bai 4
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
//     result = 0;
//     alert(result);
//     result = addNumbers();
//     alert(result);

// Bai 5
let star = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
let constellation = ["UrsaMinor","Tarurus","Cygnus","Lyra","Aquila","UrsaMajor","Leo"]
function findStar() {
    let name = prompt("Xin moi nhap ten ngoi sao: ");
    for ( i = 0; i < star.length; i++){
        if (name == star[i]){
            document.getElementById("result").innerHTML = ("Ngoi sao cua ban nam o chom sao: " + constellation[i]);
            break;
        } else {
            document.getElementById("result").innerHTML = ("Rat tiec. Chung toi khong tim thay.");
        }
    }
}
findStar();