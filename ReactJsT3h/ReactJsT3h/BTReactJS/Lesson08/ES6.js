let a = [1, 2, 3]
let b = [1,2,3,4]
let c = [1,2,3,4,5]
let d = [1,2,3,4,5,6]
let e = [3,5,7,10,20,30,40]


sum = (...listnumber) => {
    console.log(listnumber)
    let sumIndex = listnumber.reduce((a, b)=> a + b,0)
    console.log(sumIndex)
}
sum(1,2,3,4)
// let sum = a.reduce((a, b)=> a + b,0)
// console.log(sum)

logger = (a,b,c,d) => {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
logger(1)