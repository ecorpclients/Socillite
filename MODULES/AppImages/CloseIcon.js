import { ICONSAPI } from "../../API/Api.js";

const CLOSEICON=document.createElement('img');
CLOSEICON.src=`${ICONSAPI}/close.png`;
//STYLES
CLOSEICON.style.position='absolute';
CLOSEICON.style.width='20px';
CLOSEICON.style.height='20px';
CLOSEICON.style.display='block';
CLOSEICON.style.marginTop='0.5rem';
CLOSEICON.style.padding='10px';
CLOSEICON.style.right='0px';
CLOSEICON.style.overflow='hidden';

export{CLOSEICON};