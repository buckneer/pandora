import { Navbar } from "../../types/data.types"
import { RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill } from "@remixicon/react";

const navbar: Navbar = {
  logo: '/pmf.png',
  socials: [
    {
      url: 'https://www.facebook.com/pmf.pr.ac.rs',
      icon: RiFacebookBoxFill,
    },
    {
      url: 'https://www.instagram.com/pmfkm028/',
      icon: RiInstagramFill,
    },
    {
      url: 'https://www.youtube.com/channel/UC_KQqQ8vGfSoTUKZ2-LtmQQ',
      icon: RiYoutubeFill
    },
  ],
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