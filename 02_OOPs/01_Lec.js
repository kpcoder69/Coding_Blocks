// // javascripts ---> syntactic sugar on top on JS 
// // class --> special type of funcitons

// <script>
//   class Employee{
    
// // initializing object
//     constructor(id, name){
//     this.name = name;
//   this.id=id;
//     }
//   // methods
//   detail(){
//     document.writeln(this.name);
//   }
// }
//   var obj1=new Employee("1",ABC")
//   obj1.detail();

// </script>



//  <!DOCTYPE html>
//  <html lang="en">
//  <head>
//      <meta charset="UTF-8">
//      <meta http-equiv="X-UA-Compatible" content="IE=edge">
//      <meta name="viewport" content="width=device-width, initial-scale=1.0">
//      <title>Document</title>
//  </head>
//  <body>
//      <script>
//       // var obj1 = new Employee(1, "ABC");
//       // obj1.detail()              -------->> here no hoisting is perform
//  class Employee{                     //-----> inside one html document we sre declare only one class i.e No re-declaration 
//  //initiaze our object            
//      constructor(id,name){
//          this.id=id;
//          this.name=name;
//      }
//      //detail
//      detail(){
//          document.writeln(this.id+"Name"+this.name);
//      }
//  } 
//      var obj1 = new Employee(1, "ABC");
//      obj1.detail()

//      </script>
// </body> 
// </html>




//<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         var emp= class Employee {
//             //initiaze our object
//             constructor(id, name) {       // if we make class as expression then our length of code will decrease and 
//                 this.id = id;            // it is also consider as good programming practice
//                 this.name = name;
//             }
             
//         }
//         var obj1=new emp(1,"abc");
//     </script>
// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- <script>
//         emp={id:1,name:"Hi there"};
//         document.write(emp.id+"Name"+emp.name);                    //creating object by object literal (1st way to create object)
//         var emp=new Object();                                      // in javaScript we directly create Object bcz JS perform template based programming language 
//         emp.id=1;                                                  // so its not compalsory to create Class in JS
//         emp.name="SJHKKJSNKJn";
//         document.write(emp.id + "Name" + emp.name);
//     </script> -->
//     <!-- <script>
//        function emp(id,name){
//         this.id=id;
//         this.name=name;
//        }
//        e=new emp(101,"khabkjckj");
//         document.write(e.id + "Name" + e.name);
     
//     </script> -->  
// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <form name="form1">
//         Male : <input type="radio" name="gender" value="male"/>
//         Female : <input type="radio"  name="gender" value="female"/>
//         <input type="button" onclick="print()" value="Total Gender" />
//     </form>
// </body>
// <script>
//     function print() {
//         var allgenders = document.getElementsByName("gender");
//         alert(allgenders.length);
//     } 
// </script>

// </html> -->

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>

//     <br>

//         Enter no :<input type="text" id="number" name="number"/>
// </br>
// <input type="button" value="cube" onclick="print()"/>

//     </form>


// </body>
// <script>
//     function print() {
//         var no = document.getElementsById("number").value;
//         alert(no*no*no);
//     } 
// </script>

// </html>