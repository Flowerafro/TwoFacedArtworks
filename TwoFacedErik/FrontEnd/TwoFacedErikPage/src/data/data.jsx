
import facetwofacelogo from '../images/31cFacetwofacelogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDeviantart, faArtstation } from '@fortawesome/free-brands-svg-icons';


// title
export const title = "TwoFacedArtworks";

// designer
export const webdesigner = "https://github.com/Flowerafro"

// about 

export const about = [
    {
        id: 1,
        name: "Erik",
        role: "Artist/ Illustrator / Designer ",
        place: "Norway",
        image: facetwofacelogo, 
        alt: "TwoFacedArtworks",
        mail: "mailto:erikhenriksen1986@gmail.com",
        IG: "https://www.instagram.com/twofacedartwork/",
        pod: "https://open.spotify.com/show/0ASxzmB19cx92RTvGnbkP0?si=32c30a245bd941d1"
    }
];


// social links

export const social = [
    {
        id: 1,
        name: "Instagram",
        url: "https://www.instagram.com/twofacedartwork/",
        icon: faInstagram
    },
    {
        id: 2,
        name: "DeviantArt",
        url: "https://www.deviantart.com/twofacedartworks",
        icon: faDeviantart
    },
    {
        id: 3,
        name: "ArtStation",
        url: "https://twofacedartwork.artstation.com/",
        icon: faArtstation
    }
]

/* ------------------------------------------ */
/* ---------------- ARTWORKS ---------------- */
/* ------------------------------------------ */
/*   -- moved to sanity/sanity/schemaTypes/index.js 
export const artworks = [
    {
        id: 1,
        name: "loveblinds",
        image: "/src/images/1LoveBlinds.jpg",
        title: "Love Blinds",
        year: "2001"
    },
    {
        id: 2,
        name: "duality",
        image: "/src/images/2Duality.jpg",
        title: "Duality",
    },
    {
        id: 3,
        name: "mobydick",
        image: "/src/images/3MobyDick.jpg",
        title: "Moby Dick",
    },
    {
        id: 4,
        name: "hellodarkness",
        image: "/src/images/4HelloDarkness.jpg",
        title: "Hello Darkness",
    },
    {
        id: 5,
        name: "quarantine",
        image: "/src/images/5Quarantine.jpg",
        title: "Quarantine",
    },
    {
        id: 6,
        name: "hollow",
        image: "/src/images/6Hollow.jpg",
        title: "Hollow",
    },
    {
        id: 7,
        name: "icantbreathe",
        image: "/src/images/7ICantBreathe.jpg",
        title: "I can't breathe",
    },
    {
        id: 8,
        name: "Ouroboros",
        image: "/src/images/8Ouroboros.jpg",
        title: "Ouroboros",
    },
    {
        id: 9,
        name: "ed",
        image: "/src/images/9Ed.jpg",
        title: "Ed",
    },
    {
        id: 10,
        name: "tmlwky",
        image: "/src/images/10TMLWKY.jpg",
        title: "TMLWKY",
    },
    {
        id: 11,
        name: "missingpieces",
        image: "/src/images/11MissingPieces.jpg",
        title: "Missing Pieces",
    },
    {
        id: 12,
        name: "split",
        image: "/src/images/12Split.jpg",
        title: "Split",
    },
    {
        id: 13,
        name: "shattered",
        image: "/src/images/13Shattered.jpg",
        title: "Shattered",
    },
    {
        id: 14,
        name: "shieldmaiden",
        image: "/src/images/14Shieldmaiden.jpg",
        title: "Shieldmaiden",
    },
    {
        id: 15,
        name: "blackholeinmychest",
        image: "/src/images/15BlackHoleinmyChest.jpg",
        title: "Black Hole in my Chest",
    },
    {
        id: 16,
        name: "whitelies",
        image: "/src/images/16WhiteLies.jpg",
        title: "White Lies",
    },
    {
        id: 17,
        name: "hrogfruballestrom",
        image: "/src/images/17HrogFruBallestrom.jpg",
        title: "Hr. og Fru Ballestrom",
    },
    {
        id: 18,
        name: "insomnia",
        image: "/src/images/18Insomnia.jpg",
        title: "Insomnia",
    },
    {
        id: 19,
        name: "e&e",
        image: "/src/images/19E&E.jpg",
        title: "E & E",
    },
    {
        id: 20,
        name: "hel",
        image: "/src/images/20Hel.jpg",
        title: "Hel",
    },
    {
        id: 21,
        name: "twofaced",
        image: "/src/images/21TwoFaced.jpg",
        title: "Two Faced",
    },
    {
        id: 22,
        name: "puremorning",
        image: "/src/images/22PureMorning.jpg",
        title: "Pure Morning",
    },
    {
        id: 23,
        name: "lovekillsii",
        image: "/src/images/23LoveKillsII.jpg",
        title: "Love Kills II",
    },
    {
        id: 24,
        name: "mygodisthesun",
        image: "/src/images/24MyGodistheSun.jpg",
        title: "My God is the Sun",
    },
    {
        id: 25,
        name: "payday",
        image: "/src/images/25Payday.jpg",
        title: "Payday",
    },
    {
        id: 26,
        name: "cpr",
        image: "/src/images/26CPR.jpg",
        title: "CPR",
    },
    {
        id: 27,
        name: "humanshield",
        image: "/src/images/27HumanShield.jpg",
        title: "Human Shield",
    },
    {
        id: 28,
        name: "thehedgehogdilemma",
        image: "/src/images/28TheHedgehogDilemma.jpg",
        title: "The Hedgehog Dilemma",
    },
    {
        id: 29,
        name: "blacktounge",
        image: "/src/images/29BlackTounge.jpg",
        title: "Black Tounge",
    },
    {
        id: 30,
        name: "malstrom",
        image: "/src/images/30Malstrom.jpg",
        title: "Malstrøm",
    },
    {
        id: 31,
        name: "facetwoface",
        image: "/src/images/31cFacetwofacelogo.jpg",
        title: "Face two Face",
    },
    {
        id: 32,
        name: "mygodisthesunii",
        image: "/src/images/32MyGodistheSunII.jpg",
        title: "My God is the Sun II",
    },
    {
        id: 33,
        name: "alwayson",
        image: "/src/images/33AlwaysOn.jpg",
        title: "Always On",
    },
    {
        id: 34,
        name: "astronomy",
        image: "/src/images/34Astronomy.jpg",
        title: "Astronomy",
    },
    {
        id: 35,
        name: "blackestblack",
        image: "/src/images/35BlackestBlack.jpg",
        title: "Blackest Black",
    },
    {
        id: 36,
        name: "censorshit",
        image: "/src/images/36Censorshit.jpg",
        title: "Censorshit",
    },
    {
        id: 37,
        name: "intheshadows",
        image: "/src/images/37IntheShadows.jpg",
        title: "In the Shadows",
    },
    {
        id: 38,
        name: "heartsalive",
        image: "/src/images/38HeartsAlive.jpg",
        title: "Hearts Alive",
    },
    {
        id: 39,
        name: "indecisive",
        image: "/src/images/39Indecisive.jpg",
        title: "Indecisive",
    },
    {
        id: 40,
        name: "deviliknow",
        image: "/src/images/40DevilIKnow.jpg",
        title: "Devil I Know",
    },
    {
        id: 41,
        name: "howheavythiscrown",
        image: "/src/images/41HowHeavyThisCrown.jpg",
        title: "How Heavy This Crown",
    },
    {
        id: 42,
        name: "blackmirror",
        image: "/src/images/42BlackMirror.jpg",
        title: "Black Mirror",
    },
    {
        id: 43,
        name: "heartless",
        image: "/src/images/43aHeartless.jpg",
        title: "Heartless",
    },
    {
        id: 44,
        name: "smile",
        image: "/src/images/44Smile.jpg",
        title: "Smile",
    },
    {
        id: 45,
        name: "trust",
        image: "/src/images/45Trust.jpg",
        title: "Trust",
    },
    {
        id: 46,
        name: "blessedblackwings",
        image: "/src/images/46aBlessedBlackWings.jpg",
        title: "Blessed Black Wings",
    },
    {
        id: 47,
        name: "bonzo",
        image: "/src/images/47aBonzo.jpg",
        title: "Bonzo",
    },
    {
        id: 48,
        name: "intheblack",
        image: "/src/images/48aIntheBlack.jpg",
        watermark: "/src/images/48IntheBlack_watermark.jpg",
        title: "In the Black",
    },
]; */

export const clients = [
    {
        id: 1,
        name: "Malstrømfestivalen",
        image: "/src/images/Malstrom.png",
        url: "https://malstromfestivalen.no/",
        time: "XXXX -",
        description: "Head of design, illustrations, art and logos for festival" 
    },
    {
        id: 2,
        name: "Humbar",
        image: "/src/images/Humbar.png",
        url: "https://www.facebook.com/humbarhonefoss/",
        time: "XXXX",
        description: "Created a murial for Humbar in Hønefoss" 
    },
    {
        id: 3,
        name: "Shot At Dawn",
        image: "/src/images/ShotAtDawn.png",
        url: "https://www.platekompaniet.no/musikk/vinyl/metal/shot-at-dawn-legendary-ep-vinyl",
        time: "2015",
        description: "Album cover design"  
    },
]

