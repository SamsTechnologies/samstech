/* *************** toggle icon navbar *******************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xing');
    navbar.classList.toggle('active');
}


/* *************** active links *******************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');

            })
        }
    })

    /* *************** sticky navbar*******************/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY>100);

    /* *************** remove toggle icon and navbar when click navbar link *******************/

    menuIcon.classList.remove('fa-xing');
    navbar.classList.remove('active');
}
scrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
});
scrollReveal().reveal('.home-content, .heading', {origin:'top'});
scrollReveal().reveal('.home-img, services-container, .portfolio-box .contact form', {origin:'bottom'});
scrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
scrollReveal().reveal('.home-content p, .about-content', {origin:'right'});


const typed = new Typed('.multiple-text',{
    Strings:['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed : 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true

})

const aboutMe = document.querySelector('.about-content p')
const readMore = document.querySelector('.readMore')

readMore.addEventListener('click', ()=>{
    let aboutI ="Hello, I'm Samson Akali, a passionate web developer who is currently on an exciting journey of learning and growth. With a focus on web development, I have acquired skills in HTML, CSS, Bootstrap, and JavaScript. I believe that the web has the power to connect people, solve problems, and create meaningful experiences. Through my projects and ongoing learning, I am dedicated to honing my skills and staying up-to-date with the latest industry trends. I have already completed several simple projects that have allowed me to apply my knowledge and gain practical experience. Each project has been a stepping stone towards becoming a well-rounded web developer. My approach to web development is centered around creating user-friendly and visually appealing websites. I strive to ensure that every website I build is not only functional but also provides a seamless and enjoyable experience for its users. In addition to my technical skills, I am a strong believer in collaboration and teamwork. I enjoy working with others to bring ideas to life and solve problems together. I am always open to new opportunities and challenges that allow me to grow both personally and professionally. Outside of web development, I have a variety of interests that keep me inspired and motivated. Whether it's exploring new technologies, staying active in the developer community, or seeking out new learning resources, I am constantly seeking ways to expand my knowledge and skills. Thank you for taking the time to learn a little bit about me. I am excited about the possibilities that lie ahead and look forward to connecting with others who share a passion for web development. If you have a project or an opportunity you'd like to discuss, please don't hesitate to reach out. Let's create something amazing together!"
    if (aboutMe.textContent != aboutI) {
        aboutMe.textContent = aboutI
        readMore.textContent='Read Less'
    } else {
        aboutMe.textContent="Hello, I'm Samson Akali, a passionate web developer who is currently on an exciting journey of learning and growth. With a focus on web development,I have acquired skills in HTML, CSS, Bootstrap, and JavaScript."
        readMore.textContent='Read More'
    }
})

// send data to my email

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailSub = document.getElementById("emailSub").value;
    var message = document.getElementById("text").value;
    var phone = document.getElementById("phone").value;
    
    var mailtoLink = "okindasamsonakali@gmail.com" +
      "?subject=" + encodeURIComponent("Contact Form Submission") +
      "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nEmail subject: " + emailSub + "\nPhone: " + phone  + "\nMessage: " + message);
    
    window.location.href = mailtoLink;
  }
