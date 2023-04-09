import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  dbs,
  wellsfargo,
  bofa,
  atc,
  nuclues,
  java,
  oracleDb,
  kafka,
  kotlin,
  gcp,
  pcf,
  splunk,
  mulesoft,
  payb,
  BOFAIB,
  ICICICB,
  creator,
  cdl,
  patent
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievements",
    title: "Achievements"
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front end Developer",
    icon: web,
  },
  {
    title: "Database Developer",
    icon: mobile,
  },
  {
    title: "Cloud Native Developer",
    icon: creator,
  }
  
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Oracle",
    icon: oracleDb,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Mulesoft",
    icon: mulesoft,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  // {
  //   name: "PCF",
  //   icon: pcf,
  // },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "splunk",
    icon: splunk,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  
];

const experiences = [
  {
    title: "Technical Lead",
    company_name: "DBS Bank, Singapore",
    icon: dbs,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Designed and developed micros services based on cloud native approach",
      "Apart from being an active individual contributor, also lead the team including UI, Back-end and QA to oversee the development and release",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Vice President",
    company_name: "WellsFargo, Hyderabad, India",
    icon: wellsfargo,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "Migrated legacy VB .Net application to .Net Core PCF App",
      "Worked on migrating MS SQL databases to Google Big Query",
      "Implemented several integration projects using Apache Camel",
      "Participating in code reviews and sit migration",
    ],
  },
  {
    title: "Software Engineer II B",
    company_name: "Bank of America, Hyderabad, India",
    icon: bofa,
    iconBg: "#383E56",
    date: "Sep 2017 - May 2021",
    points: [
      "Implementation of initiatives for each release end to end",
      "Application performance monitoring and improvement",
      "Daily code reviews and code certification in SIT environment",
    ],
  },
  {
    title: "Senior Member Technical Staff",
    company_name: "American Tower Corporation, Gurugram, India",
    icon: atc,
    iconBg: "#E6DEDD",
    date: "Feb 2017 - July 2017",
    points: [
      "Design and implementation of system integrations using Mulesoft ESB.",
      "UAT and post-production support"
    ],
  },
  ,
  {
    title: "Software Engineer",
    company_name: "Nucleus Software Exports Ltd, Noida, India",
    icon: nuclues,
    iconBg: "#E6DEDD",
    date: "Dec 2013 - Feb 2017",
    points: [
      "Requirement gathering and analysis, design, and development",
      "Client support in UAT and post-production, Performance tuning",
      "Defect analysis and Fixing"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const achievements = [
  {
    desc: "Cloud Digital Leader",
    url: "https://www.credential.net/d3554b23-d6f7-4543-b136-c1217b8fc448?key=fa2575459483564af80f8ad140b8051dfde056c87d7e86dbb86f211810c93d7a",
    icon: cdl,
  },
  {
    desc: "Patent Holder",
  url: "https://patents.google.com/patent/US11321063B1/en?inventor=Naveen+Kumar+Reddy+Murthi",
  icon: patent,
  },
  
];

const projects = [
  {
    name: "PayBill",
    description:
      "Pay-Bill is used by bank associates to onboard business entities so that they will be able to accept bills from customers. It also manages payees data. It has several channels including mobile and online banking.",
    tags: [
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mariadb",
        color: "green-text-gradient",
      },
     
    ],
    image: payb,
    source_code_link: "https://www.dbs.com.sg/personal/support/bank-payment-bill-payment.html",
  },

  {
    name : "EMMO",
    description : "An Enterprise Marketing Mix Optimization tool that operationalises marketing mix models to generate optimal marketing plans that achieve business goals by identifying the right budget levels, channel mix, product investment levels, and timing of investments",
    tags: [
      {
        name: ".NET Core",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL",
        color: "green-text-gradient",
      },
      {
        name: "BigQuery",
        color: "blue-text-gradient",
      },
     
    ],
  },
  {
    name: "E-Provisioning",
    description:"eProvisioning is the center of several SORs. It is a middle-ware application that provides customer profile information and several eligibilities and rules for Bank of America online banking, and mobile apps. It's high through put and low latency application",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "SOAP",
        color: "green-text-gradient",
      },
      {
        name: "Oracle",
        color: "pink-text-gradient",
      },
    ],
    image: BOFAIB,
    source_code_link: "https://www.bankofamerica.com/",
  },
  {
    name: "Bank On Net",
    description:
      "BON provides payment services to corporate clients. It provides the facility to setup and process electronic payments for real-time and near real-time settlement. This includes internal and external bank transfer",
    tags: [
      {
        name: "Spring MVC",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Oracle",
        color: "pink-text-gradient",
      },
    ],
    image: ICICICB,
    source_code_link: "https://cibnext.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_corp_primer_login_btn_desk&_ga=2.68245649.1455613945.1677986094-348137585.1677986093",
  },
];

export { services, technologies, experiences, testimonials, projects, achievements };
