import emoji from "react-easy-emoji";

import sedonalogo from "./assets/img/icons/common/sedonalogo.png";
import saurScreen from  "./assets/img/saurscreens.png";
import digiDriveScreen from "./assets/img/screendigidrive.PNG";
import dsoScreen from "./assets/img/dsoinsidescreens.png";


import iqeralogo from "./assets/img/icons/common/iquralogo.png";
import eleclerclogo from "./assets/img/icons/common/eleclerclogo.png";
import sncflogo from "./assets/img/icons/common/sncflogo.png";
import saurlogo from "./assets/img/icons/common/saurlogo.png";
import hakimProfile from "./assets/img/hakim.jpg";
import cedricProfile from "./assets/img/cedric.jpg";
import mohandProfile from "./assets/img/mohand.jpg";


export const greetings = {
	name: "Mohsen Raeisi",
	title: "Je suis Mohsen Raeisi",
	description:
		"Développeur React/React Native et Vue.js",
	resumeLink: "https://github.com/mohsenraic/developer-portfolio/raw/master/cvmohsen.pdf",
};

export const openSource = {
	githubUserName: "mohsenraic",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/mohsenraic",
	linkedin: "https://www.linkedin.com/in/mohsen-raeisi-55097813b/",
	mail:"mailto:mohsenraic@hotmail.fr"
};

export const skillsSection = {
	title: "À propos de moi",
	subTitle:
"Passionné par le développement digital, je mets mes compétences à votre service pour donner vie à vos projets numériques tout en continuant à me perfectionner. Que ce soit pour la création d'une application mobile avec React Native ou d'un site web, je serais ravi d'échanger avec vous 🙂.\n Fort d'expériences chez iQERA, E.Leclerc, SNCF et SAUR en tant que développeur fullstack mobile et web, j'ai affiné mon expertise pour intervenir sur l'ensemble des aspects techniques de vos projets, qu'ils soient web ou mobiles.",
	skills: [
    emoji(
        "📱 Développement mobile : Création d'applications mobiles avec React Native, un framework permettant un développement simultané sur iOS et Android, optimisant ainsi le temps et les coûts."
    ),
    emoji(
        "🖥 Développement web : Conception de sites web complets en HTML5, CSS3 et JavaScript, ainsi qu'avec les frameworks React.js et Vue.js pour le front-end. Possibilité de création de sites via le CMS WordPress."
    ),
    emoji(
        "📡 Développement serveur : Développement back-end avec Firebase ou Node.js et Express, en fonction des besoins du projet."
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
		Stack: "React-Native", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Vue.js/React.js", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Android natif", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Firebase",
		progressPercentage: "70",
	},
	{
		Stack: "NodeJs",
		progressPercentage: "50",
	},
	{
		Stack: "iOS",
		progressPercentage: "30",
	},
];

export const educationInfo = [
	{
		schoolName: "ESGI (École Supérieure de Génie Informatique)",
		subHeader: "Master en informatique : Mobilité et objets connectés",
		duration: "September 2015 - April 2017",
		desc: "",
		descBullets: [
		],
	},
	{
		schoolName: "Université Paris 8",
		subHeader: "Licence Professionnelle - développement logiciel embarqué",
		duration: "September 2012 - April 2015",
		desc: "",
		descBullets: [
		],
	},
];

export const experience = [
	{
		role: "Développeur React-Native & Vue.js",
		company: "SAUR",
		companylogo: saurlogo,
		screens:saurScreen,
		date: "Novembre 2020 – à ce jour",
		desc: "Maurepas, France",
		descBullets: [
			"Développement d'une application mobile from-sratch pour les agents de secteur permettant d'accéder aux informations essentielles des installations.",
			"Développement et maintenance d’une application mobile/web de gestion logistique",
			"Participation à des réunions de revue et rétrospective et planification du sprint",
			"Analyse et chiffrage des nouvelles fonctionnalités et des correctifs",
			"Environnement Technique : React/React Native,Vue.js"
			
		],
	},
	{
		role: "Développeur Full-stack React-Native (En prestation via CGI)",
		company: "Fret SNCF",
		companylogo: sncflogo,
		screens: digiDriveScreen,
		date: "Novembre 2019 – Octobre 2020",
		desc: "Clichy, France",
		descBullets: [
			"Front : Développement et maintenance d’une application tablette d’aide à la conduite.",
			"Back : Développement et maintenance des web services REST en utilisant Spring.",
			"Participation à des réunions revue & retro et planification du sprint",
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
			"Participation à des réunions revue & retro et planification du sprint",
			"Analyse et chiffrage des nouvelles fonctionnalités et des correctifs",
			"Environnement Technique : JAVA/J2EE(Spring),EmberJs,Git,PostgreSQL"
			
		],
	},
	{
		role: "Alternance : développeur fullstack mobile",
		company: "iQera (DSOgroup)",
		companylogo: iqeralogo,
		date: "Septembre 2015 – Janvier 2019",
		screens: dsoScreen,
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
		img: "https://play-lh.googleusercontent.com/RpMu6gUTjkKKGq0YEh_eZ7CB_mg-ZmJF3INgu5eseyywth7XwsjRwKdxZTuKRAusHA=s180-rw",
		name: "Text Detector",
		desc: "Cette application android vous permet de convertir des images en texte sans aucune limite dans toutes les langues.",
		link: "https://play.google.com/store/apps/details?id=mohsenraeisi.imagetotext",
	},
	{
		img: "https://play-lh.googleusercontent.com/E3CoEXPXo7DWYTYyTIJiSAkPwEncu-7lu4QG4FwhE6HxII9U1KP8HdsGlABVh_jmog=s180-rw",
		name: "NewsMe",
		desc: "Retrouvez des sources d'information telles que Le monde , BFM , 01-NET , 20 minutes , ... et soyez sûr de ne rien manquer des infos qui comptent pour vous.",
		link: "https://play.google.com/store/apps/details?id=com.esgi.newsme.newsme",
	},
	{
		img: "https://play-lh.googleusercontent.com/RvgLiRdO0jDEnV82xNFHYjfySydK0ub5xZNdOlWHeNtOAXxBN1RRyZgY3oYUixvF5wL-=s180-rw",
		name: "Bird Swipe",
		desc: "Un jeu de réflexion conçu pour améliorer la durée d'attention et la concentration.",
		link: "https://play.google.com/store/apps/details?id=com.birdswipe.mohsenraeisi.game",
	},
	{
		img:"https://play-lh.googleusercontent.com/AD1WKYUed6c8Bpa9_gs3KwgwlQhCgicFfXBkRCHHMjWe5crSYN_7jOwvSeu7QDTQjQ=s180-rw",
		name: "Horaires NOW",
		desc: "Consultez les horaires en temps réel des prochains passages des lignes de RATP",
		link: "https://play.google.com/store/apps/details?id=com.ratpnow.mohsenraeisi.ratpnow",
	},
	{
	        img: "https://play-lh.googleusercontent.com/F69YVXREqvsxH47gFNkmh7Ahtp3KAeeI26xlI08yZ76ZskUDccabPoUhlU6Ouwg-s1I=s180-rw",
		name: "Daily Calories",
		desc: "Une application  pour trouver simplement des informations nutritionnelles sur les aliments que vous mangez et suivre facilement vos repas, vos exercices et vos statistiques.",
		link: "https://play.google.com/store/apps/details?id=com.dailycalories.activities.dailycalorie",
	},
];

export const feedbacks = [
	{
		from:"Linkedin",
		url:"https://www.linkedin.com/in/mohsen-raeisi-55097813b/",
		name: "Hakim Benyoucef - Développeur freelance Full Stack",
		img : hakimProfile,
		feedback:
			"Mohsen est un brillant développeur.J'ai travaillé avec lui sur un grand projet et j'ai pu admirer son talent dans le développement mobile, sa motivation, sa méticulosité et surtout sa curiosité constante, aussi bien sur des points de développement que sur des sujets hors de son périmètre.Il sait très bien chercher et trouver l'information et faire avancer votre projet dans les règles de l'art.Je l'ai vu apprendre un framework depuis le zero et je peux vous dire qu'il a maîtrisé à merveille en moins d'un an! Ses capacités d'apprendre très vite et d'autonomie font de lui un vrai \"couteau suisse\".",
	},
	{
		from:"Linkedin",
		url:"https://www.linkedin.com/in/mohsen-raeisi-55097813b/",
		name: "Cédric Capo-Chichi - Proxy Product Owner chez SNCF",
		img : cedricProfile,
		feedback:
			"J'ai travaillé une année avec Mohsen sur une application mobile pour Fret SNCF.Le projet était géré en Agile Scrum.J'ai apprécié la qualité de son travail, ses connaissances techniques et sa faculté à trouver des solutions. Par ailleurs, Mohsen a su faire preuve d'intérêt et d'implication en essayant toujours de comprendre la finalité fonctionnelle de ce qui lui était demandé. Et ce, toujours dans le but de rendre le meilleur service possible pour l'utilisateur.Fiable, posé et rassurant, Mohsen a été un élément moteur dans la réussite du projet.Je le reprendrais sans aucune hésitation sur un prochain projet.",
	},
	

	{
		from:"Linkedin",
		url:"https://www.linkedin.com/in/mohsen-raeisi-55097813b/",
		name: "Mohand Ferhi - CTO / Responsable Département R&D Groupe chez iQera",
		img : mohandProfile,
		feedback:
			"Mohsen c'est simplement un génie du développement web et mobile.C'est le type de développeurs que je qualifierai de vrai full stack sur les technologies mobiles et Java Web + design.Soucieux du travail bien fait avec une excellente culture du résultat grâce à sa grande efficacité et son aisance technique incroyable.Je le recommande les yeux fermés.",
	},
];

export const footer = {
	title:"Contactez-moi",
	desc: "J\'ai hâte de découvrir vos projets quel que soit votre secteur d\'activité, afin que l'on définisse ensemble vos besoins.\nAu plaisir d\'échanger avec vous sur vos projets respectifs, je vous dis à très vite 😉",
};
