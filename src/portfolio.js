import { faPython, faJava, faSquareGit, faEnvira, faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faGithub, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// Website related settings
const settings = {
  isSplash: false,
};


// SEO Related Settings

const seo = {
    title: "Srinu's Protfolio",
    discription: 
        "A Full Stack Web Developer, Graphic Designer & UI/UX Designer. Skilled in designing, building & maintaining highly scalable and available software applications.",
    og: {
        title: "Srinivas Dharpally Portfolio",
        type: "website",
        url: "",

    },
}



//Home Page 

const greeting = {
    title : "Srinivas Dharpally",
    logo_name: "SrinivasDarpally",
    subTitle: "A Full Stack Web Developer with strong communication abilities and proficiency in DSA. Skilled in designing, building & maintaining highly scalable and available software applications.",
    resumeLink: "https://drive.google.com/file/d/11wjjvdmyi614rJ2ONR_yx8Mzs8nfSS7Z/view",
    portfolio_repository: "",
    githubProfile: "https://github.com/cnu1328",
};


// Soical Media Links 

const socialMediaLinks = [

    {
        name: "Gmail",
        link: "mailto:srinudarpally@gmail.com",
        fontAwesomeIcon: "fa-google",
        backgroundColor: "#D14836",
    }, 

    {
        name: "Github",
        link: "https://github.com/cnu1328",
        fontAwesomeIcon: "fa-github",
        backgroundColor: "#181717",
    }, 

    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/srinivas-dharpally/",
        fontAwesomeIcon: "fa-linkedin-in",
        backgroundColor: "#0077B5",
    }, 

    {
        name: "Instagram",
        link: "https://www.instagram.com/its__me_cnu/",
        fontAwesomeIcon: "fa-instagram",
        backgroundColor: "#E4405F",
    }, 
];


// Skills

const skills = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "Developing responsive website frontends with React, utilizing HTML, CSS, and JavaScript for dynamic user interfaces.",
                "Developing highly scalable and maintainable REST APIs exclusively using Node.js and Express.",
                "Integrating databases like MySQL, MongoDB, and PostgreSQL into application backends for optimal functionality.",
                "Utilizing Git and GitHub for version control, ensuring efficient collaboration and code management in projects.",
            ],

            

        softwareSkills: [
            {
                skillName: "HTML5",
                fontAwesomeClassname: faHtml5,
                style: {
                    color: "#E34F26",
                },
            },
            {
                skillName: "CSS",
                fontAwesomeClassname: faCss3Alt,
                style: {
                    color: "#1572B6",
                },
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: faJs,
                style: {
                    backgroundColor: "#000000",
                    color: "#F7DF1E",
                },
            },
            {
                skillName: "BootStrap",
                fontAwesomeClassname: faBootstrap,
                style: {
                    color: "#009CFF",
                },
            },
            {
                skillName: "ReactJS",
                fontAwesomeClassname: faReact,
                style: {
                    color: "#61DAFB",
                },
            },
            {
                skillName: "GitHub",
                fontAwesomeClassname: faGithub,
                style: {
                    backgroundColor: "transparent",
                },
            },

            {
                skillName: "Git",
                fontAwesomeClassname: faSquareGit,
                style: {
                    color: "#FF7900",
                },
            },
            {
                skillName: "NodeJS",
                fontAwesomeClassname: faNodeJs,
                style: {
                    color: "#339933",
                },
            },
            {
                skillName: "MongoDB",
                fontAwesomeClassname: faEnvira,
                style: {
                    color: "#52A74B",
                },
            },
            
            {
                skillName: "MySQL",
                fontAwesomeClassname: faDatabase, // You can use the same icon for MySQL as for MongoDB
                style: {
                    color: "#2C8EBB",
                },
            },
            {
                skillName: "NPM",
                fontAwesomeClassname: faNpm,
                style: {
                    color: "#CB3837",
                },
            },
        ],


        },

        {
            title: "Data Structures and Algorithms",
            fileName: "ProblemImg",
            skills: [
                "Actively solving Data Structures and Algorithms (DSA) problems consistently.",
                "Regularly tackling LeetCode's Problem of the Day and GeeksforGeeks' Problem of the Day (POTD).",
                "Continuously learning from problems outlined in the Striver's sheet (TakeUForward).",
                "Actively participating in coding contests on platforms like CodeChef, LeetCode, GeeksforGeeks, and CodeStudio.",
            ],

            softwareSkills: [],

        },
    ],
};


// Experience

const experience = {
    title: "Experience",
    subtitle: "Internship and Volunteership",
    description: "I have actively participated in various college organizations such as the Dance Club, NSS, NCC and Hope House. Additionally, I have gained valuable experience as a Frontend Developer in a startup environment. An avid event organizer, I have contributed to numerous college events and served as a core member or representative in various college clubs. Furthermore, I have completed summer and remote internships at IIIT Hyderabad, gaining valuable experience and skills.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Internships",
            experiences: [
                {
                    title: "Web Developer Intern",
                    company: "Goo Business",
                    company_url: "https://goobusiness.autoimg.xyz/",
                    logo_path: "Goo Businesses (1).png",
                    duration: "Jan 2024 - Feb 2024",
                    location: "Remote",
                    description: "Developed web development services feature on the company website, enabling users to navigate to respective service pages by clicking 'Order Now'. Also, developed a Figma design and a Contact Us page, enabling message sending upon user interaction via SMTP integration.",
                    color: "#ee3c26",
                },

                {
                    title: "Summer Intern",
                    company: "International Institute of Information Technology",
                    company_url: "https://www.iiit.ac.in/",
                    logo_path: "iiith_logo.jpeg",
                    duration: "July 2023",
                    location: "IIIT Hyderabad Campus",
                    description: "Successfully completed the Summer Internship - 2023 program at IIIT Hyderabad, working on the project 'INEWS: Indic NEWs Scraper.' Made a valuable contribution to a dataset creation task for Summarization Evaluation in the Telugu language.",
                    color: "#ee3c26",
                },

                {
                    title: "NLP Intern",
                    company: "International Institute of Information Technology",
                    company_url: "https://www.iiit.ac.in/",
                    logo_path: "iiith_logo.jpeg",
                    duration: "March 2023 - June 2023",
                    location: "Remote Internship",
                    description: "Participated in a three-month remote internship program at IIIT Hyderabad, contributing to the 'Human Annotated Abstractive Summarization Dataset Creation' task for the Telugu language under the supervision of Dr. Manish Shrivastava, Assistant Professor at LTRC, KCIS. Attended the course 'Introduction to NLP.'",
                    color: "#ee3c26",
                },
            ]
        },

        {
            title: "volunteerships",
            experiences: [
                {
                    title: "Web Casting Person",
                    company: "Election Commission of India",
                    company_url: "https://eci.gov.in/",
                    logo_path: "eci.jpg", 
                    duration: "30 November 2023", 
                    location: "Telangana",
                    description: "Volunteered for the Election Commission of India during the Telangana Assembly elections as a Web Casting Person, contributing to the smooth conduct of the electoral process.",
                    color: "#4285F4", 
                }
            ],

        }
    ],
}

// Competitive Sites

const competitiveSites = {
    comptetitiveSites: [
        {
            siteName: "Leetcode",
            iconifyClassName: "simple-icons:leetcode",
            style: {
                color: "#E35B00",
            },
            profileLink: "https://leetcode.com/cnu1328/",
        },

        {
            siteName: "Geeks For Geeks",
            iconifyClassName: "simple-icons:geeksforgeeks",
            style: {
              color: "#2EC866",
            },
            profileLink: "https://auth.geeksforgeeks.org/user/srinudaxne1",
        },

        {
            siteName: "Codechef",
            iconifyClassName: "simple-icons:codechef",
            style: {
              color: "#5B4638",
            },
            profileLink: "https://www.codingninjas.com/studio/profile/c50cb9e4-46a0-47a4-b95f-6589a1186c41",
        },
        
    ],
};

const degrees = {
    degrees: [
        {
            title: "Rajiv Gandhi University of Knowledge Technologies-Basar",
            subtitle: "Computer Science and Engineering",
            logo_path: "rgukt.jpg",
            alt_name: "Rgukt Logo",
            duration: "2019 - 2021",
            descriptions: [
                "Current CGPA -- 9.2 CGPA.",
                "I have acquired foundational knowledge in various aspects of Computer Science and Engineering through courses such as Java Object-Oriented Programming, Data Structures and Algorithms, Computer Networks, Operating Systems, and Database Management Systems during my B.Tech in Computer Science and Engineering.",
                "I have gained proficiency in Javascript and technologies such as React.js, Node.js, Express.js, and MongoDB.",
            ],

            website_link: "https://www.rgukt.ac.in/",
        },

        {
            title: "Rajiv Gandhi University of Knowledge Technologies-Basar",
            subtitle: "Pre-University Course",
            logo_path: "rgukt.jpg",
            alt_name: "Rgukt Logo",
            duration: "2019 - 2021",
            descriptions: [
                "CGPA -- 8.97 CGPA.",
                "I have acquired fundamental understanding in subjects including Mathematics, Physics, Chemistry, English, and Computer Science, providing a strong academic foundation for my engineering pursuits.",
                "I have gained proficiency in technologies such as HTML, CSS",
            ],

            website_link: "https://www.rgukt.ac.in/",
        },

        {
            title: "Zilla Parishad High School, Pachala Nadkuda",
            subtitle: "Secondary School Certificate (SSC)",
            logo_path: "ZPH.png",
            alt_name: "Rgukt Logo",
            duration: "2018 - 2019",
            descriptions: [
                "CGPA -- 10 CGPA",
                " I accumulated essential knowledge in various subjects like Math, Science, Social Studies, Languages, and Moral Education, which formed the basis for my future studies.",
            ],

            website_link: "",
        },

        
    ],
};

// Certifications

const certifications = {
    certifications: [
        {
            title: "Summer Internship",
            subtitle: "Project INEWS: Indic NEWs Scraper",
            description: "Developed a site-specific scraping script to extract vital information from Indic news websites.",
            logo_path: "iiit_logo.png",
            certificate_link: "https://drive.google.com/file/d/1xvk92HTbwRsxJs26sNtaa7uerdwRUd2i/view?usp=drive_link",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },

        {
            title: "Remote Internship",
            subtitle: "Human Annotated Abstractive Summarization Dataset Creation",
            description: "Learned basic Python and Natural Language Processing (NLP).",
            logo_path: "iiit_logo.png",
            certificate_link: "https://drive.google.com/file/d/1-XDJVkZhiMawogNdGV-FDgTjBQ0CKrGb/view?usp=drive_link",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },


        {
            title: "Artificial Intelligence & Machine Learning",
            subtitle: "Skill Upgradation Training",
            description: "Learned basic AI and ML alorithms.",
            logo_path: "setwin.png",
            certificate_link: "https://drive.google.com/file/d/1EngK1H72cbnRUNkcJVudckchNPPMt6Ka/view?usp=drive_link",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },

        {
            title: "ChatGPT for Beginners",
            subtitle: "Introduction to AI-powered Chatbots",
            description: "I explored the fundamentals of ChatGPT, an AI-based chatbot technology, through a beginner-friendly course on Great Learn.",
            logo_path: "greatlearn.png",
            certificate_link: "https://drive.google.com/file/d/1kdJ5FKq4PkNtG5jW24_M88oCNplDmyaB/view?usp=drive_link",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },

    ],
};


// Projects Page

const projectsHeader = {
    title: "Projects",
    description: "In my projects, I utilized a diverse range of modern technology tools. My expertise lies in creating Full Stack Web Applications. Feel free to explore the projects on my GitHub profile for further insights.",
    avatar_image_path: "",
};


// Contact Page 

const contactPageData = {
    constactSection: {
        title: "Contact Me",
        profile_image_path: "srinu1.png",
        description: "Feel free to reach out to me on any social media platform. I will reply within 24 hours. I'm well-versed in MERN stack development and strong in Data Structures and Algorithms. I'm here to assist you with MERN stack, DSA and various other tech-related queries.",
    },

    addressSection: {
        title: "Address",
        subtitle: "Chengal, Nizamabad, Telangana - 503307",
        avatar_image_path: "Navigation-pana.png",
        location_map_link: "https://www.google.com/maps/place/%E0%B0%AC%E0%B0%BE%E0%B0%B8%E0%B0%B0+%E0%B0%95%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%82%E0%B0%AA%E0%B0%B8%E0%B1%8D/@18.8815574,77.9191962,17z/data=!4m14!1m7!3m6!1s0x3bcde18c82d2cdb1:0x469505d0e802dd0c!2z4LCs4LC-4LC44LCwIOCwleCxjeCwr-CwvuCwguCwquCwuOCxjQ!8m2!3d18.8815523!4d77.9217711!16s%2Fm%2F04z_qjv!3m5!1s0x3bcde18c82d2cdb1:0x469505d0e802dd0c!8m2!3d18.8815523!4d77.9217711!16s%2Fm%2F04z_qjv?entry=ttu",
    },

    phoneSection: {
        title: "Phone Number",
        subtitle: "+91 9640-735-283",
    }
}

export {
    greeting,
    seo,
    settings,
    socialMediaLinks,
    skills,
    experience,
    competitiveSites,
    degrees,
    certifications,
    projectsHeader,
    contactPageData,
};