var productList = [];
// Them san pham 
function addProduct() {
    productList.push(document.getElementById("productName").value);
    console.log(productList);
    document.getElementById("productName").value = "";
    displayProduct();
}


// Hien san pham 
function displayProduct() {
    let display = "";
    display += "<tr>";
    display += "<th>" + "STT" + "</th>" + "<th>" + "Product's Name" + "</th>" + "<th>" + "Action" + "</th>";
    for (let i = 0; i < productList.length; i++) {
        display += "<tr>";
        display += "<td>" + (i + 1) + "</td>" + "<td>" + productList[i] + "</td>" + "<td>" + "<span>" + "<input type='button' onclick='editProduct("+i+")' id='editButton' value='Edit'></input>" + "</span>" + " " + "<span>" + "<input type='button' onclick='deleteProduct("+i+")' id='deleteButton' value='Delete'></input>" + "</span>" + "</td>";  
        display += "</tr>";
    }
    document.getElementById("displayProduct").innerHTML = display;
    document.getElementById("total").innerHTML = "Tổng số lượng sản phẩm là: " + productList.length;
}

// Xoa san pham 
function deleteProduct(i) {
    productList.splice(i ,1)
    displayProduct();
}
var value = "";
// Hien ten san pham len thanh edit
function editProduct(i) {
   document.getElementById("editName").value = productList[i];
   value =parseInt(i);
   displayProduct();
}

// Sua ten san pham 
function changeProduct() {
    productList[value] = document.getElementById("editName").value;
    displayProduct();
}


