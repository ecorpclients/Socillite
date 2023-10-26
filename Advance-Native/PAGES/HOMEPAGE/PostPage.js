import { ADVANCE } from "../../ADVANCE/Advance.js";
import { APPSTYLES } from "../../STYLES/AppStyles.js";
import { HOMEPAGE } from "./HomePage.js";

const BACKICON=ADVANCE.BACKICON;

const DELETEICON=ADVANCE.DELETEICON;

const EDITICON=ADVANCE.EDITICON;

const REVIEWICON=ADVANCE.REVIEWICON;

const POSTPAGE=(DIV)=>{

    DIV.innerHTML=``;

    //APPSECTION
    const USERNAMEHOLDER=document.createElement('h1');
    USERNAMEHOLDER.innerHTML='Create A Post';
      //STYLES
    USERNAMEHOLDER.style.position='absolute';
    USERNAMEHOLDER.style.width='auto';
    USERNAMEHOLDER.style.height='auto';
    USERNAMEHOLDER.style.fontSize='20px';
    USERNAMEHOLDER.style.padding='0.3rem';
    USERNAMEHOLDER.style.borderRadius='5px';
    USERNAMEHOLDER.style.background='#7E7A98';
    USERNAMEHOLDER.style.display='block';
    USERNAMEHOLDER.style.right='1rem';
    USERNAMEHOLDER.style.top='0%';
    USERNAMEHOLDER.style.textAlign='center';


     //CREATE A PROFILE IMAGE 
     const PROFILEIMAGE=document.createElement('img');
     PROFILEIMAGE.src=`https://ecorpclients.github.io/Socillite/Advance-Native/ASSETS/Images/profile.jpg`;
       //STYLES
     PROFILEIMAGE.style.position='absolute';
     PROFILEIMAGE.style.width='100%';
     PROFILEIMAGE.style.height='auto';
     PROFILEIMAGE.style.display='block';
     PROFILEIMAGE.style.top='0%';
     PROFILEIMAGE.style.bottom='10%';
   
     

     //USERFUNCTONDIV
     const USERFUNCTONDIV=document.createElement('div');
     //STYLES
     USERFUNCTONDIV.style.position='absolute';
     USERFUNCTONDIV.style.width='100%';
     USERFUNCTONDIV.style.height='10%';
     USERFUNCTONDIV.style.bottom='0';
     USERFUNCTONDIV.style.left='0';
     USERFUNCTONDIV.style.display='flex';
     USERFUNCTONDIV.style.background='#7E7A98';
     USERFUNCTONDIV.style.borderRadius='10px 0px 0px 0px';
     USERFUNCTONDIV.style.boxShadow='0px 1px 0px 1px #EAEAE9'


    

    DIV.append(PROFILEIMAGE);

    USERFUNCTONDIV.append(REVIEWICON);

    USERFUNCTONDIV.append(EDITICON);

    USERFUNCTONDIV.append(DELETEICON);

    
    EDITICON.onclick = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
    
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const imageUrl = reader.result;
                    PROFILEIMAGE.src = imageUrl;
                };
                reader.readAsDataURL(file);
            }
        });
    
        fileInput.click();
    };
    

    
    DIV.append(USERFUNCTONDIV);

    DIV.append(USERNAMEHOLDER);

    DIV.append(BACKICON);

    BACKICON.onclick=()=>{

        HOMEPAGE(DIV);
    }
   
    APPSTYLES();

}

export{POSTPAGE}