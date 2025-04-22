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
      cir: 'Црква Св. Димитрија',
      lat: 'Crkva Sv. Dimitrija'
    },
    author: {
      cir: 'Драговић Ања',
      lat: 'Dragović Anja'
    },
    ...graphicsMetadata,
    technologies: 'Adobe Photoshop',
    backgroundImage: '/photoshop/crkva.jpg'
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
  {
    ...graphicsMetadata,
    title: {
      cir: 'Споменик палим рударима у НОБ-у',
      lat: 'Spomenik palim rudarima u NOB-u'
    },
    author: {
      cir: 'Исаиловић Јован',
      lat: 'Isailović Jovan'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/spomenik.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAGRP76a9OhxUoB6ZJI4iwwNBy3Y2ZmErFxap2GIyNajIskrr338%2bXo3HB4xi2kVgLvr6apXyw1GSUIJchL%2fWK00EZ%2fhKKGpbFtTM6UWisRYdPI0q1p%2bZv6luc4fbeWW7yjAQCp1JygBX%2fIw3dHYVcQ4D43iLOx97cZOJwJ2oELfLweVR2aL03W2eYx8sildw2A%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Пикачу',
      lat: 'Pikaču'
    },
    author: {
      cir: 'Драговић Ања',
      lat: 'Dragović Anja'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/pikacu.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAADkj4V96YsVdyXNwL00fJo7Y3o3yreqMAOAtwoYyztgnTsVuaCo5LDtpoZ3fD6QAlNcn%2fTtA%2fOe3J3b%2feRi2ttq7TWTAYqj1PV%2bjnV2Tb6kkVpyO0X8gBAfnT7B6tLMQiaMyby8bZ5bWaREhe29a0Rq2AzW3LF5LNO6FRPYmxnbBQzpqvQnQXymXekQtea0Z3g%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Seat',
      lat: 'Seat'
    },
    author: {
      cir: 'Драговић Ања',
      lat: 'Dragović Anja'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/seat.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAO5taBF%2b4KRPbXWFfJ8r%2bD35aN14zWx3qTGuf7qdNC5KOgVt5YV9i7eLcXeRjTVqiyN4G39LHR0eKSCwGWaQJVGTMK0nSBnppCOJX0EUKue4e8F5OtDXMIbCEiWSvy9ZZBqlpG2fPAb2dTLFxIDv4E9LWqGqYfAx4jl2wg7%2b9rSXvYT7wTH%2f4%2flrL7yj8%2bcwlw%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Чаша',
      lat: 'Čaša'
    },
    author: {
      cir: 'Шобот Анђела',
      lat: 'Šobot Anđela'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/casa.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAMqjOm8gpjxCAEiRM2RT5ZQvo%2fSw8kBJsVyiK9096Hpv48bDcFKq8G096WjkD3rNxL%2fbjBlDuEfns3MbuV9SNw4kh98SeO2J2iVXRt4iIgwyGD5e%2ffqt6u2qPNYjs8C5UaqhzR%2fYuvuxBF16dK7Sp5DGbk74CjwXzehyx%2bkMv4iwKdAHu1U8soR370%2f14WVuaQ%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Toyota',
      lat: 'Toyota'
    },
    author: {
      cir: 'Шобот Анђела',
      lat: 'Šobot Anđela'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/toyota.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAABmXnGOp3l5ockK64ciwuW8g7K4OPpWkBpzizH7uwPYTH5pYfNAtH32YvOa2R0gdihbq15lg0zq0%2bpLNClkFyJWgMFVMwV0GXcKRDJIHivrMiXj2izeLMCFW3ohAI4UJIpvPCscgN57%2bo6RF%2bSUM0EZKDfKjaqcgoBoyMBCacH5c0%2fvJtLN9C%2f2R18wZKJb8zA%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Клипови',
      lat: 'Klipovi'
    },
    author: {
      cir: 'Мифтари Симел',
      lat: 'Miftari Simel'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/assembly.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAEfku%2bJZqIXE8XZYGjHYW42BlLaryVPUe%2bA%2fFlKQh9ipIWRmCkTmE9mj6KolImmgxkYqseFLgtYMXlM6d4o6aIlQskx%2fGCpJ3r7RpjpSpdAmS3IlngH8NHRyLoCjqxFyxl0vy4zCfX3dV%2fRTITjZiC5VAdM7e23SvaKceWAsv07sbZR98x9Belp42mmkE%2fRIGA%3d%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Сталак за гитаре',
      lat: 'Stalak za gitare'
    },
    author: {
      cir: 'Мифтари Симел',
      lat: 'Miftari Simel'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/guitar.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAOouym7jr5jwys1X6MSF%2bRL1bIkw6cjpecbn5ZOVRm3hRcGl4OB1pJvTyfOOrQq503%2bvzax8Od3W8XzcyBuqY7gk9YpFGXx9rTa4T1O1%2f3o9sb%2bSAB55KAQJiC4hBsU5bAi2aVvc2e4bA1CFVoUITHVHaAefnYrFmHXR81IM5M5cpR%2fyYiZimnX%2bbfc2Lxk%2f8XADl5LwzH3Rd6WjRrlf1jk%3d"
  },
  {
    ...graphicsMetadata,
    title: {
      cir: 'Вентилатор',
      lat: 'Ventilator'
    },
    author: {
      cir: 'Лазаревић Немања',
      lat: 'Lazarević Nemanja'
    },
    technologies: 'AutoCAD',
    backgroundImage: '/autocad/fan.png',
    url: "https://sharecad.org/Viewer/Shared?file=EAAAAH7m7EOf4qGbiiAJKeCrA9GXlfHb%2fKFpUWf%2bD9aXfA49kv2ZgKm6mmnwgaOPNI8HSYJnL5N23hSLkY5vc1ypre8Px8a8CxlD6FJOwByU3nZvzGyY5hoJyVaSfvbgGJKFqVJQy%2fcsYk5KaAyrvA0ExXlwhVWPLLUP7P65V821hT2uXEUePuNyGkMmuklGQqfSoU9oBArcR946CNhkjlSjSoY%3d"
  },
];


const webProgrammingMetadata = {
  subject: {
    cir: 'Web програмирање',
    lat: 'Web programiranje'
  },
  url: "localhost:1233",
  category: 1,
}

// TODO: change this...
const webProgrammingProjects: Project[] = [
  {
    ...webProgrammingMetadata,
    title: {
      cir: 'BeastieOffice',
      lat: 'BeastieOffice'
    },
    author: {
      cir: 'Мифтари Симел',
      lat: 'Miftari Simel'
    },
    technologies: 'React',
    backgroundImage: '/websites/beastieoffice.png',
    url: "https://beastieoffice.com/"
  },
  {
    ...webProgrammingMetadata,
    title: {
      cir: 'BeastieBurgers',
      lat: 'BeastieBurgers'
    },
    author: {
      cir: 'Мифтари Симел',
      lat: 'Miftari Simel'
    },
    technologies: 'React',
    backgroundImage: '/websites/beastie.png',
    url: "https://beastie.be/"
  },
  {
    ...webProgrammingMetadata,
    title: {
      cir: 'Aermist',
      lat: 'Aermist'
    },
    author: {
      cir: 'Исаиловић Јован',
      lat: 'Isailović Jovan'
    },
    technologies: 'React',
    backgroundImage: '/websites/aermist.png',
    url: "https://aermist.com/"
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