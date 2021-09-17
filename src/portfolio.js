import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Mohsen Raeisi",
	title: "Je suis Mohsen Raeisi",
	description:
		"Passionné par le développement digital, je souhaite vous aider à concrétiser vos projets numériques tout en développant mes compétences en programmation. Je suis impatient de découvrir vos projets, que ce soit pour créer une application mobile React Native et/ou un site web 🙂\n",
	resumeLink: "https://github.com/mohsenraic/developer-portfolio/raw/master/cvmohsen.pdf",
};

export const openSource = {
	githubUserName: "mohsenraic",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/mohsenraic",
	linkedin: "https://www.linkedin.com/in/mohsen-raeisi-55097813b/",
};

export const skillsSection = {
	title: "SAVOIR FAIRE",
	subTitle:
		"J\'ai déjà eu  l\'opportunité de travailler pour plusieurs entreprises comme iQERA, E.Leclerc, SNCF et SAUR en tant que developpeur fullstack mobile et web.J\'ai développé mes compétences afin d\'être Fullstack sur des projets mobile ou web",
	skills: [
		emoji(
			"📱 Côté mobile, je développe des applications mobiles avec le framework React Native, qui permet de coder simultanément sur IOS et sur Android, ce qui vous permet de gagner beaucoup de temps et donc d\'argent lors du développement."
		),
		emoji(
			"🖥 Côté web, je développe des sites web complets à partir des langages HTML5/CSS3/Javascript ou des frameworks ReactJS et Vue.js pour le front-end. Je peux également concevoir vos sites via le CMS Wordpress."
		),
		emoji(
			"📡 Côté serveur, je développe le back-end avec le langage JAVA et le framework Spring ou en utilisant NodeJS et Express. Je maîtrise MySQL pour la gestion des bases de données."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "ESGI",
		subHeader: "Master en informatique : Mobilité et objets connectés",
		duration: "September 2015 - April 2017",
		desc: "",
		descBullets: [
		],
	},
	{
		schoolName: "Université Paris 8",
		subHeader: "Licence Pro - développement logiciel embarqué",
		duration: "September 2012 - April 2015",
		desc: "",
		descBullets: [
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: googlelogo,
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: github,
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: airbnb,
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];

export const footer = {
	title:"Contactez moi",
	desc: "J\'ai hâte de découvrir vos projets quel que soit votre secteur d\'activité, afin que l'on définisse ensemble vos besoins.\nAu plaisir d\'échanger avec vous sur vos projets respectifs, je vous dis à très vite 😉"
",
};
