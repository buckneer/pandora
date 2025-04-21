import { ProjectPage } from "../../types/data.types";

const projects: ProjectPage = {
  title: {
    cir: 'Пројекти наших студената',
    lat: 'Projekti naših studenata'
  },
  subtitle: {
    cir: 'Сабтајтл на ћирилици',
    lat: 'Subtitle na latinici'
  },
  categories: [
    {
      id: 1,
      title: {
        cir: "Веб Апликације",
        lat: "Web Aplikacije"
      }
    }
  ],
  projects: [
    {
      title: {
        cir: 'Пројекат 1',
        lat: 'Projekat 1'
      },
      author: {
        cir: 'Аутор 1',
        lat: 'Autor 1'
      },
      category: 1,
      subject: {
        cir: 'Предмет 1',
        lat: 'Predmet 1'
      },
      technologies: 'React',
      backgroundImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fprev%2F460%2F459117.jpg&f=1&nofb=1&ipt=41a5dc642efeee9cda09c79184a35d31e0099baef0998f53f431437b692c9d0d'
    },
    {
      title: {
        cir: 'Пројекат 1',
        lat: 'Projekat 1'
      },
      author: {
        cir: 'Аутор 1',
        lat: 'Autor 1'
      },
      category: 1,
      subject: {
        cir: 'Предмет 1',
        lat: 'Predmet 1'
      },
      technologies: 'React',
      backgroundImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fprev%2F460%2F459117.jpg&f=1&nofb=1&ipt=41a5dc642efeee9cda09c79184a35d31e0099baef0998f53f431437b692c9d0d'
    }
  ]
}

export default projects;