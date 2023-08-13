    /* - - - - ELEMENTOS - - - - */
const fullDocument = document.querySelector('body');

/* FLECHAS */
const lanyardLeft = document.querySelector('.lanyard-section .left-arrow');
const lanyardRight = document.querySelector('.lanyard-section .right-arrow');
const poleronLeft = document.querySelector('.poleron-section .left-arrow');
const poleronRight = document.querySelector('.poleron-section .right-arrow');
const allArrows = document.querySelector('.arrows');

/* NAVEGACIÓN */
const quienNav = document.getElementById('quien-nav-id');
const lanyardNav = document.getElementById('lanyard-nav-id');
const poleronNav = document.getElementById('poleron-nav-id');
const contactNav = document.getElementById('contacto-nav-id');


/* PRODUCTOS */
const lanyardImage = document.getElementById('lanyard-id');
const poleronImage = document.getElementById('poleron-id');

/* SCROLL */
const volverArriba = document.querySelector('.volver-container');
const header = document.getElementById('header-id');
const quienSection = document.getElementById('quien-section-id');
const lanyardSection = document.getElementById('lanyard-section-id');
const poleronSection = document.getElementById('poleron-section-id');
const contactSection = document.getElementById('contacto-section-id');
/* LANYARD SELECCIONADO */
const lanyardSelected = document.getElementById('lanyard-id');
const poleronSelected = document.getElementById('poleron-id');
/* let indexLan = 0; */

/* SECTOR SIN NOMBRAR */

const lanyardTitleShow = document.querySelector('.lanyard-title');
const lanyardShow = document.querySelector('.lanyard-section');
const poleronTitleShow = document.querySelector('.poleron-title');
const poleronShow = document.querySelector('.poleron-section');
const productosShow = document.querySelector('.productos-title');

/* LANYARD LIST */
const lanyardList = [
    './img/lanyard/lan_bulb_1.jpg',
    './img/lanyard/lan_charizard_1.jpg',
    './img/lanyard/lan_charman_1.jpg',
    './img/lanyard/lan_gengar_1.jpg',
    './img/lanyard/lan_jiggly_1.jpg',
    './img/lanyard/lan_lucario_1.jpg',
    './img/lanyard/lan_psyduck_1.jpg',
    './img/lanyard/lan_squirtle_1.jpg',
    './img/lanyard/lan_celeste_1.jpg',
    './img/lanyard/lan_dk_1.jpg',
    './img/lanyard/lan_dk_2.jpg',
    './img/lanyard/lan_dk_3.jpg',
    './img/lanyard/lan_kirby_1.jpg',
    './img/lanyard/lan_luigi_1.jpg',
    './img/lanyard/lan_mario_1.jpg',
    './img/lanyard/lan_mario_2.jpg',
    './img/lanyard/lan_mario_3.jpg',
    './img/lanyard/lan_mario_4.jpg',
    './img/lanyard/lan_mario_5.jpg',
    './img/lanyard/lan_mario_6.jpg',
    './img/lanyard/lan_metroid_1.jpg',
    './img/lanyard/lan_nintendo_1.jpg',
    './img/lanyard/lan_nintendo_2.jpg',
    './img/lanyard/lan_nintendo_3.jpg',
    './img/lanyard/lan_nintendo_4.jpg',
    './img/lanyard/lan_nintendo_5.jpg',
    './img/lanyard/lan_smash_1.jpg',
    './img/lanyard/lan_smash_2.jpg',
    './img/lanyard/lan_splatoon_1.jpg',
    './img/lanyard/lan_yoshi_1.jpg',
    './img/lanyard/lan_zelda_1.jpg',
    './img/lanyard/lan_zelda_2.jpg',
    './img/lanyard/lan_zelda_3.jpg',
    './img/lanyard/lan_zelda_4.jpg',
];

/* POLERON LIST */

const poleronList = [
    './img/poleron/poleron_1.jpg',
    './img/poleron/poleron_2.jpg',
    './img/poleron/poleron_3.jpg',
];
