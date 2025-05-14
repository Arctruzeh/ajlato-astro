import projectImage1 from '../assets/images/react2.png';
import projectImage2 from '../assets/images/gori.jpg';
import projectImage3 from '../assets/images/fizzbuzz.jpg';
import projectImage4 from '../assets/images/pic01.jpg';
import projectImage5 from '../assets/images/pic02.jpg';
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
        liveDemo: "https://g-or-i.netlify.app",
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
    }
} as Record<string, Project>;
