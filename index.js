
if(typeof document!='undefined')
 {

function showContactOptions() {
    var dropdownContent = document.getElementById("contact-options");
    dropdownContent.classList.toggle("show");
}

function selectOption(option) {
switch(option) {
case 'phone':
    window.location.href = 'tel:+254796952359';
    break;
case 'email':
    window.location.href = 'mailto:wanjikunganga21@gmail.com';
    break;
default:
    // Handle unexpected option
    break;
}
}

function showAbout() {
    document.getElementById("about-section").style.display = "block";
    document.getElementById("entire-page").style.display = "none";
}


function showHomePage() {
    document.getElementById("about-section").style.display = "block";
    document.getElementById("entire-page").style.display = "block";
    
    setTimeout(function() {
        alert("Welcome to the home page!");
    }, 1000); 
}

 }