export const skills = [
    { name: 'Figma', image: './image/figma.png', percentage: '70%' },
    { name: 'HTML', image: './image/html.png', percentage: '95%' },
    { name: 'CSS', image: './image/css.png', percentage: '90%' },
    { name: 'SASS', image: './image/sass.png', percentage: '90%' },
    { name: 'Bootstrap', image: './image/bootstrap.png', percentage: '60%' },
    { name: 'Tailwind', image: './image/tailwind.png', percentage: '95%' },
    { name: 'JavaScript', image: './image/js.png', percentage: '60%' },
    { name: 'jQuery', image: './image/jquery.png', percentage: '60%' },
    { name: 'React', image: './image/react.png', percentage: '70%' }
];

export function renderSkills(skills) {
    let skillHtml = '';
    skills.forEach((skill) => {
        skillHtml += `
        <div class="flex_center">
        <div class="tool_icon">
        <img src="${skill.image}" alt="">
        <p>${skill.percentage}</p>
        </div>
        <p>${skill.name}</p>
        </div>
        
        `
    })
    
    const skillContainer = document.getElementById('js_skill_Container');
    skillContainer.innerHTML = skillHtml;
}

// Array of projects
export const projects = [
    {
        type: 'mini',
        title: 'Todo List (JS)',
        smalldescription: 'A basic Todo list where we can add the list with  date  and also delete the list manually.',
        image: 'image/todo.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Todo_List-JS-/',
        codeLink: 'https://github.com/DilipBist/Todo_List-JS-'
    },
    {
        type: 'mini',
        title: 'Counter +/- (JS)',
        smalldescription: 'we can increment and decrement by clicking to button and also icrement or decrement by the inputed value.',
        image: 'image/counter.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Counter-Mini-Project/',
        codeLink: 'https://github.com/DilipBist/Counter-Mini-Project'
    },
    {
        type: 'mini',
        title: 'News Website',
        smalldescription: 'Fetching data from API(newsapi.org) and displaying data also with some filtering pages.',
        image: 'image/newsjs.png',
        languages: ['HTML', 'Tailwind CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/News_Fetch_Website/',
        codeLink: 'https://github.com/DilipBist/News_Fetch_Website'
    },
    {
        type: 'main',
        title: 'E-commerce Website',
        image: 'image/s.png',
        languages: ['HTML', 'Vanilla CSS', 'Responsive Design'],
        smalldescription: 'Users can see the products, view the product according to category (like men, women, etc).',
        demoLink: 'https://dilipbist.github.io/E-commerce-website/index.html',
        codeLink: 'https://github.com/DilipBist/E-commerce-website'
    },
    {
        type: 'main',
        title: 'Clone Website',
        smalldescription: 'clone website of digitalshauji. Developed using React and TailwindCSS',
        image: 'image/electronic.png',
        languages: ['React', 'Tailwind CSS', 'Responsive Design'],
        demoLink: 'https://electronic-e-commerce.vercel.app/',
        codeLink: 'https://github.com/DilipBist/Electronic-e-commerce'
    },
   
    {
        type: 'mini',
        title: 'Food Recipe Search Website',
        smalldescription: 'Fetching data from API and also with the search functionality.',
        image: 'image/food_search.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Food_Recipes_Website/',
        codeLink: 'https://github.com/DilipBist/Food_Recipes_Website'
    },
   
    {
        type: 'main',
        title: 'Ice-Cream Website',
        smalldescription: 'Website where user can view the ice-cream details and also know about the company.',
        image: 'image/ice.png',
        languages: ['HTML', 'SCSS', 'Vanilla JS'],
        demoLink: 'https://ice-cream-website-seven.vercel.app/',
        codeLink: 'https://github.com/DilipBist/Ice-cream-Website'
    },
    {
        type: 'main',
        title: 'Home Page Desing ',
        smalldescription: 'Home page desing of the car rentail and service website design',
        image: 'image/homepagedesign.png',
        languages: ['HTML', 'Tailwind CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/CarRental-HomePage/',
        codeLink: 'https://github.com/DilipBist/CarRental-HomePage'
    }
];

