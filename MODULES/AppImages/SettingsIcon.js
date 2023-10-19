import { ICONSAPI } from "../../API/Api.js";

const SETTINGSICON=document.createElement('img');
SETTINGSICON.src=`${ICONSAPI}/setting.png`;
//STYLES
SETTINGSICON.style.position='relative';
SETTINGSICON.style.width='30px';
SETTINGSICON.style.height='30px';
SETTINGSICON.style.display='block';
SETTINGSICON.style.marginTop='auto';
SETTINGSICON.style.marginBottom='auto';
SETTINGSICON.style.marginRight='auto';
SETTINGSICON.style.marginLeft='auto';
SETTINGSICON.style.overflow='hidden';

export{SETTINGSICON};