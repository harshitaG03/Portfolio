 // script.js

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function validateForm() {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('Message').value;
    var isValid = true;

    // Reset error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Validate Name
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Please enter your name';
        isValid = false;
    }

    // Validate Email
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate Message
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Please enter your message';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    // Basic email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
