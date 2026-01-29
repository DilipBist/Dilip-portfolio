import { projects, renderSkills, skills } from './data.js'
AOS.init();

// THEME CHANGE
const themeChange = document.querySelector('.theme_change');
const textChange = document.getElementById('light');
const body = document.querySelector('body');
const sun = document.querySelector('.bxs-sun');

// Check localStorage for saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    // console.log(savedTheme);

    if (savedTheme === 'light') {
        body.classList.add('light_theme_color');
        textChange.textContent = "light";
        sun.classList.replace('bxs-moon', 'bxs-sun');
    } else {
        body.classList.remove('light_theme_color');
        textChange.textContent = "dark";
        sun.classList.replace('bxs-sun', 'bxs-moon');
    }
});

// Toggle theme and store the preference in localStorage
themeChange.addEventListener('click', () => {
    body.classList.toggle('light_theme_color');

    if (body.classList.contains('light_theme_color')) {
        textChange.textContent = "light";
        sun.classList.replace('bxs-moon', 'bxs-sun');
        localStorage.setItem('theme', 'light');  // Store light theme
    } else {
        textChange.textContent = "dark";
        sun.classList.replace('bxs-sun', 'bxs-moon');
        localStorage.setItem('theme', 'dark');   // Store dark theme
    }
});


//* ON SCROLL SHOW NAV FIXED
const navBar = document.querySelector('header');

window.onscroll = function () {
    if (window.scrollY > 120) {
        navBar.classList.add('fixed');
    }
    else {
        navBar.classList.remove('fixed');
    }
};

//  MENU BAR SHOW HIDE  
const menuBar = document.querySelector('.menu_bar i');
const navLinks = document.querySelector('.nav_links ul');
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('bx-x');
    menuBar.style.transform = menuBar.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    navLinks.classList.toggle('show');
});


//* ON CLICK SCROLL TOP 
const topScroll = document.querySelector('.top_scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        topScroll.style.display = "block";
    }
    else {
        topScroll.style.display = "none";
    }
});

topScroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

// Show current Date 
const currentDate = document.getElementById('date');
const year = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const month = monthNames[new Date().getMonth()];
currentDate.innerHTML = `<b> ${year} ${month}</b>`;

// TYPING EFFECT 
const typedText = document.getElementById("typed-text");
const text = "Frontend Web Developer & Designer";
let index = 0;
let typingSpeed = 150;  // Speed for typing
let deletingSpeed = 30;  // Speed for deleting
let pauseDuration = 500; // Duration to pause after typing the full text

if (typedText) { // Check if element exists
    function type() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, pauseDuration);
        }
    }

    function deleteText() {
        if (index > 0) {
            typedText.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            setTimeout(type, pauseDuration);
        }
    }
    type();
}

// load the skills using the JavaScript 

renderSkills(skills);


// Render projects 
function renderProjectData() {
    const container = document.getElementById('project-container');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => {
        return `
        <div class="col-md-6 col-lg-4 mix ${project.filters.join(' ')}">

            <div class="product_list_parent">

                <div class="project_list">
                    <img src="${project.image}" alt="${project.title}">

                    <div class="product_content">
                        <p class="language_used">
                            ${project.tech.map(t => `<span>${t}</span>`).join('')}
                        </p>

                        <div class="code_btn">
                            <a href="${project.demoLink}" target="_blank">Project Demo</a>
                            <a href="${project.codeLink}" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-center mt-3 gap-1 flex-column">
                    <p>${project.title}</p>
                    ${project.company ? `
                        <p>
                            <strong>
                                <a href="https://megaweblink.com.np/" target="_blank">
                                    ${project.company}
                                </a>
                            </strong>
                        </p>` : ''}
                </div>

                <small>${project.description}</small>
            </div>
        </div>
        `;
    }).join('');
}


document.addEventListener("DOMContentLoaded", () => {
    renderProjectData();
    var mixer = mixitup('#project-container', {
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 500
        }
    });

    new Typed("#typing", {
        strings: ["Front-End Developer", "Web Designer"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
});