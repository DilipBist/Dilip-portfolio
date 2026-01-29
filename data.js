export const skills = [
    { name: 'Figma', image: './image/figma.png', percentage: '70%' },
    { name: 'HTML', image: './image/html.png', percentage: '95%' },
    { name: 'CSS', image: './image/css.png', percentage: '90%' },
    { name: 'SASS', image: './image/sass.png', percentage: '90%' },
    { name: 'Bootstrap', image: './image/bootstrap.png', percentage: '95%' },
    { name: 'Tailwind', image: './image/tailwind.png', percentage: '80%' },
    { name: 'JavaScript', image: './image/js.png', percentage: '60%' },
    { name: 'jQuery', image: './image/jquery.png', percentage: '60%' },
    { name: 'React', image: './image/react.png', percentage: '60%' }  , 
     { name: 'WordPress', image: './image/wordpress.png', percentage: '60%' }
];

export function renderSkills(skills) {
    let skillHtml = '';

    skills.forEach((skill, index) => {
        skillHtml += `
        <div class="flex_center" 
             data-aos="fade-up" 
             data-aos-duration="800" 
             data-aos-delay="${index * 150}">
            <div class="tool_icon">
                <img src="${skill.image}" alt="">
            </div>
            <p>${skill.name}</p>
        </div>
        `;
    });
    //  <p>${skill.percentage}</p>
    const skillContainer = document.getElementById('js_skill_Container');
    skillContainer.innerHTML = skillHtml;

    // Reinitialize AOS after rendering dynamic content
    AOS.refresh();
}


// Array of projects
export const projects = [

    {
        title: 'Himalayan Restaurant',
        image: 'image/himalayan.png',
        description:
            'Official website for Himalayan Restaurant, showcasing authentic Himalayan cuisine, luxury dining experiences, and elegant event spaces. Designed to highlight brand identity, menu offerings, and customer engagement.',
        filters: ['javascript'],
        tech: ['HTML', 'Bootstrap', 'JavaScript'],

        demoLink: 'https://himalayanrestro.com/',
        codeLink: '#',
        company: 'Mega Web Link'
    },

    {
        title: 'Maatson',
        image: 'image/maatson.png',
        description:
            'Maatson Trucking School website designed to promote CDL training programs, hands-on driving experience, and career support services, delivering clear information and a professional online presence.',
        filters: ['wordpress'],
        tech: ['HTML', 'Bootstrap', 'jQuery', 'WordPress'],

        demoLink: 'https://maatson.megaweblinkinc.com/',
        codeLink: '#',
        company: 'Mega Web Link'
    },
    {
        title: 'Irish',
        image: 'image/irish.png',
        description:
            'Professional website for Irish Flooring, showcasing high-quality flooring installation and finishing services for residential and commercial projects, with a focus on craftsmanship and reliability.',
        filters: ['wordpress'],
        tech: ['HTML', 'Bootstrap', 'jQuery', 'WordPress'],

        demoLink: 'https://demo.wordpress.megaweblinks.com/irish/',
        codeLink: '#',
        company: 'Mega Web Link'
    },

    {
        title: 'Manya E-commerce',
        image: 'image/manya.png',
        description:
            'Manya is a modern e-commerce platform offering quality products, seamless navigation, and a user-friendly shopping experience with a focus on performance and accessibility.',
        filters: ['javascript'],
        tech: ['HTML', 'Bootstrap', 'JavaScript'],

        demoLink: 'https://store-manya.megaweblinkinc.com/',
        codeLink: '#',
        company: 'Mega Web Link'
    },

    {
        title: 'Galway Web Design',
        image: 'image/galway.png',
        description:
            'Corporate website for Galway Web Design, highlighting professional website design and monthly management services tailored for businesses seeking reliable digital solutions.',
        filters: ['javascript'],
        tech: ['HTML', 'Bootstrap', 'jQuery'],
        demoLink: 'https://galwaywebdesigns.ie/',
        codeLink: '#',
        company: 'Mega Web Link'
    },


    {
        title: 'E-commerce Website',
        image: 'image/s.png',
        description:
            'Personal e-commerce project demonstrating product listing, category-based, and responsive layout using modern front-end development practices.',
        filters: ['javascript'],
        tech: ['HTML', 'Vanilla CSS', 'Responsive Design'],

        demoLink: 'https://dilipbist.github.io/E-commerce-website/index.html',
        codeLink: 'https://github.com/DilipBist/E-commerce-website'
    },

    {
        title: 'Clone Website',
        image: 'image/electronic.png',
        description:
            'React-based website clone developed to demonstrate component-based architecture, responsive design, and modern UI implementation using Tailwind CSS.',
        filters: ['react'],
        tech: ['React', 'Tailwind CSS', 'Responsive Design'],

        demoLink: 'https://electronic-e-commerce.vercel.app/',
        codeLink: 'https://github.com/DilipBist/Electronic-e-commerce'
    },

    {
        title: 'Ice-Cream Website',
        image: 'image/ice.png',
        description:
            'Interactive ice-cream website showcasing product details and company information, built with a clean UI and smooth user experience across devices.',
        filters: ['javascript'],
        tech: ['HTML', 'SCSS', 'Vanilla JS'],

        demoLink: 'https://ice-cream-website-seven.vercel.app/',
        codeLink: 'https://github.com/DilipBist/Ice-cream-Website'
    }
];
