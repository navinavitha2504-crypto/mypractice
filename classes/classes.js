// class Demo{
//     constructor(){
//         console.log("iam navi");
//         }
//     }
// let t=new Demo()

//creating global data memebers
// class Demo{
//     a=45    //the dta above constructor are global data members
//      //we dont use let keyword here coz this will atach to this object
//     constructor(){
//         let a=7   //here we can use let 
//         console.log("iam navi");
//         console.log(this); 
//     }
// }
// new Demo()

// class Demo{
//     a=45
//     constructor(){
//         this.a=36  //to create within constructoe we use this.
//         let b=67
//         console.log("iam navi");
//         console.log(this);   //{ a:45,b:36}
//         console.log(b);  //67   
//     }
// }
// let d= new Demo()

//creating methods within calss
// class Demo{
//     a=90
//     name= "navi"
//     constructor(){
//         console.log("iam constructor");
//         //console.log(this); //from here we camn call the global values
        
//     }
//     venu(){  //method
//          let a=78
//          console.log("iam venu");
//          console.log(a);
//          console.log(this.a);       
//     }
// }
// let d =new Demo()
// console.log(d.a);   //like this also we can print the global values
// console.log(d.name);
// d.venu() //to call method

//creating multiple objects and modifing 
// class Demo{
//     a=78
//     name ="navi"
//     constructor(){
//         let a=78
//         console.log("iam constructor");
//         console.log(a);
        
//     }
//     venu(){
//         let a=56
//         console.log("iam venu");
//         console.log(a);
//     }
// }
// let d=new Demo()
// let d1 = new Demo()
// d.name="uday"      //modify only in d not in d1
// console.log(d.name);
// console.log(d1.name);
// d.venu()

//passing arguments to method
// class Demo{
//     a=56
//     name="navi"
//     constructor(){
//         let a=78
//         console.log(a);
        
//     }
//     venu(){
//         let a=67
//         console.log("iam a method");
//         console.log(arguments);
        
        
//     }
//     raju(){
//         console.log("iam raji");
        
//     }
// }
// let d= new Demo()
// let d2=new Demo()
// d.venu(78,89)
// d2.venu(99,"naveen")
// d.raju()

//to call methods with in class
// class Demo{
//     a=56
//     name="navi"
//     constructor(){
//         let a=78
//         console.log(a);
//         this.venu( 67) //calling venu method with arguments   
//     }
//     venu(){
//         let a=67
//         console.log("iam a method");
//         console.log(arguments);
//         this.raju()  //calling raju method within class 
//     }
//     raju(){
//         console.log("iam raji"); 
//     }
// }
// let d= new Demo()

//to create static varaiable and method
// class Demo{
//     a=78
//     name="raji"
//     static a=90
//     constructor(){
//         console.log("iam c");
//             let a=89
//             console.log(a);
//             console.log(Demo.a);  //we can also access from here 
//             Demo.sai()
            
//         }
//         venu(){
//             console.log("iam method");
            
//         }
//         static sai(){
//             console.log("iam static method");
            
//         }
// }
// let d= new Demo()
// d.venu()
// console.log(Demo.a);  //to acces static variable
// Demo.sai()  //to access static method


//Inheritance
// class Demo{
//     a=89
//     name="navi"
//     constructor(){
//         console.log("iam constructor");
        
//     }
//     venu(){
//         console.log("iam method");
        
//     }
// }
// class Test extends Demo{

// }
// let t = new Test()
// console.log(t.a);    //89
// console.log(t.name);  //navi
// t.venu()


class Demo{
    a=89
    name="navi"
    constructor(){
        console.log("iam constructor");
        
    }
    venu(){
        console.log("iam method");
        
    }
}
class Test extends Demo{
      a=78
      constructor(){
        super()
        console.log("iam test constructor");
        
      }
}
let t = new Test()
console.log(t.a);    //78
console.log(t.name);  //navi
t.venu()