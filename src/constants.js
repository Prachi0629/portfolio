// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import DockerLogo from './assets/tech_logo/docker.png';
import TerraformLogo from './assets/tech_logo/terraform.png';
import AnsibleLogo from './assets/tech_logo/ansible.png';
import KubernetesLogo from './assets/tech_logo/kubernetes.png';
import JenkinsLogo from './assets/tech_logo/jenkins.jpg';
import LinuxLogo from './assets/tech_logo/linux.jpg';
import supaLogo from './assets/tech_logo/supa.jpg';
import verLogo from './assets/tech_logo/ver.jpg';
 
 

// Experience Section Logo's
import navoLogo from './assets/company_logo/navoditalogo.jpg';
import codeLogo from './assets/company_logo/code.jpg';
import hackLogo from './assets/company_logo/hack.jpg';

// Education Section Logo's
import gcoeaLogo from './assets/education_logo/gcoea.jpg';
import schoolLogo from './assets/education_logo/school.png';
import collegeLogo from './assets/education_logo/college.png';

// Project Section Logo's
import blogLogo from './assets/work_logo/blog.jpg';
import Cap3Logo from './assets/work_logo/Cap3.JPG';
import electroLogo from './assets/work_logo/Capture.JPG';
import Cap2Logo from './assets/work_logo/Cap2.jpg';
import npmLogo from './assets/work_logo/npm.png';
import Cap5Logo from './assets/work_logo/Cap5.jpg';
import iotLogo from './assets/work_logo/iot.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
     ],
  },

{ 
  title: "DevOps", 
  skills: 
  [ 
  { name: "Linux", logo: LinuxLogo, }, 
  { name: "Docker", logo: DockerLogo, }, 
  { name: "Jenkins", logo: JenkinsLogo, }, 
  { name: "Terraform", logo: TerraformLogo, }, 
  { name: "Ansible", logo: AnsibleLogo, }, 
  { name: "Kubernetes", logo: KubernetesLogo, },
 ], 
},

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     { name: 'Supabase', logo: supaLogo },
     { name: 'Vercel', logo: verLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: navoLogo,
      role: "Fullstack Developer intern",
      company: "Navodita Infotech",
      date: "Feb 2025 - Feb 2025",
      desc: 
      `
       Designed Event registration website with user-friendly,responsive frontend layouts using HTML5, CSS3, and 
       JavaScript and implemented backend functionalities using Node.js and Express.js 
        ensuring seamless cross-device compatibility.
      `,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
  "Express.js",
  "REST APIs",
        "Node JS",
        
      ],
    },
    {
      id: 1,
      img: codeLogo,
      role: "Web developer intern",
      company: "CodeClause",
      date: "Aug 2025 -Sep 2025",
      desc: 
      `
      Designed and developed multiple responsive web applications, ranging from frontend user interfaces to 
      full-stack functional systems. Created intuitive layouts, implemented API integrations, 
      and debugged cross-browser compatibility issues using HTML, CSS, JavaScript, and modern frameworks.
      `,
      skills: [
        "ReactJS",
        "Express.js",
        "Vercel",
        "Supabase",
        "JavaScript",
        "Node.js",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: hackLogo,
      role: "Open source contributer",
      company: "Hacktoberfest",
      date: "Sep 2025 - Oct 2025",
      desc: 
      `Collaborated with the open-source community to build and merge features across multiple public
       repositories.Resolved critical issues,implemented toggle effect, website not rendering issues,
       enhanced UI and improved documentation to help scale community projects.
       Total 7 pull request were merged in various repositories during the event and I got six 
       hacktoberfest badges for my contribution.
     `, 
     skills: [
        "Git", "GitHub", "Visual Studio Code"    
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gcoeaLogo,
      school: "Government college of Engineering, Amravati",
      date: "Sept 2023 - May 2027",
      grade: "9.02 CGPA upto 5th sem",
      desc: "Pursuing a Bachelor's degree in Information Technology with a CGPA of 9.02. Strong foundation in Data Structures, Algorithms, OOP, Operating Systems, and Web Development, complemented by active participation in technical projects and events.",
    },
    
    {
      id: 1,
      img: collegeLogo,
      school: "Shri Shivaji Science, Amravati",
      date: "June 2022 - May 2023",
      grade: "85%",
      desc: "I completed my class 12 education from Shri Shivaji Science college, Amravati, under the HSC board, where I studied Physics, Chemistry, Biology and Mathematics with having strong understanding in regional language Hindi and spoken English skills with its grammer. I have also given JEE(Mains) and scored 81.34 percentile.",
      degree: "HSC(XII) - in General Science",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Shri Ganeshdas Rathi Vidyalay, Amravati",
      date: "Apr 2020 - March 2021",
      grade: "95.20%",
      desc: "I completed my class 10 education from Shri Ganesdas Rathi Vidyalay, Amravati, under the SSC board.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [


{
      id: 0,
      title: "E-Commerce website",
      description:
      `
        Designed and developed a full-stack e-commerce platform to provide a complete online 
        shopping experience with secure and scalable architecture. Implemented user registration 
        and authentication, product browsing, shopping cart management, and order processing functionalities.
        Integrated PostgreSQL for structured data storage and built RESTful APIs using Node.js and Express.js
       to enable efficient communication between frontend and backend systems. Focused on responsive UI design,
        optimized navigation flow, and improved overall user experience across devices.
      `,
        image: electroLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      github: "https://github.com/Prachi0629/e-commerce-application",
      webapp: "https://e-commerce-application-flax-ten.vercel.app/",

    },


    {
      id: 1,
      title: "Event Registration website",
      description:
      `
     Built a dynamic event registration platform that simplifies event participation through an
      intuitive registration workflow. Developed responsive forms and integrated backend validation to 
      ensure accurate and secure user submissions. Implemented SMTP-based email services to automatically
       send registration confirmations and event-related notifications. Emphasized usability, smooth navigation, 
     and efficient data handling to create a reliable event management experience.
      `,
        image: Cap3Logo,
      tags: ["HTML", "CSS", "JavaScript","Node.js", "Express", "SMTP"],
      github: "https://github.com/Prachi0629/Event-registration-application",
      webapp: "https://event-registration-application22.vercel.app/",
    },
    {
      id: 2,
      title: "Blog website",
      description:
      `
        Developed a full-stack blogging platform focused on user interaction and content engagement.
         Implemented secure login and registration functionality with session-based authentication,
         
 enabling users to interact through likes and comments while maintaining access control. 
 Integrated PostgreSQL for persistent storage of user activity and blog content. Designed the application to support real-time updates and provide an interactive 
        and user-friendly reading experience with responsive layouts.
        `,
        image: blogLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      github: "https://github.com/Prachi0629/blogs-application",
      webapp: "https://blogs-application36.vercel.app/login-register.html",
    },


{
      id: 3,
      title: "SmartCloud - 'Usage Metering and Billing Engine for Object Storage Services'",
      description:
      `
        Developed a cloud-inspired storage management platform focused on usage tracking and billing workflows for object storage services. Built a responsive frontend using React and implemented secure backend services using Node.js, Express.js, and PostgreSQL. Designed authentication using JWT and developed modules for dashboard analytics, file handling, and storage monitoring. The platform emphasizes scalability, efficient resource management, and a modern user experience inspired by enterprise cloud systems.
        `,
        image: Cap2Logo,
      tags: ["React.js" ,"HTML","CSS", "Node.js", "Express.js","JWT authentication", "APIs", "PostgreSQL"],
      github: "https://github.com/Prachi0629/Smart-Cloud",    
      webapp: "https://smart-cloud-new-project.vercel.app/", 
      
    },



    


{
      id: 4,
      title: "SaathIoT - 'Wearable Fall detection and alert system for elderly people'",
      description:
      `
       Designed and developed an IoT-based wearable healthcare solution to improve elderly safety and emergency response. Integrated the MPU-6050 accelerometer sensor to detect abnormal movements and fall events and used the NEO-6M GPS module for real-time location tracking. Developed the supporting system to generate alerts during emergency situations, enabling quicker assistance and better monitoring. Focused on combining hardware and software technologies to create a practical real-world healthcare application.
      `,
        image: iotLogo,
      tags: ["ESP32 Board", "Arduino IDE", "NEO-6M GPS Module", "MPU-6050 Accelerometer", "HTML","CSS", "Node.js", "Express.js", "PostgreSQL"],    
      
    },


{
      id: 5,
      title: "A Hierarchical Multimodal AI Framework for Breast Cancer Risk Prediction and Prognostic Analysis",
      description:
      `
        • Working on a multimodal AI framework for breast cancer detection using mammogram images and clinical data.
        • Research focuses on integrating deep learning and explainable AI techniques for medical diagnosis.
        •Implementing CNN and ResNet18 models for image feature extraction and classification.
        • Exploring Grad-CAM for interpretable AI-based prediction visualization.
        • Research paper accepted for presentation and publication at ICT4SD 2026 conference.
      `,      
image: npmLogo,
      tags: ["Python, PyTorch, CNN, ResNet18, OpenCV, Flask, MongoDB"],
       
      
      
    },

    {
      id: 6,
      title: "File system simulation in Linux(Ubuntu)",
      description:
      `
       Developed a Linux-based file system simulation project to strengthen understanding of operating system concepts and low-level system operations. Implemented functionalities related to file organization, directory hierarchy, permissions, and command execution using shell scripting and Linux commands. Simulated real-world file management behavior to gain hands-on experience with system-level operations and improve understanding of Unix-based environments and filesystem architecture.
      `,
        image: Cap5Logo,
      tags: ["Shell Scripting", "Linux commands", "File System"],
      github: "https://github.com/Prachi0629/file-systems-simulation",     
      
    },


    
  ];  