// 1. In ra dãy số từ 1 đến 500.
// for(let i = 1; i <= 500; i++)
// {
//     console.log(i)
// }
// =================================
// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for(let i = 1; i <= 300; i++)
// {
//     if(i % 2 === 0 && i % 3 === 0)
//     {
//         console.log(i)
//     }
// }
// =================================
// 3.Tính tổng các số chẵn trong đoạn [-30, 50]
// let sum = 0;
// for(let i = -30; i <= 50; i++)
// {
//     if(i % 2 === 0)
//     {
//         sum = sum + i;
//     }
// }
// console.log(sum)
// =================================
// 4. Nhập vào số n. Tính giai thừa của số n.
// let n = prompt("Nhập số n để tính giai thừa: ")
// let giaithua = 1;
// for (let i = 1; i <= n; i++){
//     giaithua = giaithua * i
// }
// console.log(giaithua);
// =================================
// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x. 
// let a = prompt("nhập vào số a");
// a = Number(a);
// console.log("số a là: " + a);
// let b = prompt("nhập vào số b");
// b = Number(b);
// console.log("số b là: "+  b);
// let x = prompt("nhập vào số x");
// x = Number(x);
// console.log("số x là: " + x)
// while(a > b){
//     console.log("Bạn phải nhập số a nhỏ hơn số b");
//     break;
// }
// while(x === 0){
//     console.log("x không thể bằng 0");
//     break;
// }
// let c = Number.MAX_SAFE_INTEGER;
// for(let i = a; i <= b; i++)
// {
//     if(i%x === 0 && i < c){
//         c = i;
//         console.log("số nhỏ nhất trong khoảng a và b chia hết cho x là: " + c);
//     }
// }
// =================================
// 6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau
// let n = prompt("Nhập n");
// n = Number(n);
// let kq = 0;
// if(n <= 2){
//     console.log("n phải >= 2");
// }
// else{
//     let i = 1;
//     while(i <= n){
//         kq +=  1/(i*(i+1))
//         i++
        
//     }
//     console.log(kq)
// }
// =================================
// 7. Nhập vào số n. Hãy in ra số ước của n.
// let n = prompt("nhập vào số n");
// n = Number(n);
// console.log("Ước của : " + n);

// for(let i = 1; i <=n; i++){
//     if(n % i == 0){
//         console.log(i)
//     }
// }
// =================================
// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// let n = prompt("nhập vào số n");
// n = Number(n);
// let flag = true;
// if(n < 2){
//     flag = false;
    
// }
// else{
//     for(let i = 2; i < n-1; i++){
//         if (n % i == 0){
//             flag = false;
//             break;
//         }
//     }
// }
// if(flag == true){
//     console.log("Là số nguyên tố");
// }
// else{
//     console.log("Không là số nguyên tố")
// }
// =================================
// 9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt("Nhập vào chuỗi s:")
// console.log(s)
// let l = prompt("Nhập vào chuỗi l:")
// l = Number(l);
// console.log(l)


// if(l < 0){
//     console.log("số l không hợp lệ");
// }
// while(s.length < l){
//     s = '0' + s
// }
// console.log(s)
// =================================
// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.
// let n = prompt("Nhập vào số n:")
// n = Number(n);
// console.log(n)
// let m = prompt("Nhập vào số m:")
// m = Number(m);
// console.log(m)

// if(m < 0 || n < 0){
//     console.log("m và n phải lớn hơn 0");
// }
// let a = n;
// let b = m;
// while(b!==0){
//     const temp = b;
//     b = a % b;
//     a = temp;
// }
// console.log(a)
// =================================
// 11. Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.
// let n = prompt("Nhập vào số n:")
// n = Number(n);
// console.log(n)
// let m = prompt("Nhập vào số m:")
// m = Number(m);
// console.log(m)

// if(m < 0 || n < 0){
//     console.log("m và n phải lớn hơn 0");
// }
// let a = n;
// let b = m;
// while(b!==0){
//     const temp = b;
//     b = a % b;
//     a = temp;
// }
// const c = (m*n)/a;
// console.log(c)
// =================================
// 12. trò chơi đoán số
// const maxAnswer = 5; //số lần nhập max là 5 trước khi thua
// let a = 0; //số lần đoán
// let correct = Math.floor(Math.random() * 5) + 1;
// while(true){
//     let answer = prompt("Mời bạn nhập số: ");
//     answer = Number(answer);
//     if(answer === correct){
//         console.log("random là: " + correct, "số bạn nhập là: " + answer)
//         console.log("Đoán đúng");
//         break;
//     }
//     else
//     {
//         a ++;
//         console.log("random là: " + correct, "số bạn nhập là: " + answer)
//         console.log("Đoán sai");
//         if (a >= maxAnswer){
//             console.log("Bạn đã thua cuộc vì nhập quá 5 lần");
//             break;
//         }
//     }
// }


// =================================
// 13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = prompt("Nhập số ");
// n = Number(n);
// if(n < 2 || n > 10){
//     console.log("2 <= n <= 10");
// }
// else{
//     let kq;
// for(let i = 1; i <= 10; i ++){
    
//     kq = n * i;
//     console.log(n + " x " + i + " = " + kq)
// }
// }

// =================================
// 14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// let a = prompt("Nhập số ");
// a = Number(a);
// if( a <= 2){
//     console.log("(a phải >= 2)");
// }
// else{
//     for(let i = 0; i < a; i++){
//         let row = ""
//         for(let j = 0; j < a; j++){
//             row += "*  "
//         }
//         console.log(row)
//     }
// }

// =================================
// 15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// let n = prompt("Nhập chiều dài ");
// n = Number(n);
// let m = prompt("Nhập chiều rộng ");
// m = Number(m);
// if(  n <= 2 || m <= 2){
//     console.log("(m và n phải >= 2)");
// }
// else{
//     let column = "";
//     for(let i = 0; i < n; i++){
//         let row = ""
//         for(let j = 0; j < m; j++){
//             row += "*  "
//         }
//         console.log(row)
        
//     }
    
// }

// =================================

// 16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// let a = prompt("Nhập số ");
// a = Number(a);
// if( a <= 2){
//     console.log("(a phải >= 2)");
// }
// else{
//     let row = ""
//     for(let i = 0; i < a; i++){
//         row += "*    "
//         console.log(row)
//     }
    
// }

// =================================
// 12. trò chơi đoán số (dùng do while)
// let a = 0; //số lần đoán
// let correct = Math.floor(Math.random() * 5) + 1;
// do{
//     let answer = parseInt(prompt("Mời bạn nhập số: "));
//     a ++;
//     if(answer === correct){
//         console.log("Đoán đúng");
//         break;
//     }
//     else
//     {
//         console.log("Đoán sai");
//     }
// }
// while(a <= 5)
// console.log("bạn đã nhập sai quá 5 lần")





                                         //Lecture 9.1: Array
                                         //kiểm tra bài cũ

// 1. Hãy in ra các số lẻ trong dãy số từ 100 về 1.
// for(let i = 100; i >= 1; i--){
//     if( i % 2 !== 0){
//         console.log(i)
//     }
// }

// 2. Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
// let a  = Math.floor(Math.random() * 6) + 5;
// console.log(a)
// let b = 0;
// let n;
// do{
//     b++;
//     n = parseInt(prompt("Nhập n"));
//     if(n === a){
//         console.log("số bạn nhập bằng số ngẫu nhiên")
//     }
// }
// while(n !== a)



                                             // Quizzes 




// 1. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// let arr = [3,4,9,15]
// console.log(arr)
// // - In ra phần tử có chỉ số 0 và 3 trong mảng.
// console.log(arr[0]);
// console.log(arr[3]);

// // - Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// let sum = arr[1] + arr[2];
// console.log(sum)
// // - Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// let temp = arr[1];
// arr[1] = arr[3];
// arr[3] = temp;
// console.log(arr);



// 2. Khai báo 1 mảng gồm các số bất kỳ.
// let arr2 = [1,4,6,9,13,20]
// console.log(arr2);

// // - Hãy in ra các số chẵn trong mảng đó.
// cách 1:
// for(let i = 0; i <= arr2.length; i++){
//     if(arr2[i] % 2 == 0){
//         console.log(arr2[i])
//     }
// }

// cách 2: nhanh vch :v
// console.log(arr2.filter((value) => value % 2 === 0))

// // - Hãy tính tổng các phần tử trong mảng.
// cách 1:
// let sum = 0;
// for(let j = 0; j < arr2.length; j++){
//     sum += arr2[j];
// }
// console.log(sum)

//cách 2: nhanh gọn :v 
// console.log(arr.reduce((a, b) => a + b, 0))


// // - Hãy tìm phần tử nhỏ nhất trong mảng.
// let snn = Math.min.apply(Math, arr2)
// console.log(snn)



// // 3. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// let arr3 = [];
// console.log(arr3)
// let n = parseInt(prompt("nhập n"));
// if(n > 0){
//     arr3.push(n);
// }
// console.log(arr3)

// // 4. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// let arr4 = [10,11]
// let n = parseInt(prompt("Nhập n > 2"))
// let a = 0;
// if(n  <=  2){
//     console.error("Nhập n > 2");
// }
// for(let i = 0; i < n - 2; i++)
// {
//     arr4.unshift(a)
// }
// console.log(arr4)

// // 5. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// let arr5 = [5,6,7,8,9,10,11]
// do{
//     arr5.pop();
// }
// while(arr5.length !== 1)
// console.log(arr5)

// 6. Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. 
// - In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s.
// - Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n.
// - Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.
// ==> Chưa hiểu đề bài lắm :v 



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
// let d1 = arr1.toString()
// let d2 = arr2.toString()
// console.log(d1)
// console.log(d2)

// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let a = d1.split(',')
// let b = d2.split(',')
// console.log(a)
// console.log(b)
// let c = true;
// for(let i = 0; i < a.length; i ++){
//     let value1 = a[i];
//     let d = false
//     for(let j = 0; j < b.length; j ++){
//         if (value1 === b[j]) {
//             d = true;
//             break
//         }
//     }
//     if(!d){
//         c = false
//         break
//     }
// }
// if(c){
//     console.log(true);
//   } else {
//     console.log(false);
//   }


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

