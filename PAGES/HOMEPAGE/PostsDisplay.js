import { ICONSAPI } from "../../API/Api.js";

const PostsDisplay=()=>{

    const POSTSDIV=document.querySelector('.PostDiv');

    POSTSDIV.innerHTML='';

    fetch('https://ecorpclients.github.io/Socillite/JSON/stories.json')

    .then(res => res.json())

    .then(data => {

        data.forEach(element => {
            
            const POSTHOLDER=document.createElement('div');
            POSTHOLDER.classList.add('POSTHOLDER');

            POSTHOLDER.innerHTML=`
            
            <img src='${ICONSAPI}google.png' class='PostImage'/>

            <div class='PostFunctions'>
                
                <img src='${ICONSAPI}/google.png' id='UserProfileIcon' class='FooterIcons'/>

                <img src='${ICONSAPI}/heart.png' id='CommentsIcon' class='FooterIcons'/>

                <img src='${ICONSAPI}/review.png' class='FooterIcons'/>

                <img src='${ICONSAPI}/share.png' class='FooterIcons'/>
                
            </div>

            `;

            
           
            POSTSDIV.append(POSTHOLDER);

        });

    })

    .catch( error => console.log(error))

}


export{PostsDisplay}