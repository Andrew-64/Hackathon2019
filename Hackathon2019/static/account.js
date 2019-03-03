//Listen For Form Submit
 
function validateMyForm(e)
{
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
 
if(!validateForm(name, password, email)){
	
  return false;
}
 e.preventDefault();
}
 
function validateForm(name, password, email){
  if(!name || !password || !email)
  {
    alert('Please Fill in the Complete Form');
    return false;
  }
 
var Rexp = new RegExp(forWhitespace);
var expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var regex = new RegExp(expression);
  if(!email.match(regex))
  {
  	alert("Enter proper Email address");
  	return false;
  }
  
  if(!password.match(Rexp))
    {
     alert('No WhiteSpace allowed in password Field');
        return false;
    }
  if(password.length<6)
  	{	
    alert('Password field length less than 6');
  		return false;
  	}
 
  return true;
}

