const DIV = document.querySelector('div');

const SPLASHSCREEN = () => {

    DIV.innerHTML = `

        <img class='SplashScreenImage' src='socie 512.jpg'/>

    `;

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
