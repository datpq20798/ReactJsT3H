 //THỰC HÀNH
// //1. Khai báo 1 mảng gồm các số bất kỳ. 
// let arr = [30, 27, 6, 13, 19, 50, 2, 8]
// //Tính tích của các phần tử trong mảng đó.
// cách 1:
// let tich = 1;
// for(let i = 0; i < arr.length; i++){
//     tich  *= arr[i]
// }
// console.log(tich)

// cách 2: 
// console.log(arr.reduce((a, b) => a * b, 1))

// //Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// console.log(arr.filter((value) => value % 2 === 0))
// let a = arr.filter((value) => value % 2 === 0)
// console.log(Math.min.apply(Math, a))

// //Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// console.log(arr.filter((value) => value % 3 === 0))
// let a = arr.filter((value) => value % 3 === 0)
// console.log(Math.max.apply(Math, a))

// //Tính giá trị trung bình của mảng.
// cách 1:
// let avg = 0;
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     avg = sum / arr.length
// }
// console.log(avg)

// cách 2:
// let a =  arr.reduce((a, b) => a + b, 0)
// console.log(a)
// let b = a / arr.length
// console.log(b)


// //Lọc ra các số nguyên tố trong mảng. (bài này mình tham khảo)let




// let primeNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     if (number <= 1) {
//         continue; 
//     }
//     let isPrime = true;
//     for (let j = 2; j < number; j++) {
//         if (number % j === 0) {
//             isPrime = false;
//             break; 
//         }
//     }
//     if (isPrime) {
//         primeNumbers.push(number);
//     }
// }
// console.log("Các số nguyên tố trong mảng:", primeNumbers);

// //Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let a = false;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 10){
//         a = true;
//         break
//     }
// }
// if(a){
//     console.log(true) //có số nhỏ hơn 10 thì trả về true
// }
// else{
//     console.log(false) // không thì là faile
// }

// //Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 20){
//         arr[i] = true
//         // console.log("số " + arr[i] + " lớn hơn 20")
//     }
//     else{
//         arr[i] = false
//         // console.log("số " + arr[i] + " nhỏ hơn 20")
//     }
// }
// console.log(arr)

// //Nhập vào số n cho đến khi n là 1 số trong mảng s.
// console.log(arr)
// while(true){
//     let n = parseInt(prompt("Nhập n"))
//     if(arr.includes(n)){
//         console.log("Nhập đúng")
//         break
//     }
// }


// //Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
// let swapped
// do {
//     swapped = false;
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] > arr[i + 1]){
//             let temp = arr[i];
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//             swapped = true;
//         }
//     }
// } while (swapped);
// console.log(arr)



    // 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// let arrString = ['a1231hjfs','b412i912','c213145fa','d123a','oooo']

// - Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let minLength = arrString[0].length;
// let shortString = arrString[0];
// for(let i  = 0; i < arrString.length; i++){
//     if(arrString[i].length < minLength){
//         minLength = arrString[i].length
//         shortString = arrString[i]
//     }
// }
// console.log(shortString)


// - Tìm những chuỗi trong mảng chỉ chứa ký tự số . (dùng regex)
// let regex = /^[a-zA-Z]+$/;
// let NewarrString = arrString.filter((a) => regex.test(a));
// console.log("Chuỗi chỉ chứa ký tự chữ:", NewarrString);

// - Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// let newarrString = arrString.map((a) => a.substring(0,3))
// console.log(newarrString)

// - Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// let newarrString = arrString.join("-")
// console.log(newarrString)


// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
let arr1 = []
let arr2 = []
let count1 = 0
let count2 = 0
do {
    count1 ++;
    let n = parseInt(prompt("Nhập n cho d1"))
    arr1.push(n)
} while (count1 < 4);
do {
    count2 ++;
    let m = parseInt(prompt("Nhập m cho d2"))
    arr2.push(m)
} while (count2 < 4);

// ý 3 thì commemt code này lại
let d1 = arr1.toString()
let d2 = arr2.toString()
console.log(d1)
console.log(d2)

// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let a = d1.split(',')
let b = d2.split(',')
console.log(a)
console.log(b)
let c = true;
for(let i = 0; i < a.length; i ++){
    let value1 = a[i];
    let d = false
    for(let j = 0; j < b.length; j ++){
        if (value1 === b[j]) {
            d = true;
            break
        }
    }
    if(!d){
        c = false
        break
    }
}
if(c){
    console.log(true);
  } else {
    console.log(false);
  }


// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sum = arr1.reduce((a, b) => a + b, 0)
// console.log(sum)
// let check = false
// for(let j = 0; j < arr2.length; j++){
//     if(arr2[j] % sum === 0){
//         check = true
//         break
//     }
// }
// if(check){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// let a = []
// let value1 = arr2.filter((x) => x % 2 === 0)
// let b = a.concat(value1)
// let value2 = arr1.filter((x) => x % 2 === 0)
// let newArr = b.concat(value2)
// console.log(newArr)


// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).


// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5, 8 , 9, 16],
//     [2, 7, 1, 9],
//     [5, 6, 8, 12],
//     [10, 2, 1, 8],
//     [20, 4, 9, 1]
// ]
// console.log(growth)
// Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// let avg = [];
// for(let i = 0; i < growth.length; i++){
//     let c = growth[i].reduce((a, b) => a + b)
//     avg.push([c / growth[i].length])
    
// }
// console.log(avg)


// Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// let avg = [];
// for(let i = 0; i < growth.length; i++){
//     let c = growth[i].reduce((a, b) => a + b)
//     avg.push([c / growth[i].length])
    
// }
// let maxValue = Math.min.apply(Math, avg)
// console.log(maxValue)


// Tìm giá trị tăng trưởng theo quý lớn nhất. (chưa hiểu đề bài)
// let growth2 = [];
// for(let j = 0; j < growth[0].length; j++){
//     let max = 0;
//     for(let i = 0; i < growth.length; i ++){
//         let maxValue = growth[i][j] - growth[i - 1][j];
//         if(maxValue > max){
//             max = maxValue
//         }
//         growth2.push(max)
//     }
// }
// let maxGrowth = Math.max(...growth2)
// console.log(maxGrowth)

// Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).

