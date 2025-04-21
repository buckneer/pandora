import { DepartmentPage, ISection } from "../../types/data.types";

const informaticsSections: ISection[] = [
  {
    type: 'text-image',
    title: {
      cir: 'Да ли желиш да живиш у својој земљи а зарађујеш као да си у Европи?',
      lat: 'Da li želiš da živiš u svojoj zemlji a zarađuješ kao da si u Evropi?'
    },
    text: {
      cir: '<p> Ако имаш амбиције да правиш неке занимљиве програме или игрице које ће видети цео свет онда је ово прави смер за тебе. </p> <p> Информатика Основне академске студије је акредитована 30.01.2024. године и акредитација важи до 30.01.2030. године.</p> <p> Информатика Мастер академске студије је акредитована 30.01.2024. године и акредитација важи до 30.01.2030. године.</p> <p> Информатика Докторске академске студије је акредитована 16.12.2022. године и акредитација важи до 16.12.2028. године.</p> <p> Студије на Одсеку за информатику ПМФ-а у Косовској Митровици су организоване по систему: </p> <ul class="list-disc px-8"> <li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани информатичар) </li> <li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер информатичар)</li> <li> Докторске студије (3 године, 180 ЕСПБ, добија се звање Доктор рачунарских наука).</li> </ul> <p> Не морамо трошити речи да је ИТ занимање будућности, то си сигурно чуо већ много пута. </p> <p> Први корак да кренеш путем успешне ИТ каријере је да попуниш ову пријаву за припремну онлајн наставу која држе наши професори и асистенти. </p> </div>',
      lat:'<p> Ako imaš ambicije da praviš neke zanimljive programe ili igrice koje će videti ceo svet onda je ovo pravi smer za tebe. </p> <p> Informatika Osnovne akademske studije je akreditovana 30.01.2024. godine i akreditacija važi do 30.01.2030. godine.</p> <p> Informatika Master akademske studije je akreditovana 30.01.2024. godine i akreditacija važi do 30.01.2030. godine.</p> <p> Informatika Doktorske akademske studije je akreditovana 16.12.2022. godine i akreditacija važi do 16.12.2028. godine.</p> <p> Studije na Odseku za informatiku PMF-a u Kosovskoj Mitrovici su organizovane po sistemu: </p> <ul class="list-disc px-8"> <li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani informatičar) </li> <li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master informatičar)</li> <li> Doktorske studije (3 godine, 180 ESPB, dobija se zvanje Doktor računarskih nauka).</li> </ul> <p> Ne moramo trošiti reči da je IT zanimanje budućnosti, to si sigurno čuo već mnogo puta. </p> <p> Prvi korak da kreneš putem uspešne IT karijere je da popuniš ovu prijavu za pripremnu onlajn nastavu koja drže naši profesori i asistenti. </p> </div>',
    },
    image: {
      src: '/deps/informatics.png',
      alt: {
        cir: 'Одсек за информатику',
        lat: 'Odsek za informatiku'
      }
    }
  }
];

const mathematicsSections: ISection[] = [
  {
    type: 'text-image',
    inverse: true,
    title: {
      cir: 'Ако волиш бројке и лако се сналазиш са њима, математика је прави избор за тебе.',
      lat: 'Ako voliš brojke i lako se snalaziš sa njima, matematika je pravi izbor za tebe.'
    },
    text: {
      cir: '<p> Математика Основне академске студије је акредитована 08.05.2020. године и акредитација важи до 08.05.2026. године.</p> <p> Математика Мастер академске студије је акредитована 08.05.2020. године и акредитација важи до 08.05.2026. године.</p> <p> Студије на Одсеку за математику ПМФ-а у Косовској Митровици су организоване по систему: </p> <ul class="list-disc px-8"> <li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани математичар) </li> <li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер математичар)</li> </ul> <p> Да ли знаш да је наставник математике дефицитарно занимање и да их нема вишка на бироима за запошљавање? Не желиш да посао у просвети? Никакав проблем, постоји мноштво послова које као дипломирани математичар можеш да радиш. </p> <p> Осигуравајуће, телекомуникационе куће не могу без математичара који се добро сналази са статистиком а плата актуара нпр прелази 200 000 динара. Банкарски системи, берза, и све што има везе са вероватноћом, статистиком, бројкама и новцем. </p>',
      lat:'<p> Matematika Osnovne akademske studije je akreditovana 08.05.2020. godine i akreditacija važi do 08.05.2026. godine.</p> <p> Matematika Master akademske studije je akreditovana 08.05.2020. godine i akreditacija važi do 08.05.2026. godine.</p> <p> Studije na Odseku za matematiku PMF-a u Kosovskoj Mitrovici su organizovane po sistemu: </p> <ul class="list-disc px-8"> <li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani matematičar) </li> <li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master matematičar)</li> </ul> <p> Da li znaš da je nastavnik matematike deficitarno zanimanje i da ih nema viška na biroima za zapošljavanje? Ne želiš da posao u prosveti? Nikakav problem, postoji mnoštvo poslova koje kao diplomirani matematičar možeš da radiš. </p> <p> Osiguravajuće, telekomunikacione kuće ne mogu bez matematičara koji se dobro snalazi sa statistikom a plata aktuara npr prelazi 200 000 dinara. Bankarski sistemi, berza, i sve što ima veze sa verovatnoćom, statistikom, brojkama i novcem. </p>',
    },
    image: {
      src: '/deps/mathematics.png',
      alt: {
        cir: 'Одсек за Математику',
        lat: 'Odsek za Matematiku'
      }
    }
  }
];
const geographySections: ISection[] = [
  {
    type: 'text-image',
    inverse: true,
    title: {
      cir: 'Волиш да путујеш и истражујеш нове меридијане? Географија је прави факултет за тебе!',
      lat: 'Voliš da putuješ i istražuješ nove meridijane? Geografija je pravi fakultet za tebe! '
    },
    text: {
      cir: '<p>Географија Основне академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Географија Мастер академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Студије на Одсеку за географију ПМФ-а у Косовској Митровици су организоване по систему:</p><ul class="list-disc px-8"><li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани географ) </li><li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер географ)</li></ul><p>Као дипломирани географ осим што можеш ученицима да преносиш знање о занимљивостима наше планете, можеш имати и своју туристичку агенцију или радити као туристички водич, у дирекцији за мере, и метролошким лабораторијама. </p>',
      lat:'<p>Geografija Osnovne akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Geografija Master akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Studije na Odseku za geografiju PMF-a u Kosovskoj Mitrovici su organizovane po sistemu:</p><ul class="list-disc px-8"><li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani geograf) </li><li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master geograf)</li></ul><p>Kao diplomirani geograf osim što možeš učenicima da prenosiš znanje o zanimljivostima našeplanete, možeš imati i svoju turističku agenciju ili raditi kao turistički vodič, udirekciji za mere, i metrološkim laboratorijama. </p>',
    },
    image: {
      src: '/deps/geography.png',
      alt: {
        cir: 'Одсек за географију',
        lat: 'Odsek za geografiju'
      }
    }
  }
];
const physicsSections: ISection[] = [
  {
    type: 'text-image',
    title: {
      cir: 'Волиш прорачуне, али ипак желиш да то буде егзактно кроз експеримент, физика је прави смер за тебе.',
      lat: 'Voliš proračune, ali ipak želiš da to bude egzaktno kroz eksperiment, fizika je pravi smer za tebe.'
    },
    text: {
      cir: '<p>Физика Основне академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Физика Мастер академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p>Студије на Одсеку за физику ПМФ-а у Косовској Митровици су организоване по систему:</p><ul class="list-disc px-8"><li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани физичар) </li><li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер физичар)</li></ul><p>Да ли знаш да је наставник физике дефицитарно занимање свуда у Србији? Како у просвети, физичари се траже и у Домовима здравља и Клиничким центрима као стручњаци који руководе апаратима за радиологију.</p>',
      lat:'<p>Fizika Osnovne akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Fizika Master akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p>Studije na Odseku za fiziku PMF-a u Kosovskoj Mitrovici su organizovane po sistemu:</p><ul class="list-disc px-8"><li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani fizičar) </li><li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master fizičar)</li></ul><p>Da li znaš da je nastavnik fizike deficitarno zanimanje svuda u Srbiji? Kako u prosveti, fizičari se traže i u Domovima zdravlja i Kliničkim centrima kao stručnjaci koji rukovode aparatima za radiologiju.</p>',
    },
    image: {
      src: '/deps/physics.png',
      alt: {
        cir: 'Одсек за физику',
        lat: 'Odsek za fiziku'
      }
    }
  }
];
const chemistrySections: ISection[] = [
  {
    type: 'text-image',
    inverse: true,
    title: {
      cir: 'Уживаш у експериментисању и мућкању разних супстанци на часовима хемије у средњој школи? Хемија је твој животни позив!',
      lat: 'Uživaš u eksperimentisanju i mućkanju raznih supstanci na časovima hemije u srednjoj školi? Hemija je tvoj životni poziv!'
    },
    text: {
      cir: '<p> Хемија Основне академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Хемија Мастер академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Хемија Докторске академске студије је акредитована 19.11.2021. године и акредитација важи до 19.11.2027. године.</p><p> Студије на Одсеку за хемију ПМФ-а у Косовској Митровици су организоване по систему:</p><ul class="list-disc px-8"><li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани хемичар) </li><li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер хемичар)</li><li> Докторске студије (3 године, 180 ЕСПБ, добија се звање Доктор хемијских наука).</li></ul><p>Дипломирани хемичар, увек нешто „мути“. Наставник хемије је један од најомиљенијих у школи,јер су његови часови занимљиви, пуни експеримената.</p><p>Као дипломирани хемичар, твоје поље запослења је широко: од лабораторија, затим процеса у производњи хране и напитака.</p><p>Институти за јавно здравље једноставно не могу да функционишу без хемичара. </p><p></p>',
      lat:'<p> Hemija Osnovne akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Hemija Master akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Hemija Doktorske akademske studije je akreditovana 19.11.2021. godine i akreditacija važi do 19.11.2027. godine.</p><p> Studije na Odseku za hemiju PMF-a u Kosovskoj Mitrovici su organizovane po sistemu:</p><ul class="list-disc px-8"><li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani hemičar) </li><li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master hemičar)</li><li> Doktorske studije (3 godine, 180 ESPB, dobija se zvanje Doktor hemijskih nauka).</li></ul><p>Diplomirani hemičar, uvek nešto „muti“. Nastavnik hemije je jedan od najomiljenijih u školi,jer su njegovi časovi zanimljivi, puni eksperimenata.</p><p>Kao diplomirani hemičar, tvoje polje zaposlenja je široko: od laboratorija, zatim procesau proizvodnji hrane i napitaka.</p><p>Instituti za javno zdravlje jednostavno ne mogu da funkcionišu bez hemičara. </p><p></p>',
    },
    image: {
      src: '/deps/chemistry.png',
      alt: {
        cir: 'Одсек за хемију',
        lat: 'Odsek za hemiju'
      }
    }
  }
];
const biologoySections: ISection[] = [
  {
    type: 'text-image',
    title: {
      cir: 'Ако су твоја интересовања љубав према природи, животињама и заштита наше Планете од загађења, биологија је прави факултет за тебе!',
      lat: 'Biologija'
    },
    text: {
      cir: '<p> Биологија Основне академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Биологија Мастер академске студије је акредитована 18.06.2021. године и акредитација важи до 18.06.2027. године.</p><p> Биологија Докторске академске студије је акредитована 27.05.2022. године и акредитација важи до 27.05.2028. године.</p><p> Студије на Одсеку за биологију ПМФ-а у Косовској Митровици су организоване по систему:</p><ul class="list-disc px-8"><li> Основне академске студије (4 године, 240 ЕСПБ, стручни назив: Дипломирани биолог) </li><li> Мастер академске студије (1 година, 60 ЕСПБ, стручни назив: Мастер биолог)</li><li> Докторске студије (3 године, 180 ЕСПБ, добија се звање Доктор биолошких наука).</li></ul><p>Као дипломирани биолог можеш дати заиста велики допринос очувању животне средине.</p><p>Занимања која можеш радити као дипломирани биолог су: наставник биологије, након уже специјализације можеш радити у Клиничком центру за вантелесну оплодњу као ембриолог, затим у Институтима за јавно здравље, лабораторијама и компанијама као надзорник за очување животне средине.</p>',
      lat:'<p> Biologija Osnovne akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Biologija Master akademske studije je akreditovana 18.06.2021. godine i akreditacija važi do 18.06.2027. godine.</p><p> Biologija Doktorske akademske studije je akreditovana 27.05.2022. godine i akreditacija važi do 27.05.2028. godine.</p><p> Studije na Odseku za biologiju PMF-a u Kosovskoj Mitrovici su organizovane po sistemu:</p><ul class="list-disc px-8"><li> Osnovne akademske studije (4 godine, 240 ESPB, stručni naziv: Diplomirani biolog) </li><li> Master akademske studije (1 godina, 60 ESPB, stručni naziv: Master biolog)</li><li> Doktorske studije (3 godine, 180 ESPB, dobija se zvanje Doktor bioloških nauka).</li></ul><p>Kao diplomirani biolog možeš dati zaista veliki doprinos očuvanju životne sredine.</p><p>Zanimanja koja možeš raditi kao diplomirani biolog su: nastavnik biologije, nakon uže specijalizacije možeš raditi u Kliničkom centru za vantelesnu oplodnju kao embriolog, zatim u Institutima za javno zdravlje, laboratorijama i kompanijama kao nadzornik za očuvanje životne sredine.</p>',
    },
    image: {
      src: '/deps/biology.png',
      alt: {
        cir: 'Одсек за биологију',
        lat: 'Odsek za biologiju'
      }
    }
  }
];


const departments: DepartmentPage = {
  title: {
    cir: 'Одсеци',
    lat: 'Odseci'
  },
  subtitle: {
    cir: 'На Факултету се на основу наставних планова и студијских програма организују основне академске студије (студије првог степена), мастер студије (студије другог степена) и докторске академске студије (студиеј трећег степена), укупно 16 студијских програма.',
    lat: 'Na Fakultetu se na osnovu nastavnih planova i studijskih programa organizuju osnovne akademske studije (studije prvog stepena), master studije (studije drugog stepena) i doktorske akademske studije (studiej trećeg stepena), ukupno 16 studijskih programa.  '
  },
  departments: [
    {
      title: {
        cir: 'Информатика',
        lat: 'Informatika'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: informaticsSections
    },
    {
      title: {
        cir: 'Математика',
        lat: 'Matematika'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: mathematicsSections
    },
    {
      title: {
        cir: 'Физика',
        lat: 'Fizika'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: physicsSections
    },
    {
      title: {
        cir: 'Хемија',
        lat: 'Hemija'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: chemistrySections
    },
    {
      title: {
        cir: 'Биологија',
        lat: 'Biologija'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: biologoySections
    },
    {
      title: {
        cir: 'Географија',
        lat: 'Geografija'
      },
      // subtitle: {
      //   cir: 'Опис на ћирилици',
      //   lat: 'Opis na latinic'
      // },
      sections: geographySections
    },
  ]
};


export default departments;

