import CompLogo_one from './assets/images/comp-logo-1.png';
import CompLogo_two from './assets/images/comp-logo-2.png';
import CompLogo_three from './assets/images/comp-logo-3.png';
import CompLogo_four from './assets/images/comp-logo-4.png';
import CompLogo_five from './assets/images/comp-logo-5.png';
import work_icon_one from './assets/images/icon-1.png';
import work_icon_two from './assets/images/icon-2.png';
import work_icon_three from './assets/images/icon-3.png';
import work_icon_four from './assets/images/icon-4.png';
import work_icon_five from './assets/images/icon-5.png';
import work_icon_six from './assets/images/icon-6.png';
import icon_one from './assets/images/slide-logo-1.avif';
import icon_two from './assets/images/slide-logo-2.avif';
import icon_three from './assets/images/slide-logo-3.avif';
import icon_four from './assets/images/slide-logo-4.avif';
import icon_five from './assets/images/slide-logo-5.avif';
import testim_one from './assets/images/testim-img-1.avif';
import testim_two from './assets/images/testim-img-2.avif';
import testim_three from './assets/images/testim-img-3.avif';




// ------------ Our nav_links data ====================
export const navData = [

    { id: 1, href: "/", label: "Home" },
    { id: 3, href: "#works", label: "Works" },
    { id: 3, href: "#feature", label: "Feature" },
    { id: 4, href: "#pricing", label: "Pricing" },
    { id: 5, href: "#review", label: "Reviews" },


]

// ------------ Our Company_logos Images ====================

export const compLogo = [
    CompLogo_one,
    CompLogo_two,
    CompLogo_three,
    CompLogo_four,
    CompLogo_five,



]

// ------------ Our Company_logos Images ====================

export const worksData = [

    {
        id: 1,
        icon: work_icon_one,
        title: 'Extremely Flexible',
        para: "We believe in pushing the boundaries of what's possible explore emerging technology",
    },
    {
        id: 2,
        icon: work_icon_two,
        title: 'Easy To Customize',
        para: "Enjoy a unified workspace by bringing together to all your favorite tools under one",
    },
    {
        id: 3,
        icon: work_icon_three,
        title: 'Concrete Security',
        para: "Knowing the cost of acquiring customers and the costing of the main service.",
    },
    {
        id: 4,
        icon: work_icon_four,
        title: 'Easy Payment',
        para: "Comprehend the behavior of group participants in relation to tasks, standards.",
    },
    {
        id: 5,
        icon: work_icon_five,
        title: 'Cloud based access',
        para: "The cloud offers easy setup, high availability and lower to maintenance costs.",
    },
    {
        id: 6,
        icon: work_icon_six,
        title: 'Advanced Analytics',
        para: "We believe in pushing the boundaries of what's possible explore emerging technology.",
    },

]



// -------------------- Our lists data ----------------------
export const listsOne = [
    { id: 1, text: "Tasks to reduce manual effort and increase productivity" },
    { id: 2, text: "Automation tools to streamline routine processes." },
    { id: 3, text: "Enable team members to access project information." },
    { id: 4, text: "Task dependencies charts for project timelines." },
    { id: 5, text: "Analyze key performance to identify areas for improvement." },


]

export const listsTwo = [
    { id: 1, text: "Task charts for project timelines" },
    { id: 2, text: "User friendly task creation." },
    { id: 3, text: "Task organization and tracking." },
    { id: 4, text: "Seamless collaboration." },

]

// -------------------- Our growth-oriented-slider Data ----------------------

export const slideData = [

    {
        id: 1,
        icon: icon_one,
        name: "Discord",
        text: "Notion is a versatile all-in-one workspace application",

    },

    {
        id: 2,
        icon: icon_two,
        name: "Figma",
        text: "Notion is a versatile all-in-one workspace application",

    },

    {
        id: 3,
        icon: icon_three,
        name: "Asana",
        text: "Notion is a versatile all-in-one workspace application",

    },

    {
        id: 4,
        icon: icon_four,
        name: "Trello",
        text: "Notion is a versatile all-in-one workspace application",

    },

    {
        id: 5,
        icon: icon_five,
        name: "Linear",
        text: "Notion is a versatile all-in-one workspace application",

    },

]

// --------------------------- Our Pricing Plan Data ----------------------

export const plan = [

    {
        id: 1,
        planType: 'Beginners',
        monthlyPlan: 19,
        annualPlan: 12,
        planText: "Best for solo creators",
        planFeatures: [
            "Ten links available",
            "Own analytics platform",
            "Mobile app",
            "Chat Support",
            "1000 users",
            "Template Library",
        ],
    },


    {
        id: 2,
        planType: 'Standard',
        monthlyPlan: 79,
        annualPlan: 59,
        planText: "Most popular plan",
        planFeatures: [
            "Ten links available",
            "Own analytics platform",
            "Mobile app",
            "Chat Support",
            "1000 users",
            "Template Library",
        ],
    },


    {
        id: 3,
        planType: 'Advanced',
        monthlyPlan: 39,
        annualPlan: 29,
        planText: "Exclusive for teams",
        planFeatures: [
            "Ten links available",
            "Own analytics platform",
            "Mobile app",
            "Chat Support",
            "1000 users",
            "Template Library",
        ],
    },

]

// --------------------------- Our FAQ Data ----------------------

export const faqData = [

    {
        id: 1,
        qus: "What exactly is project management software, and how can it benefit my team?",
        ans: "Project management software is a tool designed to help teams plan, organize, and execute projects efficiently. It benefits your team by providing centralized communication, task management, and progress tracking.",

    },

    {
        id: 2,
        qus: "Is your project management software suitable for teams of all sizes?",
        ans: "Yes, our project management software is designed to cater to teams of all sizes, from small startups to large enterprises. Whether you're managing a handful of tasks or overseeing complex projects with multiple stakeholders.",

    },

    {
        id: 3,
        qus: "Can I customize and integrate SaaS applications with other tools?",
        ans: "Yes, many SaaS applications offer customization and integration options to tailor them to your business needs and workflows.",

    },

    {
        id: 4,
        qus: " Is SaaS suitable for startups and small businesses?",
        ans: "Yes, SaaS is well-suited for startups and small businesses due to its affordability, scalability, and accessibility.",

    },

    {
        id: 5,
        qus: "How can SaaS benefit my business?",
        ans: "SaaS offers benefits such as cost-effectiveness, scalability, accessibility, and security, making it an ideal choice for startups and small businesses.",

    },

]

// --------------------------- Our Testimonials Data ----------------------

export const reviewsData = [

    {
        id : 1,
        img : testim_one,
        name : "Sarah Miller",
        info : 'Marketing Director at Digital Agency',
        text : '"Saasta has transformed the way our marketing team operates. Its collaborative features and real-time updates have improved communication and coordination, leading to more successful campaigns and happier clients."',
    },

    {
        id : 2,     
        img : testim_two,
        name : "Emily Johnson",
        info : 'Founder of StartUpX',
        text : '"I"ve tried many project management tools, but Saasta stands out for its simplicity and effectiveness. It has everything we need to stay organized and collaborate effectively. Our projects have never been smoother!"',
    },

    {
        id : 3,
        img : testim_three,
        name : "Michael Brown",
        info : 'Project Manager at Global Innovations',
        text : '"Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!"',
    },
    
    
]

// --------------------------- Our Testimonials Data ----------------------

export const footerLinksData = [

    {id:1 , href: "#" , name : 'Home'},
    {id:2 , href: "#" , name : 'Pricing'},
    {id:3 , href: "#" , name : 'Blog'},
    {id:4 , href: "#" , name : 'Contact'},
    {id:5 , href: "#" , name : 'About page'},
    {id:6 , href: "#" , name : '404 Error page'},
    {id:7 , href: "#" , name : 'Blog Details page'},

    
]