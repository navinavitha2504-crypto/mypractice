// let a=45
// function venu(){
//     console.log(" i am venu");
    
// }
// class Raj{
//     constructor(){
//         console.log(" i am raj");
        
//     }
// }

////js module
// module.exports ={a,venu,Raj} 


// exports.a=45
// exports.venu=function venu(){
//     console.log(" i am venu");
    
// }
// exports.Raj=class Raj{
//     constructor(){
//         console.log(" i am raj");
        
//     }
// }

////es module
// export{a,venu,Raj}

// //2nd method for export
// export let a=45
// export function venu(){
//     console.log(" i am venu");
    
// }
// export class Raj{
//     constructor(){
//         console.log(" i am raj");
        
//     }
// }


// //3rd method for export
// export let a=45
// export default function venu(){
//     console.log(" i am venu");
    
// }
// export class Raj{
//     constructor(){
//         console.log(" i am raj");
        
//     }
// }



//4th method for export
let a=45
function venu(){
    console.log(" i am venu");
    
}
class Raj{
    constructor(){
        console.log(" i am raj");
        
    }
}
export {a}
export default venu
export {Raj}