//creating json object
// let person = {
//     'name': 'navi',
//     "email" : 'navi2gmail.com',
//     'phone' : '8897557509'
// }
// console.log(typeof person);
// console.log(person);

//creating using function 
// let person1=function(name,email,phone){
//     this.name = name 
//     this.email = email
//     this.phone = phone 
// }
// let p =new person1('navi','navi@gmail.com','8897666')
// let p1 = new person1('naveen','naveen2gmail.com','876553537')
// console.log(p);
// console.log(p1);

//another way
// let person = function(name , email , phone ){
//     let p={}
//     p.name = name 
//     p.email= email
//     p.phone = phone
//     return p
// }
// let p=person('venu','venu@gmail.com','77948368')
// console.log(p);

//access json 
// let person = {
//      name: 'navi',
//      email : 'navi2gmail.com',
//      phone : '8897557509'
//  }
//  console.log(person.name);
//  console.log(person['email']);
    

//  //accesing using for loop 
//  let person1 = {
//      'name': 'navi',
//       "email" : 'navi2gmail.com',
//       'phone' : '8897557509'
//  }
//  for (let [Key,value] of Object.entries(person1)){
//       console.log(Key+" "+value);
      
//  }

 //modify json obj
//   let person = {
//      'name': 'navi',
//       "email" : 'navi2gmail.com',
//       'phone' : '8897557509'
//  }
//  person.name="naveen"
//  person['email']='naveen@gmail.com'
//  person.gender= 'male'   //to add to object 
//  console.log(person);

 //delete keys from json object
//  let person = {
//      'name': 'navi',
//       "email" : 'navi2gmail.com',
//       'phone' : '8897557509',
//       'gender' :'female'
//  }
//  delete person.name
//  delete person['email']
//  console.log(person);

 //to convert jon into string format
//  let person = {
//      'name': 'navi',
//       "email" : 'navi2gmail.com',
//       'phone' : '8897557509'
//  }
//  console.log(person);
//  let p1= JSON.stringify(person)
//  console.log(typeof p1);
//  console.log(p1);
// // to convert string to json 
//  let p2 = JSON.parse(p1)
// console.log(typeof p2);
// console.log(p2);

//a complex example 
//we can store any datatype 
let person= {
    name : "navitha",
    email : "navi@gmail.com",
    phone : ["8897557509", "970158757"],
    age : 21,
    status : true,
    address : {     //obj within obj
        street: "rajashekar colony",
        state : "telangana",
        city : "hyderabad"
    },
//to find minor or major 
"ismajororminor":function(){
    if(this.age>18){
        return "major"
    }else{
        return "minor"
    }
}
}
console.log(person.phone[1]);
console.log(person['phone'][0]);
console.log(person.name);
console.log(person.address.city);
console.log(person['address']['state']);
console.log(person.ismajororminor());  //to print function 
 



 
 
 
  
 
 



