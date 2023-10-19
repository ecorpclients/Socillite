import { ICONSAPI } from "../../API/Api.js";

const MESSAGEICON=document.createElement('img');
MESSAGEICON.src=`${ICONSAPI}/chat.png`;
//STYLESs/
MESSAGEICON.style.position='relative';
MESSAGEICON.style.width='30px';
MESSAGEICON.style.height='30px';
MESSAGEICON.style.display='block';
MESSAGEICON.style.marginTop='auto';
MESSAGEICON.style.marginBottom='auto';
MESSAGEICON.style.marginRight='auto';
MESSAGEICON.style.marginLeft='auto';
MESSAGEICON.style.overflow='hidden';

export{MESSAGEICON};