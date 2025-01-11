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
//         emp={id:1,name:"Hi there"};               //1. creating object by object literal (1st way to create object)
//         document.write(emp.id+"Name"+emp.name);   // in javaScript we directly create Object bcz JS perform template based programming language 
//     </script> -->                                  // so its not compalsory to create Class in JS
//         
//     <!-- <script>                  
//         var emp=new Object();                      //2. Creating objects by instance                
//         emp.id=1;                                                  
//         emp.name="SJHKKJSNKJn";
//         document.write(emp.id + "Name" + emp.name);
//     </script> -->
//
//     <!-- <script>
//        function emp(id,name){                     //3. creating object by the help of constructor  
//         this.id=id;                                 //we see there are three different object creation
//         this.name=name;
//        }
//        e=new emp(101,"khabkjckj");
//         document.write(e.id + "Name" + e.name);
     
//     </script> -->  
// </body>
// </html>


//javascript prototype/template  object 
//prototype ----> chaining ---->obj ---> Employee ---> obj1 
/*
<!DOCTYPE html>
<html lang="en">

<body>
    <!-- <script>

        function Employee(firstName,secondName){
            this.firstName=firstName;
            this.secondName=secondName;
        }
        Employee.prototype.age=12;
        Employee.prototype.fullName=function(){
            return this.firstName+this.secondName;
        }
        var obj1=new Employee("ABC","DCG");
        document.writeln(obj1.fullName); 
        document.writeln(obj1.age); 
    </script>  -->
    <script>

        class Employee{
            constructor(){
               this.age=28;
            }
        }
        class Company extends Employee{
            constructor(id,name){
                super();
                this.id=id;
                this.name=name;
            }
        }
        var emp=new Company(1,"ABC")
         document.writeln(emp.id+emp.name+emp.age); 
    </script>
</body>
</html>
*/
 

//Static Method
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        class T = test{
            constructor(){
            document.writeln(test.display())
          
            }
            static display(){
            return "Static method";
            }
            static display(){
            return "Static method 2";
            }
            document.writeln(test.display())
        }
    </script>
</body>
</html> */


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        class test{
            constructor(){
               document.writeln(test.display());
                document.writeln(this.constructor.display());
           }

            static display(){
                return "Hi";
            }
            show(){
                document.writeln(test.display());
            }

        }
        var t=new test();
        t.show();
    </script>
</body>
</html>*/



//Encapsulation
//read only ; read write ; write
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <script>
            function Student(name, marks) {
                var s_name = name;
                var s_marks = marks;

                Object.defineProperty(this,"name",{
                    get:function(){
                        return s_name;
                    },
                    set:function(){
                        this.s_name=s_name;
                    }
                });
                Object.defineProperty(this, "marks", {
                    get: function () {
                        return s_marks;
                    },
                    set: function () {
                        this.s_name = s_marks;
                    }
                });
            }
            var s=new Student("John",54);
            document.writeln(s.name);
     </script>
</body>
</html> */
