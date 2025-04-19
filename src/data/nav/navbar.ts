import { Navbar } from "../../types/data.types"

const navbar: Navbar = {
  logo: '/pmf.png',
  socials: [],
  links: [
    {
      label: {
        lat: 'Projekti',
        cir: 'Пројекти'
      },
      url: '/'
    },
    {
      label: {
        lat: 'Fakultet',
        cir: 'Факултет'
      },
      url: '/uni'
    },
    {
      label: {
        lat: 'Odseci',
        cir: 'Одсеци'
      },
      url: '/deps'
    },
  ]
};

export default navbar;