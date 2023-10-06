
//Bài 1
// URL (nhập chuỗi): khi thay đổi giá trị → thay đổi URL của ảnh
const changePropertiesImg = () =>{
    let changeImg = document.getElementById("img")
    let url = document.getElementById('URL').value
    changeImg.src = url
}
//Width (nhập số): khi thay đổi giá trị → thay đổi chiều rộng của ảnh
const changeWidth = () => {
    let newWidthImg = document.getElementById('Width').value;
    let imgElement = document.getElementById('img');
    if(newWidthImg == ''){
        imgElement.style.width = 100 + "px"
    }
    imgElement.style.width = newWidthImg + "px";
}
//Height (nhập số): khi thay đổi giá trị → thay đổi chiều rộng của ảnh.
const changeHeight = () => {
    let newHeightImg = document.getElementById('Height').value;
    let imgElement = document.getElementById('img');
    if(newHeightImg == ''){
        mgElement.style.height = 100 + "px"
    }
    imgElement.style.height = newHeightImg + "px";
    
}
//Border Radius (nhập số): khi thay đổi giá trị → thay đổi độ bo góc của ảnh.
const changeRadius = () => {
    let newRadiusImg = document.getElementById('Radius').value;
    let imgElement = document.getElementById('img');
    if(newRadiusImg == ''){
        imgElement.style.borderRadius = 0 + "px"
    }
    imgElement.style.borderRadius = newRadiusImg + "px";

}
//Alt (nhập chuỗi): khi thay đổi giá trị → thay đổi thuộc tính alt của ảnh.
const changeAlt = () => {
    let newAlt = document.getElementById('Alt').value
    let oldAlt = document.getElementById('img')
    oldAlt.alt = newAlt
}

//Bài 2: nhập vào ô input và bấm nút “Tạo công việc” → Thêm 1 công việc mới vào cuối danh sách với nội dung vừa nhập từ ô input.
const todoList = () => {
    var li = document.createElement("li");
    let todoValue = document.getElementById('todoInput').value
    var t = document.createTextNode(todoValue);
    li.appendChild(t);
    if(todoValue == ''){
        alert('bạn chưa nhập to do list, mời nhập')
    }
    else{
        
        document.getElementById("list").appendChild(li);
    }
    
}


//Bài 3: Xóa row
const createTable = () => {
    var table = document.getElementById("table");
    var numRowsToAdd = 4
    for (var i = 0; i < numRowsToAdd; i++) {
        var newRow = table.insertRow(-1)
        var idCell = newRow.insertCell(0)
        var nameCell = newRow.insertCell(1)
        var addressCell = newRow.insertCell(2)
        var deleteCell = newRow.insertCell(3)
        idCell.innerHTML = "ID " + (i + 1)
        nameCell.innerHTML = "Name " + (i + 1)
        addressCell.innerHTML = "Address " + (i + 1)
        deleteCell.innerHTML = '<input type="button" value="Xóa" onclick="btnDelete(this)">';
    }
}
const btnDelete = (button) => {
    var row = button.parentNode.parentNode
    var table = row.parentNode
    table.removeChild(row)
}

//Bài 4:
const validatePass = (pass) => {
    const regexPass = /^.{6,}$/
    return regexPass.test(pass)
}
const validateEmail = (email) => {
	const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regexEmail.test(email);
};

const Validate = () => {
    let checkEmail = document.getElementById('email').value
    let checkPass = document.getElementById('pass').value
    let checkName = document.getElementById('name').value
    if(checkName.length == ''){
        alert("Bạn chưa nhập tên")
    }
    else if(validateEmail(checkEmail) == false){
        alert("mail bạn nhập chưa đúng định dạng")
    }
    else if(validatePass(checkPass) == false){
        alert('Bạn hãy nhập Pass trên 6 ký tự')
    }
    else{
        alert("Đăng ký thành công")
    }
}