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
            STORIESIMAGE.style.height='80%';
            STORIESIMAGE.style.display='block';
            STORIESIMAGE.style.overflow='hidden';

            HOMEMINISTORIES.append(STORIESIMAGE);

            HOMEPOSTSDIV.append(HOMEMINISTORIES);

        });

    })

    .catch(error=>console.log(error))

}
export{HOMEPOSTS};