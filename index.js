// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".navbar-menu ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = this.getAttribute("href");
    smoothScroll(target); // Scroll to the target section
  });
});

// To Toggle between the close and bar icon to show dropdown
const toggleBtn = document.querySelector(".toggle-menu");
const toggleIcon = document.querySelector(".toggle-menu i");
const toggleMenu = document.querySelector(".toggle-options");

toggleBtn.onclick = () => {
  toggleMenu.classList.toggle("open-menu");
  const isOpen = toggleMenu.classList.contains("open-menu");
  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// skills
const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Data Science", "Machine Learning", "NLP", "Artificial Intelligence", "Php"]
  },
  {
    category: "Backend Frameworks / Libraries",
    items: [
      "Deep Learning", "NodeJS", "Django", "Laravel", "Flask", "Regex"
    ]
  },
  {
    category: "Databases",
    items: ["SQL Server", "NoSql", "Vector Database"]
  },
  {
    category: "Version Control",
    items: ["Git"]
  },
  {
    category: "Web Scraping",
    items: ["BeautifulSoup", "Selenium", "Regex"]
  },
  {
    category: "Testing",
    items: ["Postman"]
  },
  {
    category: "Generative AI",
    items: ["Rag", "LLM", "Open AI"]
  },
  {
    category: "Deployment",
    items: ["Azure", "github"]
  }
];

function createSkillsSection(skillsData) {
  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((skillCategory) => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = skillCategory.category;

    const categoryList = document.createElement("ul");

    skillCategory.items.forEach((skillItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = skillItem;
      categoryList.appendChild(listItem);
    });

    const categorySection = document.createElement("div");
    categorySection.classList.add("skill-type");
    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryList);

    skillsContainer.appendChild(categorySection);
  });
}

createSkillsSection(skills);

// Projects

const projectDetails = [
  {
    index: "01",
    name: "Video Monitoring System(VMS)",
    // logo: "./images/vms.png",
    technology: "python,reactjs,nodejs,monogodb,golang,deep learning",
    desc:

      "Developed a real-time video monitoring system using IP cameras, integrating live camera feeds with advanced analytics. Implemented object detection, motion tracking, and pattern recognition using Python, Flask, and computer vision technologies to automate surveillance and event detection."
  },
  {
    index: "02",
    name: "House Price Prediction Model",
    // logo: "",
    technology: "Python , Machine Learning , Scikit Learn , Regex",
    desc:
      "Built a house price prediction model with over 85% accuracy using machine learning techniques. Applied data preprocessing, feature engineering, and model optimization to deliver accurate price estimates based on housing data."
  },
  {
    index: "03",
    name: "Ecommerce website ",
    // logo: "",
    technology: "Python , Django , Bootstrap , SQL",
    desc:
      "Developed an eCommerce website using Django with a fully functional admin panel. Implemented product management, user authentication, order processing, and payment integration, allowing seamless management of products, users, and transactions from the admin dashboard."
  },
  {
    index: "04",
    name: "Quiz App",
    // logo: "",
    technology: "Python , Reactjs , NodeJS",
    desc:

      "Developed a quiz platform where users can create and manage quizzes. Integrated functionality to add, edit, and delete quiz questions, track user scores, and provide real-time feedback, all with an intuitive interface for both users and administrators."
  }
];

function createProjectElement(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  // const projectLogo = document.createElement("img");
  // projectLogo.src = project.logo;
  // projectLogo.alt = project.name;
  // projectLogo.width = "600";
  // projectLogo.height = "400";
  // projectLogo.classList.add("project-logo");
  // projectContainer.appendChild(projectLogo);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("project-title");
  projectContainer.appendChild(projectTitle);

  const projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectDesc.classList.add("project-desc");
  projectContainer.appendChild(projectDesc);

  const projectTech = document.createElement("p");
  projectTech.textContent = `Technology: ${project.technology}`;
  projectTech.classList.add("project-tech");
  projectContainer.appendChild(projectTech);

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  projectContainer.appendChild(projectLinks);

  return projectContainer;
}

function createProjectsSection(projectsData) {
  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
  });
}

createProjectsSection(projectDetails);

// experience

const experienceDetails = [
  {
    name: "SafetyTalk.ai",
    company: "Arcturus Business Solutions Pvt Ltd",
    role: "Python Developer",
    year: "Apr 2023 – Current",
    location: "Noida Sector 62",
    application: "#",
    appLogo: "images/vms.png",
    points: [
      "➤ Reduced bundle size by 50 % by optimizing Webpack, resulting in faster load times and enhanced platform performance.",
      "➤ Developed responsive web pages with React.js, providing a seamless experience across all devices with efficient CRUD functionalities.",
      "➤ Decreased API calls by 50 % on page render through seamless state management using Redux Saga.",
      "➤ Implemented document and image analytics for detailed analysis and improved safety decision - making processes.",
      "➤ Built interactive data dashboards with Chart.js, enhancing data insights and engagement for users.",
      "➤ Attained 80 % unit test coverage with Jest, ensuring the platform’s reliability and minimizing the chance of errors.",
      "➤ Led feature development, ensuring on - time delivery of core modules and successful project execution.",
      "➤ Designed modular, reusable components, reducing development time by 30 % and improving overall code efficiency and maintainability."
    ]
  }
];

function createExperienceElement(experience) {
  const experienceElement = document.createElement("div");
  experienceElement.innerHTML = `
               <div class="leftInfo">
               <p class="role">${experience.role}</p>
               <p class="company">${experience.company}</p>
                <p class="year">${experience.year}</p>
                <p class="location">${experience.location}</p>
                <p class="year">PROJECT : ${experience.name}</p>
                <p class="name" <em>Description : Ask Safety Questions & Document/Image Analysis for Construction Sites Created SafetyTalk.ai, an AI-powered platform for asking safety-related construction site questions and performing document or image analytics.</em></p>
                <img class="appImage" src="${experience.appLogo}" alt="${experience.name}">
               </div>
                <ul>
                    ${experience.points
      .map((point) => `<li>${point}</li>`)
      .join("")}
                </ul>
            `;
  return experienceElement;
}

const experienceContainer = document.getElementById("experience-container");
experienceDetails.forEach((experience) => {
  const experienceElement = createExperienceElement(experience);
  experienceContainer.appendChild(experienceElement);
});

//education

const educationDetails = [
  {
    name: "Data Trained Academy",
    Board: "",
    course: "Post Graduate Programme in Data Science ,Machine Learning and Neural Networks",
    year: "Sep 2023 - 2024",
    points: ""



  },
  {
    name: "Shreeram Institute of management and technology Kashipur(UK)",
    board: "Kumaun University Nainital",
    course: "Bachelor of computer applicaton",
    year: "Sep 2015 – sep 2018",
    points: "74.80%"
  },
  {
    name: "Ramlal Singh Chauhan Saraswati vidhya mandir Inter College Jaspur (UK)",
    board: "Uttrakhand Board",
    course: "Class XII (PCM)",
    year: "Aug 2015",
    points: "76.80%"
  },
  {
    name: "Ramlal Singh Chauhan Saraswati vidhya mandir Inter College Jaspur (UK)",
    board: "Uttrakhand Board",
    course: "Class X",
    year: "July 2013",
    points: "86.20%"
  }
];

function createEducationDetails(educationData) {
  const educationDetails = document.getElementById("education-details");

  educationData.forEach((edu) => {
    const row = document.createElement("tr");

    const createTableCell = (text, label) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      cell.setAttribute("data-label", label);
      return cell;
    };

    row.appendChild(createTableCell(edu.name, "Name"));
    row.appendChild(createTableCell(edu.board, "Board"));
    row.appendChild(createTableCell(edu.course, "Course"));
    row.appendChild(createTableCell(edu.year, "Year"));
    row.appendChild(createTableCell(edu.points, "Points"));

    educationDetails.appendChild(row);
  });
}

createEducationDetails(educationDetails);

//Scroll To Top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add this JavaScript code to your index.js or inside a <script> tag at the end of your HTML body

// Function to add the 'fade-up' class to elements in the viewport
function addFadeUpAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
      // Once the animation is applied, we don't need to observe this element anymore
      observer.unobserve(entry.target);
    }
  });
}

// Intersection Observer configuration
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the viewport
  threshold: 0.3 // Trigger when 30% of the element is in the viewport
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(addFadeUpAnimation, options);

// Get all elements with the class 'fade-up' and start observing them
const fadeUpElements = document.querySelectorAll(".fade-up");
fadeUpElements.forEach((element) => {
  observer.observe(element);
});
