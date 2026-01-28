//creation of array
// let names = ["navi","harshi",78,8,true]
// console.log(names);
 //constructor mode of creating an array 
// let names2 = new Array('venu','raju',78)
// console.log(names2);

// //how to access
// let names1=['navi','rani','ranu']
// console.log(names1[0]);
// console.log(names1[1]);
// console.log(names1[2]);

//how to modify array 
// let names=['navi','harshi','veda','venu','raju','sai']
// names[1]='naveen'   //the second element will be modified
// console.log(names);

// //to add an element at last 
// let names1=['navi','harshi','veda','venu','raju','sai']
// names1.push('ravi')   
// console.log(names1);

//to delete a element at last
// let names2=['navi','harshi','veda','venu','raju','sai']
// names2.pop ()
// console.log(names2);

//to add two arrays 
// const  males =['raju','venu','naveen','sai']
// const  females=['veda','rani','navi','smily']
// const names=males.concat(females)  //names = males+females 
// console.log(names);

//to delete an element
// const names =['raju','rani','venu','rani'] 
// //delete names[2]
//        //(or)
// names[2]=undefined
// console.log(names);

// to read array
// const names= ['navi','veda','rani','raju']
// console.log(names[2]);

//using for loop
// const names=['navi','rani','naveen','smily','happy']
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);       
// }

//another way of for loop
// const names=['navi','rani','naveen','smily','happy']
// for(let index in names ){
//     console.log(index);  //it will print the index nos 
//     console.log(names[index]); //it will print the values

// }
//another way
// const names=['navi','rani','naveen','smily','happy']
// for(let name of names){
//     console.log(names);
    
// }

//to print both values and their index 
// const names=['navi','rani','naveen','smily','happy']
// for (let[name,index]of names.entries()){
//     console.log(name+" "+index);
    
// }

//function to acces array
// const names=['navi','rani','naveen','smily','happy']
// names.forEach(myname) //call back function 
// function myname(name,index,array){
//     console.log(index+" "+name); 
// }

//alter array
//map() method
// const names=['navi','rani','naveen','smily','happy']
// //using map method to add asuffix to the eelments 
// const names2 = names.map((name)=>{
//     return name +="GVS"
// })
// console.log(names2);

// //to check age major or minor
// let ages =[3,6,13,19,34,56]
// let majororminor=ages.map((age)=>{
//     if(age<=18){
//         return "minor"
//     }else{
//         return"major"
//     }
// })
// console.log(ages);
// console.log(majororminor);

// //filter() method
// let ages = [3,5,13,17,19,45,87,99]
// let majors = ages.filter((age)=>{
//     if(age>=18){
//         return age
//      }
// })
// console.log(majors);

// //some() method 
// let ages2 = [3,5,13,17,19,45,87,99]
// let anyminor = ages2.some((age)=>{
//     return age <=18
// })
// console.log(anyminor);

// //every()method
// let ages3= [3,5,13,17,19,45,87,99]
// let allminor = ages3.every((age)=>{
//     return age <=18
// })
// console.log(allminor);

//to search in array 
//to search index we usse indexOf()
// const names=['navi','rani','naveen','smily','happy']
// let index=names.indexOf("smily")
// console.log(index);

// //to find a particular elmt available or not 
// //includes()
// let isavailable=names.includes("veda")
// console.log(isavailable);

//find()
//to find an element which starts with v 
const names =['venu','navi','raj','veda']
let result =names.find((name)=>{
    if(name[0]=='v'){
        return name 
    }
})
console.log(result);

//findIndex()
const names1 =['venu','navi','raj','veda']
let result1 =names1.findIndex((name)=>{
    if(name[0]=='v'){
        return name 
    }
})
console.log(result1);




















