
// Js is the lang of web 
// FE ---> JS 

// browser ---> 
// server ---> env node js ---> to run js outside browser 

//1 varibles in js 

//console.log(1);  //---> it is same like print statement

//**********************************************************************************************************************************************************
// LET ---> block scope {    }

/*let x = 1;
let msg = "Hello";
console.log(msg);
console.log(x);





//QPS 1
if (x==1) {
    let age = 24;
    console.log(age);
}
console.log(msg);
// console.log(age); // reference error ---> 





//QPS 2
function ge(){
  let x = 10;
  console.log(x);
}
ge();






//QPS 3
function eg() {
    let x = 10;
    if (x==10){
      let y=5;
      console.log(x + y);
    }
    //console.log(y);  //---> give reference error
}
eg();                  // Let cannot be redeclared  */




//************************************************************************************************************************************************* */
//VAR

/*console.log(x);
var x;                //itz output is undefined, we also called Varaible Hosting



//QPS 4

var x = 1;
console.log(x);          //--> here we see the redeclare of var is possible
function a() {
  console.log(h);      //--> in which function hosting is perform(i.e pahle decleration ho jata hai phir assign)
}
a();
//console.log(h);  //---> its give error.......bcz outside of function scope
var h = "inside function"; 


var z = 1;
var z = 2;       // ----> hence redeclareation is possible only in var not let bcz let show error
let x = 1;
let x = 2;    */




// QPS 5
/*function test(){
  var x = 31;
  if(1){
    var x = 71;
    let y = 41;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  //console.log(y);  //----> itz give error let scope alwasy inside the block 
  
}
test(); */




//*************************************************************************************************************************************************** */
//CONST

/*const p =1;
p = 2;   //line 81 is wrong
p=p+1    // and line 82 is also bcz no redecleration  && no assigning is for const */



// concept of ARROW FUNCTION  --> arrow function come in ES6

/*const functionName = () => console.log();  //---> for single line
const functionNames = () => {
                                    // ---> itz for multiple line arrow function
}
function a() {
                                  // ---> normal function
}*/




//QPS 6
/*const func1 = () => console.log(1)
func1()
func2()
function func2() {
  console.log(2)     //--> in which function hosting is perform(i.e pahle decleration ho jata hai phir assign)
}
// func3()
var func3 = function func4() {   //---> type error shows
  console.log(3)
} */




// QPS 7

/*const a = 1
console.log(a)  

var b
console.log(b)
b = 2

console.log(c)
var c = 3

console.log(d)   // --> it gives error
let d = 2 */




//*************************************************************************************************************************************************** */
// IIFE -- > immidiately Inoke Function Expression
// explain concept of IIFE 

/*const x =(function (x, y) {
  console.log(x + y);//3 
})(1, 2);

     // dono same hai...IIFE ko varaible m store kra diya hai uppar wale m niche wala diret IIFE hai
   
(function (x, y) {
  console.log(x + y);//3 
})(1, 2); */



//******************************************************************************************************************************************************* */
//Solve some question to batter understanding of variable..............


//QPS 8

/*var a =1;
function a(){

}
console.log(typeof a);
var b
function b(){
  
}
b=1
console.log(typeof b);
function c(){
}
var c = 1;
console.log(typeof c);
var d =1;
(function (){
  d = '2'
  console.log(typeof d);
  function d(){

  }
})()
console.log(typeof d);
var e = 1;
const f = function e(){

}*/




//QPS 9

/*let foo = 10;
function func1() {
    console.log(foo)    // ---> undefined
    var foo = 1;
    console.log(foo)   // ---> 1
}
console.log(foo) //---> 10
func1() 

function func2() {
    console.log(foo)
    let foo = 1  //---> error 
}
func2 () */




// One more concept of IIFE
/*(() => {
            //without using name of function we writte the code of function by the help of IIFE
})*/






//QPS 10

(() => {
  if (!fn) {
    function fn() {
      console.log('2')
    }
  }
  fn()
})()

function fn() {
  console.log('1')
}

function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4')
    }
  }
  fn1()
})()
(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3()
})()  







// // arrow functiom
// // const ---> block scoped no redeclaration && reassign thing works for it 
// // arrow -- > ES6 
// // function hoisting also occurs in 





