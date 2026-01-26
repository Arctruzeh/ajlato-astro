import projectImage1 from '../assets/images/react2.png';
import projectImage2 from '../assets/images/gori.jpg';
import projectImage3 from '../assets/images/fizzbuzz.jpg';
import projectImage4 from '../assets/images/pic01.jpg';
import projectImage5 from '../assets/images/pic02.jpg';
import projectImage6 from '../assets/images/moolameter.png';
import type { ImageMetadata } from 'astro';

export interface Project {
    name: string;
    description: string;
    detailedDescription: string;
    image: ImageMetadata;
    github: string;
    liveDemo?: string | null;
    technologies: string[];
    features: string[];
    dateCreated: string;
    challenges: string;
    solutions: string;
    questions?: { q: string, a: string }[];
    interactionGroups?: { title: string, steps: string[] }[];
    architecture?: string;
}

export const projects = {
    'corporate-responsibility': {
        name: "Corporate Responsibility",
        description: "Generates a random corporate responsibility with a matching background. Utilizes ReactJS and two API's",
        detailedDescription: "This interactive web application generates random corporate responsibility statements paired with matching background images. The app combines professional-sounding corporate jargon with visually appealing backgrounds to create unique, shareable content that playfully satirizes corporate culture.",
        image: projectImage1,
        github: "https://github.com/Arctruzeh/react-job-requirements-generator",
        liveDemo: "https://corporate-responsibility.netlify.app",
        technologies: ["React", "JavaScript", "CSS3", "REST API", "Unsplash API", "Corporate BS Generator API"],
        features: [
            "Dynamic content generation with each click",
            "Integration with multiple external APIs",
            "Responsive design for all device sizes",
            "Elegant transitions between content changes",
            "One-click regeneration for new combinations"
        ],
        dateCreated: "June 2023",
        challenges: "The main challenge was coordinating multiple API calls efficiently while ensuring the background image thematically matched the generated text. Additionally, handling potential API failures gracefully without disrupting the user experience required careful error handling.",
        solutions: "I implemented async/await patterns with proper error handling to manage API requests. For theme matching, I developed an algorithm that analyzes key terms in the generated text and sends relevant search queries to the Unsplash API. A loading state with attractive animation keeps users engaged during API calls."
    },
    'g-or-i': {
        name: "G or I",
        description: "Generates a question and checks your answer.",
        detailedDescription: "'G or I' is an interactive language learning tool designed to help users master the correct usage of words containing 'g' or 'i' in various languages. The application presents users with challenging word choices and provides immediate feedback on their answers, helping to reinforce proper spelling and language rules.",
        image: projectImage2,
        github: "https://github.com/Arctruzeh/gori",
        liveDemo: "https://projects.ajlato.com/gori",
        technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API", "Responsive Design"],
        features: [
            "Custom-built question database with varying difficulty levels",
            "Score tracking and progress monitoring",
            "Detailed explanations for correct answers",
            "Mobile-friendly interface for learning on the go",
            "Session persistence using browser storage"
        ],
        dateCreated: "August 2023",
        challenges: "Creating a comprehensive question database that covered various linguistic edge cases was time-consuming. Additionally, designing an algorithm that would present questions in an optimal learning sequence rather than purely random order required careful consideration.",
        solutions: "I developed a tagging system for questions to categorize them by difficulty and linguistic rules. This allowed for implementing a spaced repetition algorithm that presents challenging questions more frequently while gradually introducing new concepts. User performance data is stored locally to personalize the learning experience."
    },
    'fizzbuzz': {
        name: "FizzBuzz",
        description: "Count from 1 to 100, outputing fizz when divisible by 3, buzz when divisible by 5, and fizzbuzz when both are true.",
        detailedDescription: "My implementation of the classic FizzBuzz programming challenge features an interactive visualization that brings the algorithm to life. While seemingly simple, this project demonstrates clean code principles, algorithmic thinking, and creative front-end presentation of a common programming exercise.",
        image: projectImage3,
        github: "https://github.com/arctruzeh/fizzbuzz",
        liveDemo: "https://arctruzeh-fizzbuzz.netlify.app",
        technologies: ["JavaScript", "HTML5", "CSS3", "Animation", "Responsive Design"],
        features: [
            "Visual representation of the FizzBuzz sequence",
            "Interactive controls to adjust parameters (count range, divisors)",
            "Step-by-step execution with animation",
            "Educational explanations of the algorithm",
            "Code snippets in multiple programming languages"
        ],
        dateCreated: "March 2023",
        challenges: "While the FizzBuzz algorithm itself is straightforward, creating an engaging and interactive visualization presented unique challenges. The project needed to be both educational for programming beginners and interesting for experienced developers.",
        solutions: "I implemented a staged reveal animation that helps users visualize how the algorithm evaluates each number. The interface allows users to customize parameters, demonstrating how small changes affect the output. Code samples in various languages provide educational value for developers learning new syntax."
    },
    'calculator': {
        name: "Calculator",
        description: "PHP calculator using OOP. For demonstration purposes only.",
        detailedDescription: "This calculator application demonstrates object-oriented programming principles in PHP. Unlike typical calculator implementations, this project focuses on clean architecture, with separate classes handling different calculation operations, input validation, and output formatting.",
        image: projectImage4,
        github: "https://github.com/arctruzeh/calculator",
        liveDemo: null,
        technologies: ["PHP", "Object-Oriented Programming", "HTML5", "CSS3", "MVC Pattern"],
        features: [
            "Support for basic arithmetic operations",
            "Memory functions for storing and recalling values",
            "Comprehensive error handling for invalid inputs",
            "Clean separation of concerns with MVC architecture",
            "Unit tests demonstrating code reliability"
        ],
        dateCreated: "November 2023",
        challenges: "Designing a truly object-oriented calculator required careful consideration of class responsibilities and interactions. Ensuring mathematical operations handled edge cases correctly (division by zero, floating-point precision issues) while maintaining clean code organization was particularly challenging.",
        solutions: "I implemented a Strategy pattern for different operations, allowing for easy extension with new mathematical functions. A dedicated validation layer prevents invalid calculations, and custom exception classes provide meaningful error messages. The project uses dependency injection to improve testability."
    },
    'login': {
        name: "Login",
        description: "PHP login system using OOP. For demonstration purposes only.",
        detailedDescription: "This project showcases a secure, object-oriented login system implemented in PHP. It demonstrates best practices for user authentication, password hashing, session management, and protection against common security vulnerabilities such as SQL injection and cross-site scripting (XSS).",
        image: projectImage5,
        github: "https://github.com/arctruzeh/login",
        liveDemo: null,
        technologies: ["PHP", "Object-Oriented Programming", "MySQL", "Password Hashing", "Session Management", "Security Best Practices"],
        features: [
            "Secure password storage using modern hashing algorithms",
            "Protection against brute force attacks with login throttling",
            "CSRF token implementation for form submissions",
            "Secure session management with proper timeout handling",
            "Comprehensive input validation and sanitization",
            "User-friendly error messages with appropriate information disclosure"
        ],
        dateCreated: "December 2023",
        challenges: "Building a secure login system requires addressing numerous security considerations simultaneously. Balancing security with usability, handling session management correctly, and implementing proper password policies all presented significant challenges.",
        solutions: "I implemented the system using PHP's password_hash and password_verify functions with appropriate cost factors. A dedicated SecurityService class handles CSRF protection, input sanitization, and other security concerns. The database interactions use prepared statements exclusively to prevent SQL injection, and all user-facing output is properly escaped."
    },
    'moolameter': {
        name: "MoolaMeter",
        description: "A comprehensive personal finance management and planning application built with Laravel and React.",
        detailedDescription: "MoolaMeter is a professional-grade personal finance tool designed to solve financial uncertainty. It handles complex income sources (W-2, 1099), estimates annual taxes for freelancers, and provides 30-day cash flow predictions. Built as a modern SPA using Laravel and React via Inertia.js, it offers a seamless, high-performance experience for tracking expenses and optimizing credit card rewards.",
        image: projectImage6,
        github: "https://github.com/Arctruzeh/moolameter",
        liveDemo: "https://moolameter.com",
        technologies: [
            "PHP 8.4",
            "Laravel 12",
            "React 18",
            "Inertia.js",
            "Tailwind CSS 4",
            "PostgreSQL",
            "Chart.js",
            "Pest",
            "Vitest"
        ],
        features: [
            "Complete financial picture visibility",
            "W-2 and 1099 mixed income tax calculations",
            "30-day cash flow balance projections",
            "Fixed vs. variable expense categorization",
            "Credit card cash back optimization engine",
            "Automated annual tax obligation estimation"
        ],
        dateCreated: "2024 - Present",
        challenges: "One of the primary challenges was building a real-time projection engine that could accurately reflect the impact of scheduled bills and irregular income on future account balances, while simultaneously calculating complex tax withholdings for multiple income types.",
        solutions: "I implemented a robust projection algorithm in Laravel that processes recurrence rules and tax logic server-side, then delivers the data through Inertia.js to a responsive React frontend. Using Chart.js, I created interactive visualizations that allow users to explore their financial future day-by-day.",
        questions: [
            { q: "Can I afford this purchase?", a: "Check the 30-day projection to see the impact on your future balance." },
            { q: "How much will I owe in taxes?", a: "The annual tax estimate provides real-time calculations based on your income." },
            { q: "Where does my money go?", a: "Organized categories and historical data provide a clear breakdown of spending." },
            { q: "Which card gives me the most cash back?", a: "The credit card optimizer recommends the best card based on the current purchase category." },
            { q: "When will I run out of money?", a: "Cash flow projections highlight potential low-balance points well in advance." }
        ],
        interactionGroups: [
            {
                title: "Initial Setup",
                steps: [
                    "Register and set tax preferences (filing status, dependents, etc.)",
                    "Add income sources (W-2, freelance, side hustles) with frequency and withholding",
                    "Add bills and expenses (rent, utilities, groceries) with due dates and recurrence",
                    "Set starting account balance and optional credit card reward rules"
                ]
            },
            {
                title: "Daily/Ongoing Use",
                steps: [
                    "Dashboard: Overview of current balance and 30-day projection",
                    "Financial Overview: Interactive budget breakdown by category",
                    "Projections: Day-by-day cash flow charts",
                    "Cash Back: Real-time card recommendations for purchases"
                ]
            }
        ],
        architecture: "MoolaMeter is built as a Laravel + React SPA using Inertia.js as the bridge. This approach allows for server-side routing and data fetching with the responsiveness of a client-side React application. It leverages PostgreSQL for production data, Laravel Sanctum for secure API authentication, and Tailwind CSS 4 for a cutting-edge, high-performance UI."
    }
} as Record<string, Project>;
