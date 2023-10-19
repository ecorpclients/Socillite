import { ICONSAPI } from "../../API/Api.js";

const USERICON=document.createElement('img');
USERICON.src=`${ICONSAPI}/profile.png`;
//STYLES
USERICON.style.position='absolute';
USERICON.style.width='30px';
USERICON.style.height='30px';
USERICON.style.display='block';
USERICON.style.marginTop='1rem';
USERICON.style.padding='10px';
USERICON.style.right='0px';
USERICON.style.overflow='hidden';

export{USERICON};