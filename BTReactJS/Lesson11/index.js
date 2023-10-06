// const listStudent = [
// 	{
// 		id: 1,
// 		name: 'Nguyễn Văn A',
// 		age: 15,
// 		gender: 'boy',
// 		point: 10,
// 	},
	// {
	// 	id: 2,
	// 	name: 'Trần Thị B',
	// 	age: 15,
	// 	gender: 'girl',
	// 	point: 5,
	// },
// 	{
// 		id: 3,
// 		name: 'Binz',
// 		age: 15,
// 		gender: 'girl',
// 		point: 7,
// 	},
// 	{
// 		id: 4,
// 		name: 'ABC',
// 		age: 15,
// 		gender: 'girl',
// 		point: 10,
// 	},
// ];

let listStudent = [];
if (localStorage.getItem('listStudent') !== null) {
	listStudent = JSON.parse(localStorage.getItem('listStudent'));
}

//Show dữ liệu sinh viên
const showStudent = (data) =>{
	let stringHTML = '';
	for (let i = 0; i < data.length; i++) {
		stringHTML += `
		<tr>
			<td scope="col">${data[i].id}</td>
			<td scope="col">${data[i].name}</td>
			<td scope="col">${data[i].age}</td>
			<td scope="col">${data[i].gender}</td>
			<td scope="col">${data[i].point}</td>
			<td scope="col">
				<div>
					<button class="btn btn-success" style="margin: 0 4px" data-bs-toggle="modal" data-bs-target="#updateStudent" data-id=${data[i].id}>
						Update
					</button>
					<button onclick="deleteRow(${data[i].id})" class="btn btn-danger" style="margin: 0 4px">
						Delete
					</button>
					<button onclick="detail(${data[i].id})" id="detailStudent" class="btn btn btn-info" style="margin: 0 4px">
						Detail
					</button>
				</div>
			</td>
		</tr>
		`;
	}
	document.getElementById('data-student').innerHTML = stringHTML;
}
showStudent(listStudent)

//Clear ô Input
const clearInput = () => {
	document.getElementById('id').value = ''
	document.getElementById('name').value = ''
	document.getElementById('age').value = ''
	document.getElementById('gender').value = ''
	document.getElementById('point').value = ''
	document.getElementById('point').value = ''
}

//Add sinh viên
const addStudent = () => {
	let id = parseInt(document.getElementById('id').value)
	let name = document.getElementById('name').value
	let age = parseInt(document.getElementById('age').value)
	let gender = document.getElementById('gender').value
	let point = parseInt(document.getElementById('point').value)
	let addListStudent = {id, name, age, gender, point}
	if(id == '' || name == '' || age == '' || gender == '' || point == ''){
		alert('bạn chưa nhập đủ thông tin để add')
	}
	else{
		listStudent.push(addListStudent)
		clearInput()
		showPage(1)
	}
	getInfoStudent()
	localStorage.setItem('listStudent', JSON.stringify(listStudent))
}
//Xoá dòng theo id
const deleteRow = (id) =>{
	const index = listStudent.findIndex((student) => student.id == id)
	console.log(index)
	listStudent.splice(index, 1)
	showPage(1)
	getInfoStudent()
	localStorage.setItem('listStudent', JSON.stringify(listStudent))
}

//Lấy thông tin sinh viên vào model box
const getInfoStudent = () => {
	const updateButtons = document.querySelectorAll('.btn-success');
    updateButtons.forEach((button) => {
	button.addEventListener('click', () => {
	// console.log(button.getAttribute('data-id'))
    const student = listStudent.find((e) => e.id === Number(button.getAttribute('data-id')));
	console.log(document.getElementById('id2'))
	
    document.getElementById('id2').value = student.id
    document.getElementById('name2').value = student.name
    document.getElementById('age2').value = student.age
    document.getElementById('gender2').value = student.gender
    document.getElementById('point2').value = student.point

  })
})
}
getInfoStudent()

//Update theo id
const update = () =>{
	let id = parseInt(document.getElementById('id2').value)
	let name = document.getElementById('name2').value
	let age = parseInt(document.getElementById('age2').value)
	let gender = document.getElementById('gender2').value
	let point = parseInt(document.getElementById('point2').value)
	const studentToUpdate = listStudent.find(student => student.id === id)
	if (studentToUpdate) {
		// Cập nhật thông tin của sinh viên
		studentToUpdate.name = name;
		studentToUpdate.age = age;
		studentToUpdate.gender = gender;
		studentToUpdate.point = point;
	// let addListStudent = {id, name, age, gender, point}
	showPage(1)
	// showStudent(listStudent)
	localStorage.setItem('listStudent', JSON.stringify(listStudent))
	getInfoStudent()
	}
}

//Search
const searchName = () => {
	const keyword = document.getElementById('search').value;
	const dataSearch = listStudent.filter(
		(student) =>
			student.id == keyword ||
			student.age == keyword ||
			student.name.includes(keyword) ||
			student.point == keyword ||
			student.gender.toLowerCase() == keyword.toLowerCase()
	);
	showStudent(dataSearch)
	getInfoStudent()
	
}

//Detail sinh viên
const detail = (id) => {
	const index = listStudent.find((student) => student.id == id)
	localStorage.setItem('ID', index.id)
	console.log(index.id)
	window.location.href='./detail.html'
	
}

const tbody = document.querySelector('tbody')
const paginationContainer = document.getElementById('pagination')
const itemsPerPage = 2
const showPage = (page) => {
	tbody.innerHTML = ''
	
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
	for (let i = startIndex; i < endIndex; i++) {
        if (i >= listStudent.length) {
            break
        }
        const data = listStudent
		
        const row = document.createElement('tr')
        row.innerHTML = `
		
		<td scope="col">${data[i].id}</td>
			<td scope="col">${data[i].name}</td>
			<td scope="col">${data[i].age}</td>
			<td scope="col">${data[i].gender}</td>
			<td scope="col">${data[i].point}</td>
			<td scope="col">
				<div>
					<button class="btn btn-success" style="margin: 0 4px" data-bs-toggle="modal" data-bs-target="#updateStudent" data-id=${data[i].id}>
						Update
					</button>
					<button onclick="deleteRow(${data[i].id})" class="btn btn-danger" style="margin: 0 4px">
						Delete
					</button>
					<button onclick="detail(${data[i].id})" id="detailStudent" class="btn btn btn-info" style="margin: 0 4px">
						Detail
					</button>
				</div>
			</td>
		
		`
        tbody.appendChild(row);
		
		
    }
	renderPagination()
	getInfoStudent()
	
}
renderPagination = () =>{
	paginationContainer.innerHTML = ''
	const totalPages = Math.ceil(listStudent.length / itemsPerPage)
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement('li');
        pageButton.innerHTML = `<li class="page-item"><button class="page-link">${page}</button></li>`
        pageButton.addEventListener('click', () => showPage(page))
        paginationContainer.appendChild(pageButton)
		document.getElementById
    }
}
// Mặc định hiển thị trang 1 khi trang web được tải
showPage(1);






