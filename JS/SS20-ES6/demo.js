//! ES6 //
/* //* Phạm vi hoạt động của let và var;
Phạm vi của let: scope:({})
Phạm vi của var là function;
const: không thay đổi được giá trị. Ngoại lệ : Đối tượng, Mảng(thay đổi được)

var có thể khai báo lại khi cùng cấp và gán lại được giá trị
let không thể khai báo lại nếu cùng cấp, nhưng vẫn gán lại được giá trị. Dùng trong khối lệnh, không nên khai báo toàn cục.
*/

//? Decstructuring //
// let listName = ["A", "B", "C", "D", "E"];
// let [name1, name2, name3, name4, name5] = listName;
// console.log(name1, name2, name3, name4, name5);
// let obj={
//     name: "Hoang",
//     age: 50,
//     id: 1
// }
// let {name,age,id} = obj;
// console.log(name, age, id);

//? SPREAD //
// var arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr = arr1.concat(arr2);
// console.log(arr);
// let arrSpread = [...arr2, ...arr1];
// console.log(arrSpread);

// let student1 = {
//     name: "Yen",
//     age: 20,
//     id: 1
// }
// let student2 = {
//     address: "Thanh Xuan"
// }
// let student3 = {...student1, ...student2}
// console.log(student3);

// function manAdd(params){
//     let result = [...arr1,...params]
//     console.log(result);
// }
// manAdd(["a","b"]);

// //? Arrow functions//
// let total = ()=>{
//     console.log("Hello Hoang");
// }
// total();

// let objStudent = {
//     name: "Student",
//     age: 20,
//     say: ()=>{
//         console.log(this);
//     }
// }
// //! arrow functions nếu "this" thì sẽ là phạm vi toàn window.
// //! function bình thường thì "this" là phạm vị trong object.
// objStudent.say();

//? Template string $//
// let student = "Vuong";
// let say = `hello ${student}`;
// console.log(say);


//? Class JS //
// class Person {
//     constructor(name,age,id){
//         this.name = name;
//         this.age = age;
//         this.id = id;
//         }
//     talk(){
//         return "bye";
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         return this.name = name;
//     }
// }
// let person1 = new Person("Yen",20,1);
// console.log(person1.getName());
// console.log(person1.getName(),"New Name");
// console.log(person1);

//TODO : Tính kế thừa. Khi dùng extends thì class sau thừa hưởng toàn bộ đặc điểm và thuộc tính của class trước.
// class World extends Person{
//     constructor(name,age,id,address){
//         super(name,age,id);
//         this.address = address;
//     }
//     getInfo(){
//         return this.address + this.getName();
//     }
// }
// let man = new World("Vuong",22,2,"Hanoi")
// console.log(man.getInfo());

//! Import //
import greed from "./Import-Export.js"
console.log(greed());
import {bye} from "./Import-Export.js"
console.log(bye());