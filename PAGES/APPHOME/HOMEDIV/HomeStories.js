const HOMESTORIES = (HOMESTORIESDIV,ICONSAPI) => {
    
    fetch('../../../JSON/Stories.json')
        .then(res => res.json())
        .then(data => {
            
            data.forEach(element => {
                
                const HOMEMINISTORIES=document.createElement('div');
                //STYLES
                HOMEMINISTORIES.style.position='relative';
                HOMEMINISTORIES.style.width='20%';
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

                const STORIESIMAGE=document.createElement('img');
                STORIESIMAGE.src=ICONSAPI+element.Image;
                //STYLES
                STORIESIMAGE.style.position='relative';
                STORIESIMAGE.style.width='100%';
                STORIESIMAGE.style.height='100%';
                STORIESIMAGE.style.display='block';
                STORIESIMAGE.style.overflow='hidden';

                //APPEND THE DATA
                
                HOMEMINISTORIES.append(STORIESIMAGE);

                HOMESTORIESDIV.append(HOMEMINISTORIES);

            });

        })
        .catch(error => console.log(error));
};

export { HOMESTORIES };
