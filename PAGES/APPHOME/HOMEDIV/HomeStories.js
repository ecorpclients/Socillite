const HOMESTORIES = (HOMESTORIESDIV,ICONSAPI,FULLSTORYDIV,DIV,CLOSEICON) => {
    
    fetch('https://ecorpclients.github.io/Socillite/JSON/Stories.json')
        .then(res => res.json())
        .then(data => {
            
            data.forEach(element => {
                
                //STOIRES
                const HOMEMINISTORIES=document.createElement('div');
                //STYLES
                HOMEMINISTORIES.style.position='relative';
                HOMEMINISTORIES.style.width='30%';
                HOMEMINISTORIES.style.height='90%';
                HOMEMINISTORIES.style.background='#cfcfc0';
                HOMEMINISTORIES.style.display='block';
                HOMEMINISTORIES.style.overflow='hidden';
                HOMEMINISTORIES.style.marginTop='1%';
                HOMEMINISTORIES.style.marginBottom='1%';
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
                STORIESIMAGE.style.height='100%';
                STORIESIMAGE.style.display='block';
                STORIESIMAGE.style.overflow='hidden';
                
                //CLICK TO WATCH STORIES
                HOMEMINISTORIES.addEventListener('click',()=>{
                    
                FULLSTORYDIV.innerHTML=``; 

                FULLSTORYDIV.style.display='block'; 
                
                //POSTERS NAME 
                const POSTERNAME=document.createElement('h1');
                POSTERNAME.innerHTML=element.Name;
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


                //STORIES IMAGES
                const POSTIMAGE=document.createElement('img');
                POSTIMAGE.src=ICONSAPI+element.Image;
                //STYLES
                POSTIMAGE.style.position='absolute';
                POSTIMAGE.style.width='90%';
                POSTIMAGE.style.top='10%';
                POSTIMAGE.style.left='5%';
                POSTIMAGE.style.height='auto';
                POSTIMAGE.style.display='block';
                POSTIMAGE.style.overflow='hidden';
                POSTIMAGE.style.borderRadius='10px';

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

                //SEND THE POST
                SENDICON.addEventListener('click',()=>{

                    alert('');

                });

                FULLSTORYDIV.append(POSTIMAGE);

                FULLSTORYDIV.append(POSTERNAME);

                FULLSTORYDIV.append(SENDICON);

                FULLSTORYDIV.append(COMMENTINPUT);

                FULLSTORYDIV.append(CLOSEICON);

                CLOSEICON.addEventListener('click',()=>{

                    FULLSTORYDIV.style.display='none'; 

                })
                
                DIV.append(FULLSTORYDIV);

                })

                //APPEND THE DATA

                HOMEMINISTORIES.append(STORIESIMAGE);

                HOMESTORIESDIV.append(HOMEMINISTORIES);

            });

        })
        .catch(error => console.log(error));
};

export { HOMESTORIES };
