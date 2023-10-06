
const showDetailStudent = () => {
        const dataStudent = JSON.parse(localStorage.getItem('listStudent'))
        const ID = JSON.parse(localStorage.getItem('ID'))
        // console.log(ID)
        // console.log(dataStudent)
        const getDetailStudent = dataStudent.find((student) => student.id === ID)
        document.getElementById('id').value = getDetailStudent.id
        document.getElementById('name').value = getDetailStudent.name
        document.getElementById('age').value = getDetailStudent.age
        document.getElementById('gender').value = getDetailStudent.gender
        document.getElementById('point').value = getDetailStudent.point
}
showDetailStudent()

