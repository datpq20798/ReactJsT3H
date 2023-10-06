// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
// let arr1 = [1,2,4,5,6]
// let arr2 = [1, 6, 8, 9, 0]
// let newArr = arr1.filter((i) => arr2.includes(i))
// console.log(newArr)

// Bài 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// let arr = [1,54,6,7]
// let newArr = arr.map((i) => i + 5)
// console.log(newArr)

// Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
// let m = [1,2,4,5,6,7]
// let n = [3,5,675,8,96]
// let value = [1, 8,10,96,7]
// let newArr = [...m,...n].filter((a) => !value.includes(a))
// console.log(newArr)

// Bài 4: Cho array 1 như sau:
 let players = [
		{ id: 11, name: 'Messi', age: 33 },
		{ id: 12, name: 'Ronaldo', age: 34 },      
		{ id: 13, name: 'Young', age: 35 },        
		{ id: 14, name: 'Mane', age: 21 },          
		{ id: 15, name: 'Salah', age: 24 },
	]
// 							Hãy chuyển đổi nó về array có dạng sau: 
// playersModified = 
// 		{ 
// 			11: {id: 11, name: "Messi", age: 33},
// 			12: {id: 12, name: "Ronaldo", age: 34},
// 			13: {id: 13, name: "Young", age: 35},
// 			14: {id: 14, name: "Mane", age: 21},
// 			15: {id: 15, name: "Salah", age: 24}
// 		}

//   const playersModified = players.reduce((a, b) => {
//     const {id, ...players } = b;
//     players.id = id
//     console.log(players)
//     a[id] = players;
//     return t;
//   }, {});
//   console.log(playersModified);


import {SUM, SORT, SUM2, SUMODD, max2, countPerfectSquare} from "./helpers.js"

SUM()
SORT()
SUM2()
SUMODD()
max2()
countPerfectSquare()

