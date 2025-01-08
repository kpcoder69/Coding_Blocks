//Data Types
//String //Number //BigInt //Boolean //undfined //Null //Symobol //Object(object, array, date)

//console.log(this)
/*let w = 7.6;
let color = "Yellow";
let x = true;
const obj = { first: "ABC", second: "XYZ" };//object

const nums = [1, 2, 3] // array object 
console.log(typeof nums);

a = new Date();
console.log(a);
console.log(typeof a);*/

//see how JS evalute the data type
/*let a = 16 + "V";
let b = "V" + 16
let c = 16+4 + "V"  // js evaluates exp from L -> R(left to right)
console.log(c);
console.log(typeof a);
*/


/*let x;
x = 5;
x = "ABC";
console.log(x);

let d = "ABC";   //---> either use in double quotes and single quotes it consider as string
let e = 'ABC'

console.log(d == e); // data
console.log(d === e);// dta +type*/

/*console.log(typeof (3 + 4))
let x;
console.log(x)*/


/*const  a = () => console.log(1);
console.log(typeof a )
// Key_Value pair
const obj = {
    A: "1",
    B: "2",
    concat: function c() {
        return this.A + this.B;
    }
}
console.log(obj.concat())
// this ---> inside obj will point to current object 
// this console.log(this)--> global object */



// In JavaScript,
//   almost "everything" is an object.
//  All JavaScript values, except primitives, are objects.

//let x = new String();

//rest parameter   ---> in java we say var args parameter
/*let x = abc(2, 3, 3, 4, 4, 4, 44, 4, 4, 4, 4, 4, 4, 4, 4);
function abc(...args) {
    let s = 0;
    
    for (let i of args) {
        s += i;
    }
return s;
}
console.log(x); */


/*function mul(a, b) {
    return a * b;
}
window.mul(2, 3);  //<--- this si run inside DOM which advance concept we no need to learn yet
mul(2, 3); //*****browser */

/*console.log('' == "");
console.log('' === "");
console.log(null === undefined) // false 
console.log(null == undefined)  // true // special case   
console.log(null == 0) //false  //special case 
console.log(null < 0) // null -> 0 false
console.log(null > 0) // false 
console.log(null <= 0) // true 
console.log(null >= 0) // true 
console.log(undefined == 0) //false
console.log(undefined < 0) // false 
console.log(undefined > 0)//false
console.log(undefined <= 0)// false 
console.log(undefined >= 0) // false 
//undefined --> NAN
*/


/*console.log([0] == '')
console.log([0] == 0)
console.log([0] == '')
console.log([0] == 0)
const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1
  },
  e() {
    return (() => this.a + 1)() // IIFE 
  }
}
console.log(obj.b) //exception->when the definition of object is completed then only we can use this
console.log(obj.c())// arrow function there is no definition of this 
console.log(obj.d())// 2
console.log(obj.e())// 2 

this //--> refers to the object 
console.log(this)// --> global object */



// ternary operator 
const obj = {
  a: 1,
  b() {
    return this.a
  }
}
console.log(obj.b())
console.log((true ? obj.b : a)())
console.log((true, obj.b)())
console.log((3, obj['b'])())
console.log((obj.b)())
console.log((obj.c = obj.b)()) 