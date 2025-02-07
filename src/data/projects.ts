import projectImage1 from '../assets/images/react2.png';
import projectImage2 from '../assets/images/gori.jpg';
import projectImage3 from '../assets/images/fizzbuzz.jpg';
import projectImage4 from '../assets/images/pic01.jpg';
import projectImage5 from '../assets/images/pic02.jpg';

export const projects = {
    'corporate-responsibility': {
        name: "Corporate Responsibility",
        description: "Generates a random corporate responsibility with a matching background. Utilizes ReactJS and two API's",
        image: projectImage1,
        github: "https://github.com/Arctruzeh/react-job-requirements-generator"
    },
    'g-or-i': {
        name: "G or I",
        description: "Generates a question and checks your answer.",
        image: projectImage2,
        github: "https://github.com/Arctruzeh/gori"
    },
    'fizzbuzz': {
        name: "FizzBuzz",
        description: "Count from 1 to 100, outputing fizz when divisible by 3, buzz when divisible by 5, and fizzbuzz when both are true.",
        image: projectImage3,
        github: "https://github.com/arctruzeh/fizzbuzz"
    },
    'calculator': {
        name: "Calculator",
        description: "PHP calculator using OOP. For demonstration purposes only.",
        image: projectImage4,
        github: "https://github.com/arctruzeh/calculator"
    },
    'login': {
        name: "Login",
        description: "PHP login system using OOP. For demonstration purposes only.",
        image: projectImage5,
        github: "https://github.com/arctruzeh/login"
    }
} as const;
