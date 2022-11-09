function myFunction() {
    let name = prompt("Please enter your name")
    let birthday = prompt("Please enter your birthday")
    let gender = prompt("Please enter your gender")
    let culture = prompt("Please enter your culture")
    let study = prompt("Please enter your education")
    let work1 = prompt("Please enter your 1st work")
    let work2 = prompt("Please enter your 2nd work")
    document.getElementById("name").innerHTML="Họ và tên: " + name + ".";
    document.getElementById("birthday").innerHTML="Ngày sinh: " + birthday;
    document.getElementById("gender").innerHTML="Giới tính: " + gender;
    document.getElementById("culture").innerHTML="Văn hóa: " + culture;
    document.getElementById("study").innerHTML="Học vấn: " + study;
    document.getElementById("work1").innerHTML="Công việc 1: " + work1;
    document.getElementById("work2").innerHTML="Công việc 2: " + work2;
}