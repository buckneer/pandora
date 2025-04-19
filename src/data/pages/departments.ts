import { DepartmentPage, ISection } from "../../types/data.types";

const sections: ISection[] = [
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

const departments: DepartmentPage = {
  title: {
    cir: 'Одсеци',
    lat: 'Odseci'
  },
  subtitle: {
    cir: 'Опис на ћирилици',
    lat: 'Opis na latinic'
  },
  sections
};


export default departments;

