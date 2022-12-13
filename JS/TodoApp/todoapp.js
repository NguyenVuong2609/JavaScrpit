let key;
function showHeader() {
    data = `<h1>To Do App</h1>
    <div class="input">
    <input type="text" placeholder="Enter a task here" id="nameTask">
    <input type="button" id="saveTask" value="SAVE"><br>
    <input type="text" placeholder="" id="editTask">
    <input type="button" id="saveEditTask" value="EDIT">
    </div>
    `;
    document.getElementById("header").innerHTML = data;
}
showHeader();
let array = localStorage.getItem("todoTable");
if (array != null) {
    showBody();
    resultList();
}

//! Hiển thị bảng làm việc//
let btnSave = document.getElementById("saveTask");
btnSave.addEventListener("click", () => {
  let data = `<tr>
    <th>No.</th>
    <th>Todo Item</th>
    <th>Status</th>
    <th colspan="3">Actions</th>
    </tr>`;
  let todoArray = JSON.parse(localStorage.getItem("todoTable"));
  console.log(todoArray);
  let taskInfo = document.getElementById("nameTask").value;
  if (todoArray == null){
    todoArray = [];
}
if (taskInfo != "") {
    todoArray.push({
      name: taskInfo,
      status: "Not running",
      id: todoArray.length + 1
  })
}
console.log(todoArray);
document.getElementById("nameTask").value = "";
localStorage.setItem("todoTable", JSON.stringify(todoArray));
if (todoArray != null) {
    for (var i = 0; i < todoArray.length; i++) {
        data += `<tr>
        <td>${i + 1}</td>
        <td>${todoArray[i].name}</td>
        <td>${todoArray[i].status}</td>
        <td><input type="button" value="EDIT" class="editTask" onclick="edit(${todoArray[i].id})"></td>
        <td><input type="button" value="DELETE" class="deleteTask" onclick="deleteTask(${todoArray[i].id})"></td>
        <td><input type="button" value="FINISHED" class="finishTask" onclick="finishTask(${todoArray[i].id})"></td>
        </tr>`
    }
}
document.getElementById("todoTable").innerHTML = data;
resultList()
});
function showBody(){
    let todoArray = JSON.parse(localStorage.getItem("todoTable"));
    let data = `<tr>
    <th>No.</th>
    <th>Todo Item</th>
    <th>Status</th>
    <th colspan="3">Actions</th>
    </tr>`;
    for (var i = 0; i < todoArray.length; i++) {
        data += `<tr>
        <td>${i + 1}</td>
        <td>${todoArray[i].name}</td>
        <td>${todoArray[i].status}</td>
        <td><input type="button" value="EDIT" class="editTask" onclick="edit(${todoArray[i].id})"></td>
        <td><input type="button" value="DELETE" class="deleteTask" onclick="deleteTask(${todoArray[i].id})"></td>
        <td><input type="button" value="FINISHED" class="finishTask" onclick="finishTask(${todoArray[i].id})"></td>
        </tr>`
    }
    document.getElementById("todoTable").innerHTML = data;
}
function deleteTask(id){
    let myList = JSON.parse(localStorage.getItem("todoTable"));
    if (myList.length > 1){
        for (let i = 0; i < myList.length; i++){
            if (myList[i].id == id){
                myList.splice(i, 1);
            }
            myList[i].id =  myList[i].id -1;
        }
    } else {
        myList= [];
    }
    console.log(myList);
    localStorage.setItem("todoTable", JSON.stringify(myList));
    showBody();
    resultList()
}
function edit(id){
    let myList = JSON.parse(localStorage.getItem("todoTable"));
    let newData = document.getElementById('editTask')
    for (let i = 0; i < myList.length; i++){
        if (myList[i].id == id){
            myList[i].status = myList[i].status == "In Progress" ? "Not running" : "In Progress";
            newData.value = myList[i].name;
            key = myList[i].id;
        }
    }
    localStorage.setItem("todoTable", JSON.stringify(myList));
    showBody();
    resultList();
}
function finishTask(id) {
    let myList = JSON.parse(localStorage.getItem("todoTable"));
    for (let i = 0; i < myList.length; i++){
        if (myList[i].id == id){
            myList[i].status = myList[i].status == "Completed!" ? "Failed!" : "Completed!" ;
        }
    }
    localStorage.setItem("todoTable", JSON.stringify(myList));
    showBody();
    resultList()
}
function resultList(){
    let myList = JSON.parse(localStorage.getItem("todoTable"));
    let notYet = 0;
    let done = 0;
    let fail = 0;
    for (let i = 0; i < myList.length; i++) {
        if (myList[i].status == "In Progress" || myList[i].status == "Not running"){
            notYet += 1;
        } else if (myList[i].status == "Completed!"){
            done += 1;
        } else {
            fail += 1;
        }
    };
    data = `
    <div id="total">Tổng số công việc phải làm là: ${myList.length}</div><br>
    <div id="notYet">Số công việc chưa hoàn thành: ${notYet}</div><br>
    <div id="done">Số công việc đã thực hiện thành công: ${done}</div>
    <br>
    <div id="fail">Số công việc đã thất bại: ${fail}</div>`
    document.getElementById('result').innerHTML = data;
}
let btnEditData = document.getElementById('saveEditTask');
btnEditData.addEventListener('click', () =>{
    console.log("123");
    console.log(key);
    let myList = JSON.parse(localStorage.getItem("todoTable"));
    let newData = document.getElementById('editTask')
    for (let i=0; i<myList.length; i++){
        if (key == myList[i].id){
            myList[i].name = newData.value;
            console.log(myList[i].name);
        }
    }
    document.getElementById('editTask').value= "";
    localStorage.setItem("todoTable", JSON.stringify(myList));
    showBody();
    resultList()
})