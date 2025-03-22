// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Logout Function
function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to login page
}

// Pay Now Function
function payNow() {
    alert("Redirecting to payment...");
    window.location.href = "payment.html"; // Redirect to payment page
}