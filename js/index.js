// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



// Pay Now Function
function payNow() {
    alert("Redirecting to payment...");
    window.location.href = "payment.html"; // Redirect to payment page
}


let welcomDiv=document.querySelector(".welcome_div");
welcomDiv.style.display="none";

let userName=document.getElementById('userName');
let userIcon=document.getElementById('userIcon');

let loginDiv=document.querySelector(".login_div");

let loginEmail= document.getElementById('email');
let loginPassword= document.getElementById('password');

let navLinks=document.querySelector(".nav-links");

navLinks.style.display="none";


let errorMessage=document.getElementById('errorMessage')


let storedUsers=localStorage.getItem("users")
let userArray=(storedUsers)?JSON.parse(storedUsers):[];


//------------------(login_function)----------------------

function loginUser(event){
    event.preventDefault();
    emailValue=loginEmail.value;
    passwordValue=loginPassword.value;

    localStorage.setItem("email",emailValue);
    localStorage.setItem("password",passwordValue);
    
    

    userArray!=[]&&userArray.forEach(user => {
        if(localStorage.getItem("email")==user.email&&localStorage.getItem("password")==user.password){
            localStorage.setItem("userName",user.fullName);
            userName.textContent=localStorage.getItem("userName");
            userIcon.innerHTML=`<p style="margin-left:1rem;">${localStorage.getItem("userName")}</p>`
            setTimeout(()=>{
                navLinks.style.display="flex";
                loginDiv.style.display="none"
                welcomDiv.style.display="unset"
            },1000)
            errorMessage.innerHTML=`<br><p style="color: green;">Login Success !!</p>`
        }else{
           errorMessage.innerHTML=`<br><p>Invalid Credentials !!</p>`
           setTimeout(()=>{
            errorMessage.innerHTML="";
           },2000)

        }
    });
    
  
}

//--------------------(Logout Function)-------------------------

function logout() {

    localStorage.setItem("email","");
    localStorage.setItem("password","");
    localStorage.setItem("userName","");
    window.location.reload();

}

//---------------------(onload_function)--------------------------

function onLoad(){
    userArray!=[]&&userArray.forEach(user => {
        if(localStorage.getItem("email")==user.email){
            navLinks.style.display="flex";
            loginDiv.style.display="none"
            welcomDiv.style.display="unset";
             userName.textContent=localStorage.getItem("userName");
            userIcon.innerHTML=`<p style="margin-left:1rem;">${localStorage.getItem("userName")}</p>`
        }
    });
    
}

onLoad();


