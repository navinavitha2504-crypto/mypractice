////case 1 
// let age=20
// try {
//     console.log("1km completed");
//     console.log("2km completed");
//     if (age<18){
//         throw new Error("age is below 18");  
//     }
//     console.log("3km completed");
//     console.log("4km completed");
//     console.log("5km completed");

// }
// catch(err){
//     console.log(err.message);
//     console.log(err.name);
// }
// finally{
//     console.log("they reached to destination");
    
// }
// console.log("this is code outside the try block");


// //case 2
// let age=16
// try {
//     console.log("1km completed");
//     console.log("2km completed");
//     if (age<18){
//         throw new Error("age is below 18");  
//     }
//     console.log("3km completed");
//     console.log("4km completed");
//     console.log("5km completed");

// }
// catch(err){
//     console.log(err.message);
//     console.log(err.name);
// }
// finally{
//     console.log("they reached to destination");
    
// }
// console.log("this is code outside the try block");


// //case 3
// let age=20
// try {
//     console.log("1km completed");
//     console.log("2km completed");
//     if (age<18){
//         throw new Error("age is below 18");  
//     }
//     console.log("3km completed");
//     let newage=a+age
//     console.log("4km completed");
//     console.log("5km completed");

// }
// catch(err){
//     console.log(err.message);
//     console.log(err.name);
// }
// finally{
//     console.log("they reached to destination");
    
// }
// console.log("this is code outside the try block");


//how to throw exception for multiple
class Minorerror extends Error{
    constructor(message,errorcode,suggestion){
        super(message)
        this.name="minor error"
        this.errorcode=errorcode
        this.suggestion=suggestion
    }

}

let age=20
try{
    console.log("1km completed")
    console.log("2km completed")
    if (age<18){
        throw new Minorerror ("less than 18 ",402,"come after 18")
    }  
    console.log("3km completed");
    let newage =a+age
    console.log("4km completed"); 
}
catch(err){
    if(err instanceof Minorerror){
        console.log(err.message);
        console.log(err.name);
        console.log(err.errorcode);
        console.log(err.suggestion);
    }else if(err instanceof ReferenceError){
        console.log(err.message);
        console.log(err.name);
    }

}
finally{
    console.log("reached the destination");
    
}
console.log("out of the box");