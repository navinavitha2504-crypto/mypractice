/*//for loop 
// numbers from 1 to 100
for(let i = 1; i<=10; i++){
    console.log(i);
}
//to display decrement nos
for(let i =10;i>=1;i--){
    console.log(i);
    
}  */

/*//while loop 
//nos from 1 to 10 
let i = 1
while (i<=10) {
    console.log(i);
    i++
}

//nos from reverse order
let j=10
while(j>=1){
    console.log(j);
    j--
    
}*/

/*//do while 
let k= 4
do{
    console.log("hi");
    console.log("iam from do while");   
}while (k>=1) */
    
/*//check the pin no 
let pin = "0000" 
do{
    console.log("give  current pin number"+pin);
    pin++
}while (pin!=5)
console.log("you entered correct pin "+pin);
console.log("welcome");  */



/*
//break keyword used in loops(for loop)
 for(let i = 0; i <=10;i++){
    break        //it will execute but it is not the crt way 
    console.log(i);
    console.log('hello');  
 }
//correct way 

 let persons=10
 for(let i=1;i<persons;i++){
    console.log(i);
    if(i==5){
        break
    }
 }   */

 /*//break in while loop
 let i = 1
 while(i<=10){
    console.log(i);
    if(i==5){
        break
    }
    i++
 }

 //labled break'
abc : for (let i = 1;i<=10;i++){    //we should use a label to break this 
    bbb:for(let j = 1;j<=10;j++){   //before lable break this loop is going to break
        for ( let k=1;k<=10;k++){
              if(j==5 && k==5){
            console.log("i is "+i+" j is"+j+"k is "+k);
            break bbb
            }
        }
        
    }
 }   //we can use multiple labled breaks to break a certain loop
 */


//to print even no from 1-10
for(let i=1;i<=10;i++)
    if(i%2==0){       //for odd (i%2!=0)
        console.log(i);
        
    }
 
 //continue key word 
 for (let i = 1;i<=10;i++){
    if(i%2==0){
        continue
    }
    console.log(i+"checking not prime");
    for(let j=2;j<i;j++){
        if(i%j==0){
            console.log(i+"is not a prime");
        }
    }
    
 }

 //to print prime nos
 for (let i=1;i<=100;i++){
    if(i%2==0){
        continue
    }
    let count =0
    for (let j=2;j<=i/2;j++){
        if(i%j==0){
            count ++
        }
    }
    if (count==0){
        console.log(i+"is a prime number");
        
    }
 }
