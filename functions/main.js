/*//function creation 
function navi(){
    console.log("iam function");
    
}

console.log("welcome");
let a =45
navi() //we can call the fun before creation also
function navi (){   //here the fun is not executed coz we dint call the fun
    console.log("iam fron navi  function");  
}
navi()   //hre we are calling the fun 
console.log("hello");
navi()
console.log(a);
navi()  //we can call fun multiple times 
*/

/*//example
function navi(){
   let a = 45
   let b = 43
   console.log(a+b);
}
navi()    //88

//fun with arguments 
function navi(a,b,...c){
    console.log("iam from navi function");
    console.log(arguments); //78,89,456,78,56,89
    console.log(a); //78
    console.log(b); //89
    console.log(c); //456,78,56,89
}
navi(78,89,456,78,56,89) 
  
//if we not pass any values it will give undefined 
function navi(a=5){  //we can aiso assign values from here
    console.log("iam from navi function");
    console.log(arguments);
    console.log(a);  //undefined   
}
navi()   //fun calling */
/*
//return type
function navi( ){
    return 78
    
}
let a= navi()
console.log(a);


 //calling fun using call method
 function venu(){
    console.log("iam fron venu");
    console.log(arguments);
    console.log(this);  
 }
 venu (45,67,78) // this values are stored in arguments 
 venu.call({"name":"navi","email":"navi@123gmail.com"})  //by call method the values are stored in this variable 
*/
//calling fun using constructor mode
// function venu()
// {
//   this.phone ="67676767"
// }
// let v =new venu() //default it will return this object 
// console.log(v); 



//ways of calling a function 
//general way
// function person (name , email, phone ){
//     this.name= name
//     this.email=email
//     this.phone = phone 
//    return this
// }
// let p=person ('venu','venu@gmail.com','9999')
// console.log(p); 

//  //constructor method 
// function person2 (name , email, phone ){
//     this.name= name
//     this.email=email
//     this.phone = phone 
// }
// let p2= new person ('venu','venu@gmail.com','9999')
// console.log(p2);

// //call method
// function person3 (name , email, phone ){
//         return this;
// }
// let p3 = person.call({"name":"venu","email":"venu@gmail.com","phone":"998989"})
// console.log(p3);

//example to use multiple persons details 
// function person (name , email, phone ){
//     this.name= name
//     this.email=email
//     this.phone = phone 
// }
// let p1 = new person('venu','venu2gmail.com','98654428')
// let p2 = new person ('navi','navi@gmail.com','89987577')
// let p3 = new person ('harshi','harshi@gmail.com','8767568')
// console.log(p1);
// console.log(p2);
// console.log(p3);

//same example without constructor
// function person (name , email, phone ){
//     let p ={}   // generally here we have to create object manaually
//     p.name= name
//     p.email=email
//     p.phone = phone 
//     return p
// }
// let p1 = new person('venu','venu2gmail.com','98654428')
// let p2 = new person ('navi','navi@gmail.com','89987577')
// let p3 = new person ('harshi','harshi@gmail.com','8767568')
// console.log(p1);
// console.log(p2);
// console.log(p3);

//same example with call method 
// function person(){
//     return this 
// }
// let p1 = person.call({"name":"venu","email":"venu@gmail.com","phone":"88766777"})
// let p2 = person.call({"name":"navi","email":"navi@gmail.com","phone":"88766777"})
// let p3 = person.call({"name":"uday","email":"uday@gmail.com","phone":"88766777"})
// console.log(p1);
// console.log(p2);
// console.log(p3);


//annanomus function 
//we cannot acces this fun before declaration 
let navi= function(){  //function assigning to some other varaiable 
    console.log("iam navi");   
}
navi()  //to acces we acces by the created varaiable 


//example 
let person = function (name , email, phone ){
   this .name= name 
   this. email= email
   this. phone = phone 
   return this 
}
let p = person ('navi','navi@gnail.com','88766666678')
console.log(p);












