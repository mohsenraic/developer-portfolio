import emoji from "react-easy-emoji";

import sedonalogo from "./assets/img/icons/common/sedonalogo.png";
import iqeralogo from "./assets/img/icons/common/iquralogo.png";
import eleclerclogo from "./assets/img/icons/common/eleclerclogo.svg";
import sncflogo from "./assets/img/icons/common/sncflogo.svg";
import saurlogo from "./assets/img/icons/common/saurlogo.svg";

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
		{
			skillName: "Android",
			fontAwesomeClassname: "logos:android",
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
		Stack: "Algorithme",
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
		role: "Développeur React-Native & Vue.js (En prestation via CGI)",
		company: "SAUR",
		companylogo: saurlogo,
		date: "Novembre 2020 – à ce jour",
		desc: "Guyancourt, France",
		descBullets: [
			"Front : Développement et maintenance d’une application mobile/web de gestion logistique",
			"Participation à des réunions Demo & retro et planification du sprint",
			"Analyse et chiffrage des nouvelles fonctionnalités et des correctifs",
			"Environnement Technique : React Native,Vue.js"
			
		],
	},
	{
		role: "Développeur Full-stack React-Native (En prestation via CGI)",
		company: "Fret SNCF",
		companylogo: sncflogo,
		date: "Novembre 2019 – Octobre 2020",
		desc: "Clichy, France",
		descBullets: [
			"Front : Développement et maintenance d’une application tablette d’aide à la conduite.",
			"Back : Développement et maintenance des web services REST en utilisant Spring.",
			"Participation à des réunions Demo & retro et planification du sprint",
			"Analyse et chiffrage des nouvelles fonctionnalités et des correctifs",
			"Environnement Technique : JAVA/J2EE(Spring),React Native,PostgreSQL"
			
		],
	},
	{
		role: "Développeur Full-stack web (En prestation via CGI)",
		company: "E.leclerc",
		companylogo: eleclerclogo,
		date: "Janvier 2019 – Novembre 2019",
		desc: "Ivry-sur-Seine, France",
		descBullets: [
			"Front : Développement et maintenance d'un outil web de gestion de contrats sous EmberJs",
			"Back : Développement et maintenance des web services REST en utilisant Spring.",
			"Participation à des réunions demo & retro et planification du sprint",
			"Analyse et chiffrage des nouvelles fonctionnalités et des correctifs",
			"Environnement Technique : JAVA/J2EE(Spring),EmberJs,Git,PostgreSQL"
			
		],
	},
	{
		role: "Alternance : développeur fullstack mobile",
		company: "iQera (DSOgroup)",
		companylogo: iqeralogo,
		date: "Septembre 2015 – Janvier 2019",
		desc: "Paris, France",
		descBullets: [
			"Réalisation d’une application mobile hybride en interne (front-end et back-end) en utilisant le Framework IONIC et Spring boot",
			"Livraisons de différentes versions de l’application sur App Store et Google Play",
			"Maintenance de l'application"
		]
	},
		
	{
		role: "Stage : Développeur Android",
		company: "Sedona",
		companylogo: sedonalogo,
		date: "Avril 2015 – Août 2015",
		desc: "Paris, France",
		descBullets: [
			"Maintenance de l'application Android Euronews",
			"Maintenance de l'application Relais & Châteaux",
			"Création d'une application de quizz sur Tablette Android",
			"Développements sur une application de streaming musical Android"
		],
	},
];

export const projects = [
	{
		name: "Text Detector",
		desc: "Cette application android vous permet de convertir des images en texte sans aucune limite dans toutes les langues.",
		link: "https://play.google.com/store/apps/details?id=mohsenraeisi.imagetotext",
	},
	{
		name: "NewsMe",
		desc: "Retrouvez des sources d'information telles que Le monde , BFM , 01-NET , 20 minutes , ... et soyez sûr de ne rien manquer des infos qui comptent pour vous.",
		link: "https://play.google.com/store/apps/details?id=com.esgi.newsme.newsme",
	},
	{
		name: "Bird Swipe",
		desc: "un jeu de réflexion conçu pour améliorer la durée d'attention et la concentration.",
		link: "https://play.google.com/store/apps/details?id=com.birdswipe.mohsenraeisi.game",
	},
	{
		name: "Horaires NOW",
		desc: "Consultez les horaires en temps réel des prochains passages des lignes de RATP",
		link: "https://play.google.com/store/apps/details?id=com.ratpnow.mohsenraeisi.ratpnow",
	},
	{
		name: "Daily Calories",
		desc: "Une application  pour trouver simplement des informations nutritionnelles sur les aliments que vous mangez et suivre facilement vos repas, vos exercices et vos statistiques.",
		link: "https://play.google.com/store/apps/details?id=com.dailycalories.activities.dailycalorie",
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
	desc: "J\'ai hâte de découvrir vos projets quel que soit votre secteur d\'activité, afin que l'on définisse ensemble vos besoins.\nAu plaisir d\'échanger avec vous sur vos projets respectifs, je vous dis à très vite 😉",
};
