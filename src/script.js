// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
 

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Replace with your EmailJS user ID, template ID, and service ID
const EMAILJS_USER_ID = '7-yHBsVi2LPGyU64C';
const EMAILJS_TEMPLATE_ID = 'template_qbm1cyi';
const EMAILJS_SERVICE_ID = 'service_5w6cf7y';

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetch form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Email berhasil dikirim!');
            // Clear form fields after successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            console.error('Email failed to send:', error);
            alert('Gagal mengirim email. Silakan coba lagi.');
        });
});

const text = "Back End Developer";
const typingSpeed = 100; // Kecepatan mengetik dalam milidetik
const delayBetweenLoops = 2000; // Waktu tunggu sebelum mulai mengetik ulang dalam milidetik

let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(() => {
            document.getElementById("typewriter-text").innerHTML = "";
            index = 0;
            type();
        }, delayBetweenLoops);
    }
}

window.onload = type;
