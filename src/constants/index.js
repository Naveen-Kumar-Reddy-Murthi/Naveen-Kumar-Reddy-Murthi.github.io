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
  patent,
  govtech,
  hf,
  ghcp,
  awsaip,
  awssaa,
  nusiss,
  awscp,
  ai,
  nusiss1,
  angular,
  opensearch,
  python,
  postgres,
  aws
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
  },
  {
    id: "Resume",
    title: "Resume",
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
  ,
  {
    title: "AI Enthusiast",
    icon: ai,
  }
  
];

const technologies = [
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
    {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "AngularJS",
    icon: angular,
  },
    {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenSearch",
    icon: opensearch,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Oracle",
    icon: oracleDb,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  
  
  // {
  //   name: "Mulesoft",
  //   icon: mulesoft,
  // },
  // {
  //   name: "GCP",
  //   icon: gcp,
  // },
  // {
  //   name: "PCF",
  //   icon: pcf,
  // },
  
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "splunk",
  //   icon: splunk,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  
];

const experiences = [

  {
    title: "Senior Software Engineer",
    company_name: "GovTech, Singapore through PALO IT",
    icon: govtech,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Contributed as a full-stack engineer crafting features using Kotlin, React, Python, and AWS",
      "Integrated different govt agencies with go business.",
      "Prod deployment and support.",
    ],
  },

  {
    title: "Technical Lead",
    company_name: "DBS Bank, Singapore through HCLTech",
    icon: dbs,
    iconBg: "#383E56",
    date: "June 2022 - May 2023",
    points: [
      "Designed and developed micros services based on cloud native approach",
      "Apart from being an active individual contributor, also lead the team including UI, Back-end and QA to oversee the development and release",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
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
    // desc: "Huggingface AI Agents Fundamentals",
    url: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/mnreddy7/2025-03-26.png",
    icon: hf,
  },
  {
    // desc: "GitHub Copilot",
    url: "https://www.credly.com/badges/f9e4f53c-a747-4536-969d-b8a7042a35e2",
    icon: ghcp,
  },
  {
    // desc: "AWS Certified AI Practitioner Early Adopter",
    url: "https://www.credly.com/badges/5c21d30f-4430-4851-adbf-d2d90163a7da",
    icon: awsaip,
  },
  {
    // desc: "AWS Certified Solutions Architect – Associate",
    url: "https://www.credly.com/badges/77b3684e-e326-43c4-8fe1-b826270b8545",
    icon: awssaa,
  },
  {
    // desc: "NUS-ISS ICT Assessment Certification for Software Developer",
    url: "https://dashboard.accredify.io/verify?id=4785a562-a029-4b15-b22e-6aa827697e55",
    icon: nusiss1,
  },
  {
    // desc: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/8f85f5ad-309d-4d61-b571-e1c12d3d8bc0",
    icon: awscp,
  },
  {
    // desc: "Cloud Digital Leader",
    url: "https://www.credential.net/d3554b23-d6f7-4543-b136-c1217b8fc448?key=fa2575459483564af80f8ad140b8051dfde056c87d7e86dbb86f211810c93d7a",
    icon: cdl,
  },
  {
    // desc: "Patents",
  url: "https://patents.google.com/patent/US11321063B1/en?inventor=Naveen+Kumar+Reddy+Murthi",
  icon: patent,
  },
  
];

const projects = [
  {
    name: "GoBusiness",
    description:
      "GoBusiness is the go-to platform for businesses in Singapore to access Government e-services and resources. One-stop shop for over 120 government e-services (registration, licenses, grants).",
    tags: [
      {
        name: "Spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "black-text",
      },
      {
        name: "Postgres",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "red-text-gradient",
      },
     
    ],
    image: payb,
    source_code_link: "https://www.dbs.com.sg/personal/support/bank-payment-bill-payment.html",
  },
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
    description:"eProvisioning is the center of several SORs. It is a middle-ware application that provides customer profile information and several eligibilities and rules for Bank of America online banking, and mobile apps.",
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
