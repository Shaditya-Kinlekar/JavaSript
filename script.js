const projects = [
    {
        title: 'Project 1 - Guess My Number 🎮',
        description: 'Guess a random number between 1 and 20.',
        link: 'Projects/1 Guess My Number/index.html',
    },
    {
        title: 'Project 2 - Modal Window 🚀',
        description: 'Web page with a modal window that can be closed.',
        link: 'Projects/2 Modal Window/index.html',
    },
    {
        title: 'Project 3 - Pig Game 🐷',
        description: 'Interactive dice game to reach 100 points first.',
        link: 'Projects/3 Pig Game/index.html',
    },
    {
        title: 'Project 4 - Typing Test 🎮',
        description: 'Measure typing speed and accuracy in a text.',
        link: 'Projects/4 Typing Test/index.html',
    },
    {
        title: 'Project 5 - Todo List 📝',
        description: 'Create, edit, and delete tasks in a list.',
        link: 'Projects/5 Todo-List/index.html',
    },
    {
        title: 'Project 6 - Stop Watch ⏱️',
        description: 'Stop watch app with start, stop, and reset.',
        link: 'Projects/6 Stop Watch/index.html',
    },
    {
        title: 'Project 7 - Todo 📝',
        description: 'Create, edit, and delete tasks with filters.',
        link: 'Projects/7 Todo/index.html',
    },
    {
        title: 'Project 8 - Area of Shapes 🌐',
        description: 'Calculate area of circles, triangles, rectangles, and trapezoids.',
        link: 'Projects/8 Area-of-Shapes/index.html',
    },
    {
        title: 'Project 9 - Color Changer 🎨',
        description: 'Change background color with a color picker.',
        link: 'Projects/9 colorChanger/index.html',
    },
    {
        title: 'Project 10 - BMI Calculator 🧮',
        description: 'Calculate BMI with height and weight inputs.',
        link: 'Projects/10 BMICalculator/index.html',
    },
    {
        title: 'Project 11 - Digital Clock 🕒',
        description: 'Display current time and date with timezone.',
        link: 'Projects/11 DigitalClock/index.html',
    },
    {
        title: 'Project 12 - Guess The Number 🎮',
        description: 'Guess a random number between 1 and 100 with hints.',
        link: 'Projects/12 GuessTheNumber/index.html',
    },
    {
        title: 'Project 13 - Keyboard ⌨️',
        description: 'Simulate a keyboard with sound effects.',
        link: 'Projects/13 keyboard/index.html',
    },
    {
        title: 'Project 14 - Unlimited Colors 🌈',
        description: 'Generate random colors and their hexadecimal codes.',
        link: 'Projects/14 unlimitedColors/index.html',
    },
];

const container = document.getElementById('projects-container');

projects.forEach((project) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const title = document.createElement('h2');
    title.setAttribute('class', 'card-title');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.setAttribute('class', 'card-description');
    description.textContent = project.description;

    const link = document.createElement('a');
    link.setAttribute('class', 'card-link');
    link.textContent = 'View Project';
    link.href = project.link;

    // Append title, description, and link elements to card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    // Append card to container
    container.appendChild(card);
});
