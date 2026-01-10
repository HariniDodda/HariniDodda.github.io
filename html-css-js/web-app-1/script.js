function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    // alert("Hello")
//    alert(document.getElementById("txtEmail").value)
//lblMessage.innerHTML=document.getElementById("txtEmail").value + "-" + document.getElementById("txtpass").value
// lblMessage1.innerHTML=document.getElementById("txtpass").value
let email=document.getElementById("txtEmail").value
let pass=document.getElementById("txtpass").value
//=== is used to check both type and value
//== is used to check the value
if(email==="john@gmail.com" && pass==="1234"){
    lblMessage.innerHTML="Welcome"
}
else{
    lblMessage.innerHTML="Denied"
}
 }
function showLoginForm(){
    let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><label>Name </label><input type="text" id="txtEmail" /></p>
      <p><label>Password </label><input type="password" id="txtpass" /></p>
      <p><button class="login" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="account" onclick="showRegisterForm()">Create Account</button></p>
    `
    root.innerHTML = str
}

function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>
     <p><input type="text" placeholder="email"/></p>
     <p><input type="password" placeholder="password"/></p>
     <p><input type="text" placeholder="name"/></p>
     <p><button class="account">Register</button></p>
    `
    root.innerHTML = str
}