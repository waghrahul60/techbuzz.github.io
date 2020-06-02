// login form javascript code


function login() {

  var uname = document.getElementById("uname").value;
  var pass = document.getElementById("password").value;

  	

  		if (uname=="admin" && pass=="admin123") {
  			// document.getElementById("demo").innerHTML = "string mached";
  			// document.write("Welcome"+ str1 + " "+ str2);
  			window.location.href="home.html"
  			

  		}
  		else{

  			window.alert("username OR password is wrong");
  			// document.getElementById("demo").innerHTML = "*try again";
  			  			
  		}
	}


// register form javascript code

function register()
{

  window.alert("Register Successfullly");

}