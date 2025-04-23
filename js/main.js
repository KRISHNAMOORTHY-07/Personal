// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav_toggle','nav_menu');

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// GLOWING BUTTON ANIMATION ON CLICK
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 500);
    });
});

// SEND EMAIL
function sendEmail(){
    const email = "asbose14102004@gmail.com";
    const subject = "Test Email";
    const msgBody = "Thank you for contacting us, we will get back to you in 24 hours!";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

// SCROLL REVEAL EFFECT USING INTERSECTION OBSERVER
const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
