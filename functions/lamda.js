// //named function 
// function navi(){
//     console.log("iam navi");   
// }
// navi()

// //annonamous function 
// let sai= function (){
//     console.log("iam sai");   
// }
// sai()

// //lamda expression 
// let venu =()=>{
//     console.log("iam venu");
// }
// venu()

// annanomous example 
// let raju = function (a,b){
//     this .name = "navi"
//     console.log(arguments);  //{0:78,1:89}
//     console.log(this);  //object details+our {"name:"navi}
//     console.log("iam raju");
//     return "helo"    
// }
// raju(78,89)


//lamda with argumets and return type 
// let sai1=(a,b)=>{
//      this .name = "navi"
//     console.log(arguments); //object deatils our arguments will not attach to it 
//     console.log(this);  //{"name:"navi"}
//     console.log("iam sai");
//     return "helo"    
// }
// sai1(89,78)

//if we pass one argument no need of brackets 
// let navi2 = a =>{
//     console.log("hello");
//     console.log(a);   
// }
// navi2(8)

//we can also write if we have only one return type to print 
// let sai2=() =>"45";
// let s=sai2()
// console.log(s)

//we cannot call th lamda expressions in constructoe mode 
//calling in .call method 
// let person = ()=>{
//     this.name= "navitha"
//     this.email="navi2gmail.com"
//     this.phone = "8897557509"
//     return this
// }
// let p = person.call({"gender":"female"})  //in this lamda expe this starement is not going to print 
// console.log(p);



//call back function
function venu (abc){
    console.log("iam venu");
    abc()  
}
function raj(){   //this is call back function  
    console.log("iam raj"); 
}
venu(raj)

//calculator example 
// let a= 40
// let b= 6
// function calculator(display){
//     let sum =a +b
//     let sub = a-b 
//     let mul = a*b 
//     let div = a/b
//     display (sum , sub , mul,div )
// }
// function display (sum , sub, mul , div){
//     console.log("sum :" +sum);
//      console.log("sub :" +sub);
//       console.log("mul :" +mul);
//        console.log("div :" +div);  
// }
// calculator(display)

//example with annaonomus function 
let a= 40
let b= 6
let calculator =function(display){
    let sum =a +b
    let sub = a-b 
    let mul = a*b 
    let div = a/b
    display (sum , sub , mul,div )
}
let display =function (sum , sub, mul , div){
    console.log("sum :" +sum);
     console.log("sub :" +sub);
      console.log("mul :" +mul);
       console.log("div :" +div);  
}
calculator(display)

//lamda expression example 
// let a= 40
// let b= 6
// let calculator=(display)=>{
//     let sum =a +b
//     let sub = a-b 
//     let mul = a*b 
//     let div = a/b
//     display (sum , sub , mul,div )
// }
// let  display =(sum , sub, mul , div)=>{
//     console.log("sum :" +sum);
//      console.log("sub :" +sub);
//       console.log("mul :" +mul);
//        console.log("div :" +div);  
// }
// calculator(display)

