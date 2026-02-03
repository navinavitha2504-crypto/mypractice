//2026-2-2T15:02:45:234Z
//let d= new Date()
//console.log(d);  //by default it display GMT00 tym
// console.log(d.toISOString());  //tym at london 

// console.log(d.toString()); //long tym format local tym 
// console.log(d.toTimeString()); //only time
// console.log(d.toDateString());  //only date

// console.log(d.toLocaleString());  //india tym GMT 05:30 current location tym (short tym)
// console.log(d.toLocaleDateString());  //to get only date
// console.log(d.toLocaleTimeString());  //omly time 

//to print indivisually using getter methods
// let k=new Date()
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());  //we get this milliseconds format

// //to get tym at GMT00  (add UTC)
// console.log(d.getUTCFullYear());
// console.log(d.getUTCDate());
// console.log(d.getUTCHours());
// console.log(d.getTimezoneOffset());
 
//to modify we use setter methods
// let d= new Date()
// console.log(d.toString());
// d.setFullYear(2004)
// d.setMonth(10)
// d.setDate(25)
// d.setHours(10)
// d.setMinutes(30)
// d.setSeconds(56)
// d.setMilliseconds(456)
// console.log(d.toString());
// //setting in universal format
// d.setUTCFullYear(2004)
// d.setUTCMonth(10)
// d.setUTCDate(25)
// d.setUTCHours(10)
// d.setUTCMinutes(30)
// d.setUTCSeconds(56)
// d.setUTCMilliseconds(456)
// console.log(d.toString());

// //to create a custom date
// //2026-01-10T08:45:34:435Z
// let d = new Date(1000*60*60*24*31*12*55)
// console.log(d);
// console.log(1000*60*60*24*31*12);  //1 year milliseconds


// //to get current datetime in milliseconds
//  let d = new Date()
//  console.log(d.getTime());
//  //lets store this in another variable
//  let time =d.getTime()
//  console.log(time);
 
//  //convert milliseconds to current date 
//  console.log(time/1000);  //to get seconds
//  console.log(time/1000*60);  //to get minutes
//  console.log(time/1000*60*60);  //to get hours
//  console.log(time/1000*60*60*24);  //to get days
//  console.log(time/1000*60*60*24*30);  //to get months
//  console.log(time/1000*60*60*24*30*12);  //to get years

 //difference  b/w two dates
//  let d1=new Date(0)  //1970-01-1T0:0:0.0z
//  let d2=new Date()   //we can also give manually
//  console.log(d1);
//  console.log(d2);
//  //to get difference 
//  let diff= d2.getTime()-d1.getTime()
//  //using parseInt to avoid decimal values
//  let years=parseInt (diff/ (1000*60*60*24*30*12))
//  let reming = diff % (1000*60*60*24*30*12)

// let months= parseInt (reming/ (1000*60*60*24*30))
//  reming= reming% (1000*60*60*24*30)

// let days= parseInt (reming/(1000*60*60*24))
//  reming=reming%(1000*60*60*24)

// let hours = parseInt (reming/(1000*60*60))
// reming=reming%(1000*60*60)

// let minutes= parseInt (reming/(1000*60))
// reming=reming%(1000*60)

// let seconds= parseInt (reming/(1000))
// reming=reming%(1000)

// let milliseconds=reming
 
//  console.log("years:"+years+",months:"+months+",days: "+days+", hours:"+hours+",minutes: "+minutes+",seconds: "+seconds+",milliseconds: "+milliseconds);
 
//passing arguments as numbers 
// let d=new Date(2025,11)  //year month
// let d1=new Date(2025,11,25) //year,month,date
// let d2=new Date(2025,11,25,4) //year,month,date,hours
// let d3=new Date(2025,11,25,4,34) //year,month,date,hours,minutes
// let d4=new Date(2025,11,25,4,35,23) //year,month,date,hours,min,sec
// console.log(d.toString())

 //we can also pass strings 
 let d=new Date("2024-11-25")
 console.log(d.toString());
 
 //compare two dates 
 let d1= new Date("2025-12-30")
let d2= new Date("2025-12-30")
console.log(d1==d2);  //not a crt way //false
console.log(d1.getTime()==d2.getTime());  //true
console.log(d1<d2);


