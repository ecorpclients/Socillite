import { CLOSEICON } from "../../../MODULES/AppImages/CloseIcon.js";
import { FULLSTORYDIV } from "../../../MODULES/Div/FullDIV.js";

const HOMEPOSTS=(DIV,HOMEPOSTSDIV,ICONSAPI)=>{

    fetch('https://ecorpclients.github.io/Socillite/JSON/Stories.json')
    
    .then(res => res.json())

    .then(data => {

        data.forEach(element => {
            
            //STOIRES
            const HOMEMINISTORIES=document.createElement('div');
            //STYLES
            HOMEMINISTORIES.style.position='relative';
            HOMEMINISTORIES.style.width='100%';
            HOMEMINISTORIES.style.height='100%';
            HOMEMINISTORIES.style.background='#cfcfc0';
            HOMEMINISTORIES.style.display='block';
            HOMEMINISTORIES.style.overflow='hidden';
            HOMEMINISTORIES.style.marginTop='1rem';
            HOMEMINISTORIES.style.marginBottom='1rem';
            HOMEMINISTORIES.style.marginLeft='1%';
            HOMEMINISTORIES.style.marginRight='1%';
            HOMEMINISTORIES.style.borderRadius='10px';
            HOMEMINISTORIES.style.flexShrink='0';

            //STORIES IMAGES
            const STORIESIMAGE=document.createElement('img');
            STORIESIMAGE.src=ICONSAPI+element.Image;
            //STYLES
            STORIESIMAGE.style.position='absolute';
            STORIESIMAGE.style.width='100%';
            STORIESIMAGE.style.height='85%';
            STORIESIMAGE.style.display='block';
            STORIESIMAGE.style.overflow='hidden';

            //FUNCTIONS
            const HOMEPOSTFUNCTIONS=document.createElement('div');
            //STYLES
            HOMEPOSTFUNCTIONS.style.position='absolute';
            HOMEPOSTFUNCTIONS.style.width='100%';
            HOMEPOSTFUNCTIONS.style.height='15%';
            HOMEPOSTFUNCTIONS.style.background='#a5a5a1';
            HOMEPOSTFUNCTIONS.style.bottom='0';
            HOMEPOSTFUNCTIONS.style.display='inline-flex';


            //POSTESR IMAGES
            const POSTERSIMAGE=document.createElement('img');
            POSTERSIMAGE.src=ICONSAPI+element.Image;
            //STYLES
            POSTERSIMAGE.style.position='relative';
            POSTERSIMAGE.style.width='40px';
            POSTERSIMAGE.style.height='40px';
            POSTERSIMAGE.style.display='block';
            POSTERSIMAGE.style.overflow='hidden';
            POSTERSIMAGE.style.marginTop='auto';
            POSTERSIMAGE.style.marginBottom='auto';
            POSTERSIMAGE.style.marginLeft='auto';
            POSTERSIMAGE.style.marginRight='auto';
            POSTERSIMAGE.style.borderRadius='50px';

            //LIKEICON
            const LIKEICON=document.createElement('img');
            LIKEICON.src=ICONSAPI+'/like.png';
            //STYLES
            LIKEICON.style.position='relative';
            LIKEICON.style.width='40px';
            LIKEICON.style.height='40px';
            LIKEICON.style.display='block';
            LIKEICON.style.overflow='hidden';
            LIKEICON.style.marginTop='auto';
            LIKEICON.style.marginBottom='auto';
            LIKEICON.style.marginLeft='auto';
            LIKEICON.style.marginRight='auto';

            //COMMENT ICON
            const COMMENTICON=document.createElement('img');
            COMMENTICON.src=ICONSAPI+'/review.png';
            //STYLES
            COMMENTICON.style.position='relative';
            COMMENTICON.style.width='30px';
            COMMENTICON.style.height='30px';
            COMMENTICON.style.display='block';
            COMMENTICON.style.overflow='hidden';
            COMMENTICON.style.marginTop='auto';
            COMMENTICON.style.marginBottom='auto';
            COMMENTICON.style.marginLeft='auto';
            COMMENTICON.style.marginRight='auto';

            //COMMENT ON THE
            COMMENTICON.addEventListener('click',()=>{

                FULLSTORYDIV.innerHTML='';

                FULLSTORYDIV.style.display='block'; 
                
                //POSTERS NAME 
                const POSTERNAME=document.createElement('h1');
                POSTERNAME.innerHTML='Comments';
                //STYLES
                POSTERNAME.style.position='absolute';
                POSTERNAME.style.width='auto';
                POSTERNAME.style.fontSize='20px';
                POSTERNAME.style.top='0%';
                POSTERNAME.style.background='#c9c9bf';
                POSTERNAME.style.left='1%';
                POSTERNAME.style.height='auto';
                POSTERNAME.style.display='block';
                POSTERNAME.style.padding='1%';
                POSTERNAME.style.overflow='hidden';
                POSTERNAME.style.borderRadius='10px';
                POSTERNAME.style.textAlign='center';

                //COMMENT INPUT
                const COMMENTINPUT=document.createElement('input');
                COMMENTINPUT.type='text';
                //STYLES
                COMMENTINPUT.style.position='absolute';
                COMMENTINPUT.style.width='80%';
                COMMENTINPUT.style.bottom='0%';
                COMMENTINPUT.style.marginBottom='1%';
                COMMENTINPUT.style.color='white';
                COMMENTINPUT.style.background='grey';
                COMMENTINPUT.style.left='2%';
                COMMENTINPUT.style.minHeight='16px';
                COMMENTINPUT.style.height='32px';
                COMMENTINPUT.style.maxHeight='32px';
                COMMENTINPUT.style.bottom='3%';
                COMMENTINPUT.style.display='block';
                COMMENTINPUT.style.overflow='hidden';
                COMMENTINPUT.style.borderRadius='10px';

                //SEND ICON
                const SENDICON=document.createElement('img');
                SENDICON.src=ICONSAPI+'/send.png';
                //STYLES
                SENDICON.style.position='absolute';
                SENDICON.style.width='25px';
                SENDICON.style.height='25px';
                SENDICON.style.right='10px';
                SENDICON.style.bottom='3%';
                SENDICON.style.marginBottom='1%';
                SENDICON.style.display='block';
                SENDICON.style.overflow='hidden';
                SENDICON.style.background='gray';
                SENDICON.style.padding='0.5rem';
                SENDICON.style.borderRadius='50px';

                //COMMENTS DIV DISPLAY
                const COMMENTSDIVDISPLAY=document.createElement('div');
                //STYLES
                COMMENTSDIVDISPLAY.style.position='absolute';
                COMMENTSDIVDISPLAY.style.width='100%';
                COMMENTSDIVDISPLAY.style.height='auto';
                COMMENTSDIVDISPLAY.style.bottom='0%';
                COMMENTSDIVDISPLAY.style.top='7%';
                COMMENTSDIVDISPLAY.style.background='#bebeb7';
                COMMENTSDIVDISPLAY.style.display='block';
                COMMENTSDIVDISPLAY.style.overflow='hidden';

                //COMMENTS NAME 
                const COMMENTSNAME=document.createElement('h1');
                COMMENTSNAME.innerHTML=element.Name+'<br><br>'+element.TimePosted;
                //STYLES
                COMMENTSNAME.style.position='relative';
                COMMENTSNAME.style.width='90%';
                COMMENTSNAME.style.fontSize='20px';
                COMMENTSNAME.style.top='0%';
                COMMENTSNAME.style.background='#c9c9bf';
                COMMENTSNAME.style.left='5%';
                COMMENTSNAME.style.wordBreak='wordwrap';
                COMMENTSNAME.style.height='auto';
                COMMENTSNAME.style.display='block';
                COMMENTSNAME.style.padding='1%';
                COMMENTSNAME.style.overflow='hidden';
                COMMENTSNAME.style.borderRadius='10px';
                COMMENTSNAME.style.textAlign='left';

                COMMENTSDIVDISPLAY.append(COMMENTSNAME);

                FULLSTORYDIV.append(COMMENTSDIVDISPLAY);

                FULLSTORYDIV.append(POSTERNAME);

                FULLSTORYDIV.append(COMMENTINPUT);

                FULLSTORYDIV.append(SENDICON);

                FULLSTORYDIV.append(CLOSEICON);

                CLOSEICON.addEventListener('click',()=>{

                    FULLSTORYDIV.style.display='none'; 

                })

                DIV.append(FULLSTORYDIV);

            });

            //SHARE ICON
            const SHAREICON=document.createElement('img');
            SHAREICON.src=ICONSAPI+'/share.png';
            //STYLES
            SHAREICON.style.position='relative';
            SHAREICON.style.width='30px';
            SHAREICON.style.height='30px';
            SHAREICON.style.display='block';
            SHAREICON.style.overflow='hidden';
            SHAREICON.style.marginTop='auto';
            SHAREICON.style.marginBottom='auto';
            SHAREICON.style.marginLeft='auto';
            SHAREICON.style.marginRight='auto';

            //APEND DATA
            HOMEPOSTFUNCTIONS.append(POSTERSIMAGE);
            HOMEPOSTFUNCTIONS.append(LIKEICON);
            HOMEPOSTFUNCTIONS.append(COMMENTICON);
            HOMEPOSTFUNCTIONS.append(SHAREICON);
            HOMEMINISTORIES.append(STORIESIMAGE);
            HOMEMINISTORIES.append(HOMEPOSTFUNCTIONS);
            HOMEPOSTSDIV.append(HOMEMINISTORIES);

        });

    })

    .catch(error=>console.log(error))

}
export{HOMEPOSTS};