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