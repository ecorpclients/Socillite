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
                HOMEMINISTORIES.style.background='red';
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

                FULLSTORYDIV.style.display='block';  

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
                COMMENTINPUT.style.bottom='0%';
                COMMENTINPUT.style.display='block';
                COMMENTINPUT.style.overflow='hidden';
                COMMENTINPUT.style.borderRadius='10px';

                //SEND ICON
                const SENDICON=document.createElement('img');
                SENDICON.src=ICONSAPI+'/send.png';
                //STYLES
                SENDICON.style.position='absolute';
                SENDICON.style.width='30px';
                SENDICON.style.height='30px';
                SENDICON.style.right='15px';
                SENDICON.style.bottom='0';
                SENDICON.style.marginBottom='3%';
                SENDICON.style.display='block';
                SENDICON.style.overflow='hidden';

                //SEND THE POST
                SENDICON.addEventListener('click',()=>{

                    alert('');

                });

                FULLSTORYDIV.append(POSTIMAGE);

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
