export type Project = {
    name: string,
    description: string,
    image: string,
    repoLink?: string,
    webLink?: string
}

export const projects = [
    {
        name: 'Quiz App',
        description: 'A short Quiz of various topics with and API to bring the questions. Made with React and Typescript.',
        image: '/project01.png',
        repoLink: 'https://github.com/joafran/ts-project-quiz-app',
        webLink: 'https://react-typescriptquiz-app.netlify.app/'
    },
    {
        name: 'First Portfolio',
        description: 'My first Portfolio made with React.',
        image: '/project02.png',
        repoLink: 'https://github.com/joafran/portfolio',
        webLink: 'https://joafran.github.io/portfolio/'
    },
    {
        name: 'Todo-List',
        description: 'A Todo-List made with Vanilla Javascript, HTML and CSS. It works with localStorage.',
        image: '/project03.png',
        repoLink: 'https://github.com/joafran/todo-list',
        webLink: 'https://joafran.github.io/todo-list/'
    },
    {
        name: 'Landing Page',
        description: 'A simple landing page made with HTML, CSS, Jquery and GSAP.',
        image: '/project04.png',
        repoLink: 'https://github.com/joafran/landing-page',
        webLink: 'https://joafran.github.io/landing-page/'
    },
    {
        name: 'Dubsnip',
        description: `An e-commerce made with a team of 6 members during a month.
        Some features: Sign in, Sign up, Auth with Google, Purchase, delete or add a product to cart, Admin Panel, etc.
        This project was made with React-Redux, Node-Express and PostgreSQL`,
        image: '/dubsnip.png',
        repoLink: '',
        webLink: 'https://dubsnip.vercel.app'
    },
    {
        name: 'integrAR',
        description: `A mobile app that simulate an educational institution, specifically a High School and it has three diferents profiles (Teacher, Student and Administrator).
        This app was made with Javascript, React Native, GraphQL and MongoDB.`,
        image: '/project05.png',
        repoLink: '',
        webLink: ''
    },
]