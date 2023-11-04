
if(typeof document!='undefined')
 {

document.body.addEventListener('click', function(event) {
    var dropdownContent = document.getElementById("contact-options");
    if (!event.target.matches('.dropbtn') && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    }
});

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

let aboutClickCount = 0;

function showAbout() {
    aboutClickCount++;
    document.getElementById("about-section").style.display = "block";
    document.getElementById("entire-page").style.display = "none";
    document.getElementById("myphotocontainer").style.display = 'block';
    document.documentElement.classList.add("about-clicked");

    if (aboutClickCount > 2) {
        alert("Please click the home button to return to the homepage.");
        aboutClickCount = 0;
       
    }
    
}



function showHomePage() {
    document.getElementById("about-section").style.display = "block";
    document.getElementById("entire-page").style.display = "block";
    document.getElementById("myphotocontainer").style.display='none';

    document.documentElement.classList.remove("about-clicked");


    
    setTimeout(function() {
        alert("Welcome to the home page!");
    }, 1000); 
}

}