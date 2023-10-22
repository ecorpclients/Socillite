import { ICONSAPI } from "../../API/Api.js";


const USERACCOUNTPAGE=()=>{

    const UserIcon=document.querySelector('.UserIcon');

    const ProfileDiv=document.querySelector('.FunctionsDiv');

    UserIcon.addEventListener('click',()=>{
        
        ProfileDiv.style.display='block';
        
        ProfileDiv.innerHTML=
        `

        <img src='${ICONSAPI}/back.png' class='BackHomeIcon'/>
   

        `;

        CloseProfile();

    })
        
}


const CloseProfile=()=>{

    const ProfileDiv=document.querySelector('.FunctionsDiv');

    const CloseStory=document.querySelector('.BackHomeIcon');

    CloseStory.addEventListener('click',()=>{

        
        ProfileDiv.style.display='none';

    })

}



export{USERACCOUNTPAGE};