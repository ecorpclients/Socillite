import { ADVANCE } from "../ADVANCE/Advance.js";
import { ICONSAPI } from "../API/AppApi.js";
import { CHATPAGE } from "../PAGES/HOMEPAGE/ChatPage.js";

const BACKICON=ADVANCE.BACKICON;

const FOOTER=ADVANCE.FOOTER;


const CHATTINGFUNCTION=(DIV,element)=>{

    DIV.innerHTML=``;

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
     USERFUNCTONDIV.style.overflowY='hidden';
     USERFUNCTONDIV.style.display='block';
     USERFUNCTONDIV.style.background='black';
     USERFUNCTONDIV.style.borderRadius='10px 0px 0px 0px';
     USERFUNCTONDIV.style.boxShadow='0px 1px 0px 1px #EAEAE9'

     //USERIMAGE
     const USERIMAGE=document.createElement('img');
     USERIMAGE.src='https://ecorpclients.github.io/Socillite/Advance-Native/ASSETS/Images/profile.jpg';
     //STYLES
     USERIMAGE.style.position='absolute';
     USERIMAGE.style.width='60px';
     USERIMAGE.style.height='60px';
     USERIMAGE.style.right='5px';
     USERIMAGE.style.borderRadius='50px';
     USERIMAGE.style.marginTop='auto';
     USERIMAGE.style.marginBottom='auto';

         //CREATE ONLINE
      const OFFLINE=document.createElement('div');
         //STYLES
      OFFLINE.style.position='absolute';
      OFFLINE.style.width='10px';
      OFFLINE.style.height='10px';
      OFFLINE.style.borderRadius='20px';
      OFFLINE.style.background='grey';
      OFFLINE.style.marginTop='1rem';
      OFFLINE.style.marginBottom='auto';
      OFFLINE.style.marginLeft='3rem';
      OFFLINE.style.marginRight='auto';

      //CONST CHAT DIV HOLDERS
      const CHATMESSAGEDIV=document.createElement('div');
      //STYLES
      CHATMESSAGEDIV.style.position='absolute';
      CHATMESSAGEDIV.style.width='100%';
      CHATMESSAGEDIV.style.height='auto';
      CHATMESSAGEDIV.style.top='8%';
      CHATMESSAGEDIV.style.bottom='32px';
      CHATMESSAGEDIV.style.background='gray';

      CHATMESSAGEDIV.style.overflowY='auto';
      CHATMESSAGEDIV.style.overflowX='hidden';
      CHATMESSAGEDIV.style.marginTop='0.5rem';
      CHATMESSAGEDIV.style.marginBottom='0.5rem';
      CHATMESSAGEDIV.style.display='block';

      //CREATE USERNAME
      const USERNAME=document.createElement('h1');
      USERNAME.innerHTML=element.Name;
      //STYLES
      USERNAME.style.position='absolute';
      USERNAME.style.fontSize='20px';
      USERNAME.style.color='white';
      USERNAME.style.marginTop='1rem';
      USERNAME.style.marginBottom='auto';
      USERNAME.style.marginLeft='10rem';
      USERNAME.style.marginRight='auto';


       //CREATE USERNAME
       const USERDATE=document.createElement('h1');
       USERDATE.innerHTML=element.Time;
       //STYLES
       USERDATE.style.position='absolute';
       USERDATE.style.fontSize='15px';
       USERDATE.style.color='white';
       USERDATE.style.marginTop='2.8rem';
       USERDATE.style.marginBottom='auto';
       USERDATE.style.left='0.5rem';
       USERDATE.style.marginRight='auto';

    const URL='https://ecorpclients.github.io/Socillite/Advance-Native/JSON/Posts.json'


    fetch(URL)

    .then(res => res.json())

    .then(data => {

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

            CHATMESSAGEDIV.append(CHATDIV)


        });

    })

    .catch(error => console.log(error))

    //CHATINPUT
    const CHATINPUT=document.createElement('input');
    CHATINPUT.placeholder='Converse Here';
    //STYLES
    CHATINPUT.style.position='relative';
    CHATINPUT.style.width='80%';
    CHATINPUT.style.minHeight='16px';
    CHATINPUT.style.maxHeight='32px';
    CHATINPUT.style.height='32px';
    CHATINPUT.style.background='grey';
    CHATINPUT.style.left='0.5rem';
    CHATINPUT.style.color='white';
    CHATINPUT.style.textAlign='left';
    CHATINPUT.style.border='none';
    CHATINPUT.style.borderRadius='10px';
    CHATINPUT.style.marginTop='auto';
    CHATINPUT.style.marginBottom='auto';


    //SEND ICON
    const SENDICON=document.createElement('img');
    SENDICON.src=ICONSAPI+'send.png';
    //STYLES
    SENDICON.style.position='absolute';
    SENDICON.style.width='20px';
    SENDICON.style.height='20px';
    SENDICON.style.background='gray';
    SENDICON.style.right='0';
    SENDICON.style.padding='0.5rem';
    SENDICON.style.top='0';
    SENDICON.style.borderRadius='50px';




    FOOTER.innerHTML='';

    FOOTER.style.height='32px';

    FOOTER.append(SENDICON);
    FOOTER.append(CHATINPUT);
    
    DIV.append(USERFUNCTONDIV);

    USERFUNCTONDIV.append(FOOTER);

    USERFUNCTONDIV.append(USERIMAGE);

    USERFUNCTONDIV.append(USERNAME);

    USERFUNCTONDIV.append(USERDATE);

    if (element.online ==='online') {
             
        OFFLINE.style.background='red';

        USERFUNCTONDIV.append(OFFLINE);

    } else {
        
        OFFLINE.style.background='grey';

        USERFUNCTONDIV.append(OFFLINE);
    }

    USERFUNCTONDIV.append(CHATMESSAGEDIV);

    DIV.append(BACKICON);

    BACKICON.onclick=()=>{

        CHATPAGE(DIV);

    }

}

export{CHATTINGFUNCTION}