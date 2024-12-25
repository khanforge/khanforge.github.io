export const aboutText = {
    text: "Welcome to my portfolio! I'm Parvej Khan, a passionate tech enthusiast and aspiring computer scientist currently pursuing my Master of Technology in Computer Science and Engineering at NIT Delhi. With hands-on experience in diverse domains such as web development, game design, and machine learning, I thrive on crafting innovative solutions to real-world challenges. From building immersive VR training simulations at DRDO to developing efficient web platforms and interactive tools, I am dedicated to blending creativity and technology to drive impactful results. My journey is fueled by a commitment to continuous learning and a drive to explore the ever-evolving tech landscape."
}

export const bioData = [
    {
        field: "Name",
        value: "Parvej Khan"
    },
    {
        field: "DOB",
        value: "04 Aug. 1999"
    },
    {
        field: "Language Spoken",
        value: "Hindi, English"
    },
    {
        field: "Nationality",
        value: "Indian"
    },
    {
        field: "Hobbies",
        value: "Travel, Cooking, & Music"
    }
]

export const education = [
    {
        id: 0,
        field: "M.Tech",
        description: [
            {
                specialization: "Computer Science and Engineering",
                institution: "NIT Delhi",
                duration: "2023 - Present",
                score: "CGPA: 7.6"
            }
        ]
    },
    {
        id: 1,
        field: "B.Tech",
        description: [
            {
                specialization: "Information Technology",
                institution: "JSS Academy of Technical Education, Noida",
                duration: "2018 - 2021",
                score: "CGPA: 7.9"
            }
        ]
    },
    {
        id: 2,
        field: "Diploma",
        description: [
            {
                specialization: "Computer Science and Engineering",
                institution: "Govt. Polytechnic Rampur",
                duration: "2015 - 2018",
                score: "Percentage: 75%"
            }
        ]
    }
];

export const experience = [
    {
        id: 0,
        field: "Teaching Assistant",
        description: [
            {
                specialization: "Data Structures and Machine Learning Support",
                institution: "NIT Delhi",
                duration: "Aug 2023 – Present",
                score: "Led tutorials, graded assignments, and improved teaching methods."
            }
        ]
    },
    {
        id: 1,
        field: "Game Development Intern",
        description: [
            {
                specialization: "Multiplayer VR Shooter Game Development",
                institution: "DRDO",
                duration: "Aug 2020 – July 2021",
                score: "Created realistic scenarios, 3D models, and multiplayer interactions using Unity."
            }
        ]
    },
    {
        id: 2,
        field: "Web Development Intern",
        description: [
            {
                specialization: "School Management ERP Development",
                institution: "JDMR Ischool Pvt. Ltd.",
                duration: "July 2020 – Oct 2020",
                score: "Built a Django-based ERP with responsive front-end and secure access."
            }
        ]
    }
];

export const projects = [
    {
        id: 0,
        projectName: "Multiplayer Game",
        githubUrl: "",
        imageUrl: "./projectImages/multiplayer.png",
        category: "3D Game",
        techStack: [
            "Unity3D",
            "PUN",
            "Blender",
            "Mixamo",
            "VR"
        ],
        description: "Designed a VR-enabled multiplayer shooter game for soldier training, featuring realistic scenarios such as combat, bomb defusal, and hostage rescue, developed with Unity and Photon Networking for seamless real-time interactions."
    },
    {
        id: 1,
        projectName: "Conference Portal",
        githubUrl: "https://github.com/khanforge/temsmet.github.io",
        imageUrl: "./projectImages/temsmet2025.png",
        category: "Web Development",
        techStack: [
            "React",
            "Tailwind CSS"
        ],
        description: "Currently developing a responsive and user-friendly website for the TEMSMET 2025 conference, hosted by the NIT Delhi Technology and Engineering Management Society. The platform is built using React for dynamic rendering and Tailwind CSS for modern, responsive design. It serves as a centralized hub for attendees, providing event schedules, speaker profiles, registration forms, and real-time updates. The website emphasizes accessibility and intuitive navigation, ensuring a seamless experience for users across devices. Integrated live updates and contact features to keep participants informed and engaged throughout the conference."
    },
    {
        id: 2,
        projectName: "Polyglot System",
        githubUrl: "https://github.com/khanforge/FlexiCart",
        imageUrl: "./projectImages/polyglot-system.png",
        category: "Web Development",
        techStack: [
            "Django",
            "MongoDB",
            "Bootstrap"
        ],
        description: "Built a dynamic e-commerce platform with Django, MongoDB, and a responsive UI for managing diverse product details."
    },
    {
        id: 3,
        projectName: "Movies Land",
        githubUrl: "https://github.com/khanforge/moviesLand",
        imageUrl: "./projectImages/movies-land.png",
        category: "Web App",
        techStack: [
            "React",
            "OMDb API"
        ],
        description: "Developed a React app to fetch and display movie details using the OMDb API with a user-friendly interface."
    },
    {
        id: 4,
        projectName: "Route Optimizer",
        githubUrl: "https://github.com/khanforge/pygame/blob/master/RouteOptimizer.py",
        imageUrl: "./projectImages/route-optimizer.png",
        category: "Desktop App",
        techStack: [
            "Pygame",
            "Python"
        ],
        description: "Created an interactive pathfinding visualizer to compute and display the shortest route using algorithms and animations."
    }
];

