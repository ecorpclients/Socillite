import { ADVANCE } from "../../ADVANCE/Advance.js";
import { CHATTINGFUNCTION } from "../../FUNCTIONS/ChattingFunction.js";
import { HOMEPAGE } from "./HomePage.js";

const BACKICON=ADVANCE.BACKICON;

const CHATPAGE=(DIV)=>{
    
    DIV.innerHTML=``;

    const URL='https://ecorpclients.github.io/Socillite/Advance-Native/JSON/Posts.json'


    fetch(URL)

    .then(res => res.json())

    .then(data => {

        //USERFUNCTONDIV
        const USERFUNCTONDIV=document.createElement('div');
        //STYLES
        USERFUNCTONDIV.style.position='absolute';
        USERFUNCTONDIV.style.width='100%';
        USERFUNCTONDIV.style.height='100%';
        USERFUNCTONDIV.style.top='0';
        USERFUNCTONDIV.style.bottom='0';
        USERFUNCTONDIV.style.left='0';
        USERFUNCTONDIV.style.overflowX='hidden';
        USERFUNCTONDIV.style.overflowY='auto';
        USERFUNCTONDIV.style.display='block';
        USERFUNCTONDIV.style.background='black';
        USERFUNCTONDIV.style.borderRadius='10px 0px 0px 0px';
        USERFUNCTONDIV.style.boxShadow='0px 1px 0px 1px #EAEAE9'
        
        console.log(data)

        data.forEach(element => {
           
            //CONST CHAT DIV HOLDERS
            const CHATDIV=document.createElement('div');
            //STYLES
            CHATDIV.style.position='relative';
            CHATDIV.style.width='95%';
            CHATDIV.style.height='10%';
            CHATDIV.style.background='blue';
            CHATDIV.style.borderRadius='10px';
            CHATDIV.style.left='2%';
            CHATDIV.style.marginTop='0.5rem';
            CHATDIV.style.marginBottom='0.5rem';
            CHATDIV.style.display='inline-flex';


            //USERIMAGE
            const USERIMAGE=document.createElement('img');
            USERIMAGE.src='https://ecorpclients.github.io/Socillite/Advance-Native/ASSETS/Images/profile.jpg';
            //STYLES
            USERIMAGE.style.position='relative';
            USERIMAGE.style.width='60px';
            USERIMAGE.style.height='60px';
            USERIMAGE.style.left='5px';
            USERIMAGE.style.borderRadius='50px';
            USERIMAGE.style.marginTop='auto';
            USERIMAGE.style.marginBottom='auto';

            //CREATE USERNAME
            const USERNAME=document.createElement('h1');
            USERNAME.innerHTML=element.Name;
            //STYLES
            USERNAME.style.position='relative';
            USERNAME.style.fontSize='20px';
            USERNAME.style.marginTop='auto';
            USERNAME.style.marginBottom='auto';
            USERNAME.style.marginLeft='auto';
            USERNAME.style.marginRight='auto';
            
            //CREATE ONLINE
            const ONLINE=document.createElement('div');
            //STYLES
            ONLINE.style.position='relative';
            ONLINE.style.width='10px';
            ONLINE.style.height='10px';
            ONLINE.style.borderRadius='20px';
            ONLINE.style.background='red';
            ONLINE.style.marginTop='auto';
            ONLINE.style.marginBottom='auto';
            ONLINE.style.marginLeft='auto';
            ONLINE.style.marginRight='auto';

               //CREATE ONLINE
            const OFFLINE=document.createElement('div');
               //STYLES
            OFFLINE.style.position='relative';
            OFFLINE.style.width='10px';
            OFFLINE.style.height='10px';
            OFFLINE.style.borderRadius='20px';
            OFFLINE.style.background='grey';
            OFFLINE.style.marginTop='auto';
            OFFLINE.style.marginBottom='auto';
            OFFLINE.style.marginLeft='auto';
            OFFLINE.style.marginRight='auto';

            //CLICK CHAT DIV

            CHATDIV.addEventListener('click',()=>{

                CHATTINGFUNCTION(DIV,element);

            })

           
            



           

           
            //APPEND THE DATA
            USERFUNCTONDIV.append(CHATDIV);

            CHATDIV.append(USERIMAGE);

            CHATDIV.append(USERNAME);

            if (element.online ==='online') {
                
                CHATDIV.append(ONLINE);

            } else {
                
                CHATDIV.append(OFFLINE);
            }


            
            
            
        });

        DIV.append(USERFUNCTONDIV);

        DIV.append(BACKICON);

        BACKICON.onclick=()=>{
                    
            HOMEPAGE(DIV)
        
          }
        
    })

    .catch(error => console.log(error))

}

export{CHATPAGE};