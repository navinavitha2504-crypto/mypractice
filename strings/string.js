let a = "navi"
let b = 'naveen'
console.log(a);
console.log(b);
//if we want navi's
let c = "navi's"
console.log(c);
let d = 'navi"s'
console.log(d);
// we cant print this by using escape symbol '\'
let e = "navi\'s"
let f = "navi\"s"
let g = "my name is\"navitha\""
console.log(e);
console.log(f);
console.log(g);
// we can also use backtics 
let h = `hi how are you`
console.log(h);
// to concadinate 
let name = "navitha"
let email = "navitha@gmail.com"
let number = "889577509"
// i want the sentence "iam navitha my email is navitha@gmail.con amd my number is 8897557509"
console.log('i am'+ name +'my email is'+ email +'and my number is'+ number);
 //
 let i = '45'
 let j = 53
 let k = i+j
 console.log(k);
 console.log(typeof k );
//to convert to string 
let m = true 
let n = false
console.log(''+m+n);

let o = 45
console.log (typeof o)
let p = ''+o
console.log(typeof p);
// another way to concatenate
let display = `i am ${name}.my email is ${email}.and my phone number is ${number}`
console.log(display);
