import { ProjectPage } from "../../types/data.types";
import { Project } from "../../types/types";

const graphicsMetadata = {
  subject: {
    cir: 'Компјутерска графика и дизајн',
    lat: 'Kompjuterska grafika i dizajn'
  },
  category: 3, 
}
const graphicsProjects: Project[] = [
  {
    ...graphicsMetadata,
    title: {
      cir: 'Брод',
      lat: 'Brod'
    },
    author: {
      cir: 'Васић Николија',
      lat: 'Vasić Nikolija'
    },
    category: 3, 
    technologies: 'Adobe Photoshop',
    backgroundImage: '/photoshop/brod.jpg'
  },
  {
  ...graphicsMetadata,
    title: {
      cir: 'Do you wanna get funky?',
      lat: 'Do you wanna get funky?'
    },
    author: {
      cir: 'Исаиловић Јован',
      lat: 'Isailović Jovan'
    },
    technologies: 'Adobe Photoshop',
    backgroundImage: '/photoshop/lucy.jpg'
  },
  {
    title: {
      cir: 'Мисао',
      lat: 'Misao'
    },
    author: {
      cir: 'Јаковљевић Јована',
      lat: 'Jakovljević Jovana'
    },
    ...graphicsMetadata,
    technologies: 'Adobe Photoshop',
    backgroundImage: '/photoshop/woman.jpg'
  },
  {
    title: {
      cir: 'Електрана Обилић',
      lat: 'Elektrana Obilić'
    },
    author: {
      cir: 'Шобот Анђела',
      lat: 'Šobot Andjela'
    },
    ...graphicsMetadata,
    technologies: 'Adobe Photoshop',
    backgroundImage: '/photoshop/obilic.jpg'
  },
  {
    title: {
      cir: 'ПМФ спортски лого',
      lat: 'PMF sportski logo'
    },
    author: {
      cir: 'Исаиловић Јован',
      lat: 'Isailović Jovan'
    },
    ...graphicsMetadata,
    technologies: 'CorelDRAW',
    backgroundImage: '/corel/pmf.jpg'
  },
  {
    title: {
      cir: 'Шминка',
      lat: 'Šminka'
    },
    author: {
      cir: 'Васић Николија',
      lat: 'Vasić Nikolija'
    },
    ...graphicsMetadata,
    technologies: 'CorelDRAW',
    backgroundImage: '/corel/sminka.jpg'
  },
  {
    title: {
      cir: 'Иницијали',
      lat: 'Inicijali'
    },
    author: {
      cir: 'Јаковљевић Јована',
      lat: 'Jakovljević Jovana'
    },
    ...graphicsMetadata,
    technologies: 'CorelDRAW',
    backgroundImage: '/corel/inicijali.jpg'
  },
];


const webProgrammingMetadata = {
  subject: {
    cir: 'Web програмирање',
    lat: 'Web programiranje'
  },
  category: 1,
}

// TODO: change this...
const webProgrammingProjects: Project[] = [
  {
    ...webProgrammingMetadata,
    title: {
      cir: 'Брод',
      lat: 'Brod'
    },
    author: {
      cir: 'Васић Николија',
      lat: 'Vasić Nikolija'
    },
    technologies: 'Angular',
    backgroundImage: '/photoshop/brod.jpg'
  },
];


const projects: ProjectPage = {
  title: {
    cir: 'Пројекти наших студената',
    lat: 'Projekti naših studenata'
  },
  subtitle: {
    cir: 'Наши студенти са Природно-математичког факултета константно показују изузетну креативност, иновативност и техничко знање кроз разноврсне пројекте које развијају током студија. Њихови радови обухватају широк спектар области, укључујући web апликације, видео игрице и графички дизајн, чиме доказују колико су примењене и савремене вештине које стичу на факултету.<br/><br/>Web апликације развијене од стране студената решавају конкретне проблеме из стварног света – од апликација за управљање временом и задацима, преко платформи за електронско учење, до напредних решења за анализу података. Студенти уче како да користе модерне технологије као што су React, Node.js, Laravel, и базе података попут MySQL и PostgreSQL.<br/><br/>У домену видео игара, студенти комбинују знање из програмирања, математике и креативног размишљања како би развили занимљиве и често едукативне игре. Користе алате попут PyGame и Python Turtle, где имплементирају сопствене механике игре, 2D и 3D графику, као и комплексне логике понашања ликова.<br/><br/>Када је реч о графичким радовима, наши студенти показују таленат и у дизајну – од дигиталне илустрације и анимације до израде корисничких интерфејса и промотивних материјала. Кроз рад у алатима као што су Adobe Illustrator, Photoshop, Autocad и Figma, они развијају естетски изражајне и функционалне пројекте који често налазе примену и ван академског окружења. Ови пројекти не само да представљају резултат школовања, већ и доказ способности студената да размишљају креативно, решавају проблеме и раде у тимовима – особине које су од непроцењивог значаја у савременом IT свету.',
    lat: 'Naši studenti sa Prirodno-matematičkog fakulteta konstantno pokazuju izuzetnu kreativnost, inovativnost i tehničko znanje kroz raznovrsne projekte koje razvijaju tokom studija. Njihovi radovi obuhvataju širok spektar oblasti, uključujući web aplikacije, video igrice i grafički dizajn, čime dokazuju koliko su primenjene i savremene veštine koje stiču na fakultetu.<br/><br />Web aplikacije razvijene od strane studenata rešavaju konkretne probleme iz stvarnog sveta – od aplikacija za upravljanje vremenom i zadacima, preko platformi za elektronsko učenje, do naprednih rešenja za analizu podataka. Studenti uče kako da koriste moderne tehnologije kao što su React, Node.js, Laravel, i baze podataka poput MySQL i PostgreSQL.<br/><br />U domenu video igara, studenti kombinuju znanje iz programiranja, matematike i kreativnog razmišljanja kako bi razvili zanimljive i često edukativne igre. Koriste alate poput PyGame i Python Turtle, gde implementiraju sopstvene mehanike igre, 2D i 3D grafiku, kao i kompleksne logike ponašanja likova.<br/><br />Kada je reč o grafičkim radovima, naši studenti pokazuju talenat i u dizajnu – od digitalne ilustracije i animacije do izrade korisničkih interfejsa i promotivnih materijala. Kroz rad u alatima kao što su Adobe Illustrator, Photoshop, Autocad i Figma, oni razvijaju estetski izražajne i funkcionalne projekte koji često nalaze primenu i van akademskog okruženja.Ovi projekti ne samo da predstavljaju rezultat školovanja, već i dokaz sposobnosti studenata da razmišljaju kreativno, rešavaju probleme i rade u timovima – osobine koje su od neprocenjivog značaja u savremenom IT svetu.'
  },
  projects: [
    ...webProgrammingProjects,
    ...graphicsProjects,
  ]
}

export default projects;