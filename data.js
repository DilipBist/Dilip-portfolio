export const skills = [
    { name: 'Figma', image: './image/figma.png', percentage: '70%' },
    { name: 'HTML', image: './image/html.png', percentage: '95%' },
    { name: 'CSS', image: './image/css.png', percentage: '90%' },
    { name: 'SASS', image: './image/sass.png', percentage: '50%' },
    { name: 'Bootstrap', image: './image/bootstrap.png', percentage: '60%' },
    { name: 'Tailwind', image: './image/tailwind.png', percentage: '60%' },
    { name: 'JavaScript', image: './image/js.png', percentage: '60%' },
    { name: 'jQuery', image: './image/jquery.png', percentage: '80%' },
    { name: 'React', image: './image/react.png', percentage: '60%' }
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
        image: 'image/todo.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Todo_List-JS-/',
        codeLink: 'https://github.com/DilipBist/Todo_List-JS-'
    },
    {
        type: 'mini',
        title: 'Counter +/- (JS)',
        image: 'image/counter.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Counter-Mini-Project/',
        codeLink: 'https://github.com/DilipBist/Counter-Mini-Project'
    },
    {
        type: 'mini',
        title: 'News Fetching Website',
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
        demoLink: 'https://dilipbist.github.io/E-commerce-website/index.html',
        codeLink: 'https://github.com/DilipBist/E-commerce-website'
    },
   
    {
        type: 'main',
        title: 'Food Recipe Search Website',
        image: 'image/food_search.png',
        languages: ['HTML', 'Vanilla CSS', 'Vanilla JS'],
        demoLink: 'https://dilipbist.github.io/Food_Recipes_Website/',
        codeLink: 'https://github.com/DilipBist/Food_Recipes_Website'
    }
];

