// function in inputs

var inputs=document.getElementsByTagName("input"); //this inputs  in page
// var checkBox1=document.getElementById("checkBox1");//checkbox
var correct=document.getElementById("correct"); // mark right in input user
var btn1 =document.getElementById("btn1"); //btn LoGin
var aler=document.getElementsByClassName("alert")[0];
var alertI=document.getElementById("alertI")

//when User foucs clear placeholder and blur retrn placeholder

inputs[0].addEventListener("focus",clearPlaceH);
inputs[0].addEventListener("blur",function()
{
    inputs[0].setAttribute("placeholder","Please Enter User Name");
    if(inputs[0].value=="")
        {
            correct.classList.add("hide");
        }
});

//when User foucs clear placeholder and blur retrn placeholder

inputs[1].addEventListener("focus",clearPlaceH);
inputs[1].addEventListener("blur",function()
{
    inputs[1].setAttribute("placeholder","password");
    if(inputs[1].value=="")
    {
        showPassword.style.color="black";
    }
});
// show right and no right in user name

//when keydown the class will remove
inputs[0].addEventListener("keydown",function()
{
    // correct.classList.remove("hide");
    correct.classList.remove("fa-circle-xmark");
    correct.classList.remove("fa-solid");
    correct.classList.remove("fa-check");
    
});

correct.addEventListener("click",function()
{
    if(correct.className =="fa-solid fa-circle-xmark")
    {
        inputs[0].value="";
    }

});
    //when keyup the class will added
    var pattrnemil =/^([a-zA-Z0-9_\.-]+)@([[a-zA-Z\.]+)\.(com|eg)$/g;
inputs[0].addEventListener("keyup",function()
{
    correct.classList.remove("hide");
    if(inputs[0].value.match(pattrnemil)) 
    { 
        correct.classList.add("fa-solid");
        correct.classList.add("fa-check");
        correct.style.color="green";
    }
    else 
    {
        correct.classList.remove("fa-check");
        correct.classList.add("fa-solid");
        correct.classList.add("fa-circle-xmark");
        correct.style.color="red";
    }
});
//show and hide password
var showPassword=document.getElementById("showPassword");
showPassword.addEventListener("click",
function()
{
    if( inputs[1].type==="password"){
        inputs[1].setAttribute("type","text");
        showPassword.classList.replace("fa-eye-slash","fa-eye");
    }
    else
    {
        inputs[1].setAttribute("type","password");
        showPassword.classList.replace("fa-eye","fa-eye-slash");
    }
});

//valid password
var patrn=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
inputs[1].addEventListener("keyup",function()
{
    if(inputs[1].value.match(patrn))
    {
        showPassword.style.color="green";
    }
    else
    {
        showPassword.style.color="red";
    }
});
var email;
var password;
function inputChange(){

    email=inputs[0].value;
    password=inputs[1].value;

}

// validation to form
// var email=inputs[0].value;
// var password=inputs[1].value;
console.log(inputs[1].value);
var emailLocal=localStorage.getItem("email");
var passLocal=localStorage.getItem("password");
btn1.addEventListener("click",function()
{   
    // email=inputs[0].value;
    // password=inputs[1].value;
    if(inputs[0].value.match(pattrnemil) && inputs[1].value.match(patrn))
    {
        
        


   if(email==emailLocal && password==passLocal){
    window.location.replace("home.html");

   }else{
    alert("Wrong email or password");
   }
        // saveStorg();
        // alert("good")
    }
    else
    {
        if(inputs[0].value.match(pattrnemil) !==true)
        {
            inputs[0].style.boxShadow="3px 3px 3px #bf3737";
            event.preventDefault()
        }
        else (inputs[1].value.match(patrn) !==true)
        {
            inputs[1].style.boxShadow="3px 3px 3px #bf3737";
            event.preventDefault()
        }
        aler.classList.remove("hide")
        aler.style.opacity="1";

    }
});

alertI.addEventListener("click",function()
{
    aler.style.opacity=".0"
    aler.style.transition="2s"
    aler.classList.add("hide");
});

//save data in localstorge

// function saveStorg()
// {
//    var email=inputs[0].value;
//    var password=inputs[1].value;
//    var emailLocal=localStorage.getItem("email");
//    var passLocal=localStorage.getItem("password");
   
//    if(email==emailLocal && password&&passLocal){
//     window.location.replace("home.html");

//    }else{
//     alert("Wrong email or password")
//    }

// }
// window.onload=function()
// {
//     inputs[0].value=localStorage.getItem("email");
//     inputs[1].value=localStorage.getItem("password");
// };
document.getElementById("forgot").addEventListener("click",function()
{
    window.open("password.html","_blank","width=400px,height=500px,left=400px")
})
function clearPlaceH()
{
    this.setAttribute("placeholder","");
};
// -------------------------------------------------------------------------------
// Min 1 uppercase letter,Min 1 lowercase letter,
// Min 1 special character,Min 1 number,Min 8 characters and Max 30 characters.
//----------------------------------------------------------
