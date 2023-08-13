                /* - - - - FUNCIONES - - - - */

/* CHANGE LANYARD */


const objPressed = (elemento, index) => {
    elemento.addEventListener('mousedown', () => {
        elemento.style.transform = 'scale(1)';
    });
    elemento.addEventListener('mouseup', () => {
        elemento.style.transform = `scale(${index / 100})`;
    });
};


const loadImage = (elemento) => {

    elemento.style.opacity = '0';
    
    const lanyardOut = lanyardList[indexLan];
    const poleronOut = poleronList[indexPol];
    setTimeout( () => {
        if (lanyardOut || poleronOut) {
            if (elemento === lanyardImage) {

                lanyardImage.setAttribute('src', lanyardOut);
                lanyardImage.addEventListener('load', () => {
                    lanyardImage.style.opacity = '1';
                });
            } else if (elemento === poleronImage) {
                poleronImage.setAttribute('src', poleronOut);
                poleronImage.addEventListener('load', () => {
                    poleronImage.style.opacity = '1';
                })
            };
        } else if (!lanOut) {
            alert('Hubo un error');
            elemento.style.opacity = '1';
        }
    }, 200);
};



let indexLan = 0;
const nextLanyard = (elemento, action) => {
    elemento.addEventListener('click', () => {
        if (action) {
            indexLan = (indexLan + 1) % lanyardList.length;
        } else {
            indexLan = (indexLan - 1 + lanyardList.length) % lanyardList.length;
        };
        loadImage(lanyardImage);
    });
};

let indexPol = 0;
const nextPoleron = (elemento, action) => {
    elemento.addEventListener('click', () => {
        if (action) {
            indexPol = (indexPol + 1) % poleronList.length;
        } else {
            indexPol = (indexPol - 1 + poleronList.length) % poleronList.length;
        }
        loadImage(poleronImage);
    });
};


/* OBJ HOVER SCALE */
const objScale = (action, image, index) => {
    if (action) {
        image.style.transform = `scale(${index / 100})`;
    } else {
        image.style.transform = 'scale(1)';
    }
};

/* OBJ HOVER TRIGGER*/
const objHover = (elemento, index) => {
        elemento.addEventListener('mouseenter', () => {
            objScale(true, elemento, index);
            objPressed(elemento, index);
            elemento.style.cursor = 'pointer';
        });

        elemento.addEventListener('mouseleave', () => {
            objPressed(elemento, index);
            objScale(false, elemento);

        });
};


/* GO TOP SCROLL */
const goTo = (elemento, destiny, index) => {
    elemento.addEventListener('click', () => {
        destiny.scrollIntoView({ behavior: 'smooth' });
    });
    objHover(elemento, index);
}



/* ARROWS SCALE */
const arrowScale = (index) => {
    objHover(lanyardLeft, index);
    objHover(lanyardRight, index);
    objHover(poleronLeft, index);
    objHover(poleronRight, index);
}

/* const showContent = (elemento) => {
    const contentPosition = elemento.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        elemento.style.opacity = '0';
    }
} */

const showContent = (elemento) => {
    const contentPosition = elemento.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.25;

    if (contentPosition < screenPosition) {
        elemento.style.opacity = '1';
        elemento.style.transform = `translateY(${0}px)`;
    };
}

window.addEventListener('scroll', () => {

    showContent(lanyardShow);    
    showContent(lanyardTitleShow);   
    showContent(poleronShow);    
    showContent(poleronTitleShow);   
    showContent(productosShow);   
});





            /* - - - - ANIMACIONES - - - - */

objHover(lanyardImage, 102);
objHover(poleronImage, 102);
arrowScale(110);
nextLanyard(lanyardRight, true);
nextLanyard(lanyardLeft, false);
nextPoleron(poleronRight, true);
nextPoleron(poleronLeft, false);


goTo(volverArriba, header, 102);
goTo(quienNav, quienSection, 105);
goTo(lanyardNav, lanyardSection, 105);
goTo(poleronNav, poleronSection, 105);
goTo(contactNav, contactSection, 105);

/* showContent(productosShow);
showContent(lanyardShow);
showContent(poleronShow); */
