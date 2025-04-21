import { RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill } from "@remixicon/react";
import { FooterData } from "../../types/data.types";

export const footer: FooterData = {
    phoneNumber: {
        lat: "Telefon: +381 28 425 396",
        cir: "Телефон:  +381 28 425 396"
    },
    fax: {
        lat: "Faks: +381 28 425 397",
        cir: "Факс: +381 28 425 397"
    },
    email: {
        lat: "E-mail: pmfkm@pr.ac.rs",
        cir: "E-mail: pmfkm@pr.ac.rs"
    },
    address: {
        lat: "Adresa: Lole Ribara 29, Kosovska Mitrovica, 38220, Srbija",
        cir: "Адреса: Лоле Рибара 29 Косовска Митровица, 38220 Србија"
    },
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
    pib: {
        lat: "PIB: 101940276",
        cir: "ПИБ: 101940276"
    },
    account: {
        lat: "Tekući račun: 840-1972666-03",
        cir: "Текући рачун: 840-1972666-03"
    },
    number: {
        lat: "Matični broj: 09018433",
        cir: "Матични број: 09018433"
    },    
    footerString: {
        lat: "© 2025 Prirodno-matematički fakultet. Sva prava zadržana.",
        cir: "© 2025 Природно-математички факултет. Сва права задржана."
    }
}
