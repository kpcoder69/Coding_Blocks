
// 1st explain ****************************************************************************************************

//-- > BOM 
/*Browser  Object Model ---> used to interact with the browser

 default object --> window

 window.alert("hello ");

 window --> document , history , screen , navigator , location
 represents the window (browser's object ) -------->>>breif explain inside VS code

 Methods inside window--> alert(), confirm(), prompt(), open(), close(),setTimeOut() */

 // 2nd explain *************************************************************************************************
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
    <div>
        <input type="button" value="click" onclick="msg()" />
    </div>

</body>
<script>
    function msg(){
      alert("Hello Window")
    }
</script>
</html>
*/


//3rd explain ****************************************************************************************************
/*
History --> array [urls] visited by the user 
forward()//back()// go() */


// 4th explain **************************************************************************************************

/*navigator --> gives info browser 
--> navigator.appCodeName, appName, appVersion

--> screen --> browser screen */


// 5th explain ********************************************************************************************************

/*DOM---> whole html (root element)

window.document().getElementById()
document.getElementById()
document.getElementsByClassName()
document.getElementsByName() */

/*<html>
<body>
    <h2>JavaScript Navigator Object</h2>
    <script>
        document.writeln("<br/>navigator.appCodeName: " + navigator.appCodeName);
        document.writeln("<br/>navigator.appName: " + navigator.appName);
        document.writeln("<br/>navigator.appVersion: " + navigator.appVersion);
        document.writeln("<br/>navigator.cookieEnabled: " + navigator.cookieEnabled);
        document.writeln("<br/>navigator.language: " + navigator.language);
        document.writeln("<br/>navigator.userAgent: " + navigator.userAgent);
        document.writeln("<br/>navigator.platform: " + navigator.platform);
        document.writeln("<br/>navigator.onLine: " + navigator.onLine);
        document.writeln("<br/>Sv: " + navigator.onLine);

    </script>
</body> 
</html> */

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="1" class="h1 class">
        hi
    </h1>
    <p class="h1 class" id="2">
        Hello 
    </p>
</body>
<script>
   document.getElementById("1").innerHTML="INNER_HTML"
   
</script>
</html> */


/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="form1">
     Enter Name : <input type="text" name="name"/>
    <input type="button" onclick="print()" value="print name"/>
    </form>
</body>
<script>
   function print(){
       var name=document.form1.name.value;
      alert("Hello",name)
   } 
</script>
</html> */

// task to print cube of no. same as above interface....

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Cube of Given Number</h1>
    <form name="form1">
        Enter Number : <input type="number" id = "num" required/>
        <input type="button" onclick="print()" value ="Cube"/>
    </form>
    
</body>
<script>
    function print(){
        var num = document.getElementById("num").value;
        alert(num*num*num)
    }
</script>
</html> */


/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="myForm">
    
    <input type="password" name="userPass" onkeyup="validate()" value=""/>
    Strength: <span id="my"> no strength  </span>
    </form>
</body>
<script>
   function validate(){
       var msg;
   msg=(document.myForm.userPass.value.length>5)?"good":"poor"
   document.getElementById("my").innerHTML=msg;    

      
   } 
</script>
</html> */