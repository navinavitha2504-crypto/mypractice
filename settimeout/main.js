// setTimeout(()=>{
//     console.log(" i am inside");
    
// },3000) //2s
// console.log(" i am outside");


// function navi(){
//     console.log(" i am navi");   
// }
// function raj(){
//     console.log(" i am raj");  
// }
// setTimeout(raj,2000)
// let a=5
// let b=5
// let c=a+b
// console.log(" c value is "+c);
// navi()


// //cleartimeout
// function navi(){
//     console.log(" i am navi");   
// }
// let mytimeout=setTimeout(()=>{
//     console.log(" i am raj");
    
// },2000)
// clearTimeout(mytimeout)
// let a=5
// let b=5
// let c=a+b
// console.log(" c value is "+c);
// navi()


// //setinterval

// setInterval(()=>{
//     console.log("i am navi");
    
// },1000)
// let a=5
// let b=5
// let c=a+b
// console.log(" c value is"+c);


// //to stop set interval
// let myset=setInterval(()=>{
//     console.log("i am navi");
    
// },2000)
// clearInterval(myset)
// let a=5
// let b=5
// let c=a+b
// console.log(" c value is"+c);


// let myset=setInterval(() => {
//     console.log("i am navi");
    
    
// }, 1000);

// setTimeout(() => {
//     clearInterval(myset)
    
// },6000);
// console.log(" i am naveen"); 


let time=1
let myset= setInterval(() => {
    console.log(time);
    time++
}, 1000);
setTimeout(() => {
    clearInterval(myset)
    
}, 60000);