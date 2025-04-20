import { DepartmentPage, ISection } from "../../types/data.types";

const informaticsSections: ISection[] = [
  {
    title: {
      cir: 'Текст и слика',
      lat: 'Opis na latinic'
    },
    type: 'text-image',
    text: {
      cir: 'Опис на ћирилици',
      lat: 'Opis na latinic'
    },
    image: {
      src: '/pmf.png',
      alt: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      }
    },
    inverse: false
  },
  {
    title: {
      cir: 'Текст и слика (обрнуто)',
      lat: 'Opis na latinic'
    },
    type: 'text-image',
    text: {
      cir: 'Опис на ћирилици',
      lat: 'Opis na latinic'
    },
    image: {
      src: '/pmf.png',
      alt: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      }
    },
    inverse: true
  },
  {
    title: {
      cir: 'Само текст',
      lat: 'Opis na latinic'
    },
    type: 'text',
    text: {
      cir: 'Опис на ћирилици',
      lat: 'Opis na latinic'
    },
  },
  {
    title: {
      cir: 'Само слике',
      lat: 'Opis na latinic'
    },
    type: 'images',

    image: [
      {
        src: '/pmf.png',
        alt: {
          cir: 'Опис на ћирилици',
          lat: 'Opis na latinic'
        }
      },
      {
        src: '/pmf.png',
        alt: {
          cir: 'Опис на ћирилици',
          lat: 'Opis na latinic'
        }
      },
    ],
  },
];

const mathematicsSections: ISection[] = [];
const geographySections: ISection[] = [];
const physicsSections: ISection[] = [];
const chemistrySections: ISection[] = [];
const biologoySections: ISection[] = [];


const departments: DepartmentPage = {
  title: {
    cir: 'Одсеци',
    lat: 'Odseci'
  },
  subtitle: {
    cir: 'Опис на ћирилици',
    lat: 'Opis na latinic'
  },
  departments: [
    {
      title: {
        cir: 'Информатика',
        lat: 'Informatika'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: informaticsSections
    },
    {
      title: {
        cir: 'Математика',
        lat: 'Matematika'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: mathematicsSections
    },
    {
      title: {
        cir: 'Физика',
        lat: 'Fizika'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: physicsSections
    },
    {
      title: {
        cir: 'Хемија',
        lat: 'Hemija'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: chemistrySections
    },
    {
      title: {
        cir: 'Биологија',
        lat: 'Biologija'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: biologoySections
    },
    {
      title: {
        cir: 'Географија',
        lat: 'Geografija'
      },
      subtitle: {
        cir: 'Опис на ћирилици',
        lat: 'Opis na latinic'
      },
      sections: geographySections
    },
  ]
};


export default departments;

