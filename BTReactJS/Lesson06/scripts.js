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
let a = 0; //số lần đoán
let correct = Math.floor(Math.random() * 5) + 1;
do{
    let answer = parseInt(prompt("Mời bạn nhập số: "));
    a ++;
    if(answer === correct){
        console.log("Đoán đúng");
        break;
    }
    else if(a >= 5){
        console.log("Bạn đã thua cuộc vì nhập quá 5 lần");
        break;
    }
    else
    {
        console.log("Đoán sai");
    }
}
while(true)