import { ICONSAPI } from "../API/AppApi.js";


const APPPOSTS=(DIV,SCROLLINGDIV)=>{

    const URL='https://ecorpclients.github.io/Socillite/Advance-Native/JSON/Posts.json'

    fetch(URL)

    .then(res => res.json())

    .then(data => {

        data.forEach(element => {
            
            //Const Post Div Holder
            const POSTHOLDER=document.createElement('div');
            //STYLES
            POSTHOLDER.style.position='relatve';
            POSTHOLDER.style.width='100%';
            POSTHOLDER.style.height='100%';
            POSTHOLDER.style.background='orange';
            POSTHOLDER.style.position='relatve';
            POSTHOLDER.style.marginTop='0.5rem';
            POSTHOLDER.style.marginBottom='0.5rem';

            //Const IMAGE Div Holder
            const POSTIMAGEHOLDER=document.createElement('div');
            //STYLES
            POSTIMAGEHOLDER.style.position='relatve';
            POSTIMAGEHOLDER.style.width='100%';
            POSTIMAGEHOLDER.style.height='90%';
            POSTIMAGEHOLDER.style.background='teal';
            POSTIMAGEHOLDER.style.position='relatve';
   
            //Const FUNCTION Div Holder
            const POSTFUNCTIONSHOLDER=document.createElement('div');
            //STYLES
            POSTFUNCTIONSHOLDER.style.position='relatve';
            POSTFUNCTIONSHOLDER.style.width='100%';
            POSTFUNCTIONSHOLDER.style.height='10%';
            POSTFUNCTIONSHOLDER.style.background='blue';
            POSTFUNCTIONSHOLDER.style.position='relatve';
 
            //APPEND TO SOURCE

            POSTHOLDER.append(POSTIMAGEHOLDER);

            POSTHOLDER.append(POSTFUNCTIONSHOLDER);

            

            SCROLLINGDIV.append(POSTHOLDER);

        });

    })

    .catch(error =>console.log(error))

}

export{APPPOSTS};