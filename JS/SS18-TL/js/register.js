const ipnElement = document.querySelector('#login__password');
const btnElement = document.querySelector('#btnPassword');
const iconElement = document.querySelector('#iconEye');
const ipnElement1 = document.querySelector('#login__password1');
const btnElement1 = document.querySelector('#btnPassword1');
const iconElement1 = document.querySelector('#iconEye1');

// Nút hiển thị password 
btnElement.addEventListener('click', function(){
  const currentType = ipnElement.getAttribute('type');
  ipnElement.setAttribute(
    'type',
    currentType === 'password' ? 'text' : 'password'
  )
  iconElement.classList.toggle("fa-eye")
})

btnElement1.addEventListener('click', function(){
  const currentType = ipnElement1.getAttribute('type');
  ipnElement1.setAttribute(
    "type",
    currentType === 'password' ? 'text' : 'password'
  )
  iconElement1.classList.toggle("fa-eye")
})

// Hàm kiểm tra ô nhập lại mật khẩu 
function confirmedPassword(){
  let x = document.getElementById('login__password');
  let y = document.getElementById('login__password1');
  y.addEventListener('keyup', function(){
    let text;
    if (x.value == y.value && x.value != "" && y.value != "") {
      text = 'Mật khẩu đã trùng khớp'
      keyPassConfirm = true;
    } else if ( x.value == "" || y.value == "" ) {
      text = 'Mật khẩu đang bỏ trống'
      keyPassConfirm = false;
    } 
    else {
      text = 'Mật khẩu chưa trùng khớp'
      keyPassConfirm = false;
    }
    document.getElementById('validatePassword2').innerHTML = text;
    console.log(keyPassConfirm);
    return keyPassConfirm;
  })
}

// Hàm kiểm tra ID theo định dạng email 
function checkID(){
  let x = document.getElementById('login__username');
  let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  x.addEventListener('keyup', function(){
    let result = pattern.test(x.value);
    if ( result == true) {
      document.getElementById("valiadteID").innerHTML = "";
    } else {
      document.getElementById("valiadteID").innerHTML = "ID chưa đúng định dạng Email.";
    }
  })
}

// Hàm kiểm tra mật khẩu 
let keyPass = false;
let keyPassConfirm = false;
function checkPassword(){
  let x = document.getElementById('login__password');
  x.addEventListener('keyup', function(){
    let array = [];
    let text;
    array.push(x.value);
    let y = array.toString().split('');
    console.log(y);
    if (y.length < 8){
      text = 'Vui lòng nhập tối thiểu 8 ký tự';
      document.getElementById('validatePassword1').innerHTML = text;
      keyPass = false;
    } else {
      text = "";
      document.getElementById('validatePassword1').innerHTML = "";
      keyPass = true;
    };
    console.log(keyPass);
    return keyPass;
  })
}

// Kiểm tra mật khẩu đã có ký tự đặc biệt chưa 
function checkPasswordSpecial() {
  let x = document.getElementById('login__password');
  const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
  x.addEventListener('keyup', function(){
    let result = regex.test(x.value);
    if ( result == true) {
      document.getElementById("checkPassword1").innerHTML = "";
    } else {
      document.getElementById("checkPassword1").innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa, 1 ký tự đặc biệt và 1 ký tự số.";
    }
  })
}

// Hàm kiểm tra tổng thể có đăng ký được hay không 
function registerConfirm(){
  if (keyPass = false || keyPassConfirm == false) {
    document.getElementById('signUp').onsubmit = function(e){
      e.preventDefault();
    } 
  } 
}

// Hàm thêm thành viên
let MemberList = [];
class Member {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
function newMember(){
  let x = document.getElementById('login__username')
  let y = document.getElementById('login__password')
  if (x.value != "" && y.value!= "" && keyPassConfirm == true){
    let a = new Member(x.value, y.value);
    MemberList.push(a);
    console.log(MemberList);
    localStorage.setItem("Member",JSON.stringify(MemberList))
    window.location = './login.html'
  }
  return;
}


checkID();
checkPassword();
confirmedPassword();
checkPasswordSpecial();
registerConfirm();