function login()
{
var un=document.forms["myform"]["username"].value;
var pass=document.forms["myform"]["passwd"].value;
if(un=="gcteceians")
{
if(pass=="eceians"){
alert("Login Successfully!");
window.open("notes.html");
}
else{
alert("Incorrect Username or Password!");
}
}
else{
alert("Incorrect Username or Password!");
}
}