document.write("hello");
document.getElementById("capital1").innerHTML = "New York";
document.getElementsByClassName("capital")[0].innerHTML = "Kuala <br/> Lumpur";
document.getElementById("capital1").style.color = "red";

window.alert("Vui lòng trả tiền để xem Full nội dung \n0976106636");

function myFunction() {
    let text;
    if (confirm("Nhận 100k") == true) {
      text = "Không làm mà đòi có ăn thì...";
    } else {
      text = "Chúc may mắn lần sau!";
    }
    document.getElementById("demo").innerHTML = text;
  }

  prompt("Enter your phone number:");
  confirm("Are you ready?")