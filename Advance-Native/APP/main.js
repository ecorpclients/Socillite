const BODY = document.querySelector('body');
//STYLES
BODY.style.position='fixed';
BODY.style.width='100%';
BODY.style.height='100%';
BODY.style.background='transparent';
BODY.style.overflow='hidden';
BODY.style.padding='0';
BODY.style.margin='0';
BODY.style.color='white';
BODY.style.fontFamily='san-serif';
BODY.style.fontSize='20px';
BODY.style.textDecoration='none';
BODY.style.scrollBehavior='smooth';

const DIV = document.querySelector('div');
//STYLES
DIV.style.position='fixed';
DIV.style.width='100%';
DIV.style.height='100%';
DIV.style.background='grey';
DIV.style.overflow='hidden';

const SPLASHSCREEN = () => {

    const SPLASHSCREENIMAGE = document.createElement('img');
    SPLASHSCREENIMAGE.src='../ASSETS/Images/socie 512.svg'
    //STYLES
    SPLASHSCREENIMAGE.style.position='fixed';
    SPLASHSCREENIMAGE.style.width='100%';
    SPLASHSCREENIMAGE.style.height='100%';
    SPLASHSCREENIMAGE.style.background='grey';
    SPLASHSCREENIMAGE.style.overflow='hidden';

    DIV.append(SPLASHSCREENIMAGE);

    setTimeout(() => {

        import("../CONNECTION/Connection.js").then((module) => {
            
            const { CONNECTION } = module;

            if (navigator.onLine) {

                CONNECTION(DIV);
            }

        });

    }, 2000);
    
};

SPLASHSCREEN();