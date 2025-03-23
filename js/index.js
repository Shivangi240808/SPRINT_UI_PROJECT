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
welcomDiv.style.display="none"

let loginDiv=document.querySelector(".login_div");

let loginEmail= document.getElementById('email');
let loginPassword= document.getElementById('password');

let navLinks=document.querySelector(".nav-links");

navLinks.style.display="none";


let errorMessage=document.getElementById('errorMessage')


let storedEmails=localStorage.getItem("emailList")
let emailArray=(storedEmails)?JSON.parse(storedEmails):[];


//------------------(login_function)----------------------

function loginUser(event){
    event.preventDefault();
    emailValue=loginEmail.value;
    passwordValue=loginPassword.value;

    localStorage.setItem("email",emailValue);
    localStorage.setItem("password",passwordValue);

    

    emailArray!=[]&&emailArray.forEach(email => {
        if(localStorage.getItem("email")==email){
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
    window.location.reload();

}

//---------------------(onload_function)--------------------------

function onLoad(){
    emailArray!=[]&&emailArray.forEach(email => {
        if(localStorage.getItem("email")==email){
            navLinks.style.display="flex";
            loginDiv.style.display="none"
            welcomDiv.style.display="unset"
        }
    });
    
}

onLoad();


