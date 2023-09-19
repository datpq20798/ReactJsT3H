export {SUM, SORT, SUM2, SUMODD, max2, countPerfectSquare}
// *Các bài sau sẽ viết trong filee helpers.js dưới dạng module và import trong file main.js để sử dụng
// Bài 5: Cho mảng A = [1,5,3,8,10]
let A = [1,5,3,8,10]
// 	+Viết chương trình JS tính giá trị trung bình của mảng.
let SUM = () => {
    let sum = 0;
    A.reduce((a, b) => a + b, 0)
    let avg = sum / A.length;
    console.log(avg)
}




// 	+Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
// 		Input: A = [1,5,3,8,10]
// 		Output: A = [10, 8, 5, 3, 1]
let B = [1,5,3,8,10]

let SORT = () => {
    let newB = B.sort((a, b) => b - a)
    console.log(newB)
}


// 	+Tính tổng các số dương trong mảng
let SUM2 = () => {
    let sum2 =  0;
for(let i in B){
    if(B[i] > 0){
        sum2 += B[i] 
    }
}
console.log(sum2)
}


// 	+Tính tổng các số lẻ trong mảng
let SUMODD = () => {
    let odd = B.filter((a) => a % 2 !== 0)
    let sumOdd = odd.reduce((a, b) => a + b,0)
    console.log(sumOdd)
}


// 	+Tìm số lớn thứ 2 trong mảng
// 		Output: 8
let max2 = () => {
    console.log(newB[1])
}


// 	+Đếm các số chính phương có trong mảng

const countPerfectSquare = (num) => {
    return Math.sqrt(num) % 1 === 0;
}
const PerfectSquare = B.filter((a) => countPerfectSquare(a))
console.log(PerfectSquare.length)
