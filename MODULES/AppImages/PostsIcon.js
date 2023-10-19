import { ICONSAPI } from "../../API/Api.js";

const POSTICON=document.createElement('img');
POSTICON.src=`${ICONSAPI}/post.png`;
//STYLES
POSTICON.style.position='relative';
POSTICON.style.width='30px';
POSTICON.style.height='30px';
POSTICON.style.display='block';
POSTICON.style.marginTop='auto';
POSTICON.style.marginBottom='auto';
POSTICON.style.marginRight='auto';
POSTICON.style.marginLeft='auto';
POSTICON.style.overflow='hidden';

export{POSTICON};