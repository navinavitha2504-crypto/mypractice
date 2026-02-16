////by allocating to main variable
// const main=require('./main.js')
// main.venu()
// console.log(main.a);
// let r=new main.Raj

////direct assining
// const {a,venu,Raj}=require('./main.js')
// console.log(a);
// venu()
// let r= new Raj

//only what you want
// const {a}=require('./main.js')
// console.log(a);

//es module
// import {a,venu,Raj}from './main.js'
// console.log(a);
// venu()
// new Raj()

////for default export
import {a,Raj}from './main.js'
import venu from './main.js'
console.log(a);
venu()
new Raj()