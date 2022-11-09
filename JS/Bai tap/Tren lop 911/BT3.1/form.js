function myFunction() {
    let name = prompt("Please enter your name")
    let birthday = prompt("Please enter your birthday")
    let gender = prompt("Please enter your gender")
    let culture = prompt("Please enter your culture")
    let study = prompt("Please enter your education")
    let work1 = prompt("Please enter your 1st work")
    let work2 = prompt("Please enter your 2nd work")
    document.getElementById("name").innerHTML= "<b>" + name + "</b>.";
    document.getElementById("birthday").innerHTML= birthday;
    document.getElementById("gender").innerHTML= gender;
    document.getElementById("culture").innerHTML= culture;
    document.getElementById("study").innerHTML= study;
    document.getElementById("work1").innerHTML= work1;
    document.getElementById("work2").innerHTML= work2;
}
function myReset() {
    document.getElementById("name").innerHTML= "";
    document.getElementById("birthday").innerHTML= "";
    document.getElementById("gender").innerHTML= "";
    document.getElementById("culture").innerHTML= "";
    document.getElementById("study").innerHTML= "";
    document.getElementById("work1").innerHTML= "";
    document.getElementById("work2").innerHTML= "";
}