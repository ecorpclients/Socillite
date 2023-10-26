import { ADVANCE } from "../ADVANCE/Advance.js"

//APP SECTION
const HEADER=ADVANCE.HEADER;
const SCROLLINGDIV=ADVANCE.SCROLLINGDIV;
const FOOTER=ADVANCE.FOOTER;
//ICON SECTION
const POSTICON=ADVANCE.POSTICON;
const SETTINGSICON=ADVANCE.SETTINGSICON;
const CHATICON=ADVANCE.CHATICON;
const PROFILEICON=ADVANCE.PROFILEICON;
const MENUICON=ADVANCE.MENUICON;
const BACKICON=ADVANCE.BACKICON;

const APPSTYLES=()=>{

   
    //HEADER
    HEADER.style.background='#7E7A98';

    //FOOTER
    FOOTER.style.background='#7E7A98';

    //SCROLLING DIV
    SCROLLINGDIV.style.top='10%';
    SCROLLINGDIV.style.bottom='10%';
    SCROLLINGDIV.style.background='#7E7A98';

    //PROFILE ICON
    PROFILEICON.style.position='absolute';
    PROFILEICON.style.right='0';
    PROFILEICON.style.top='10%';
    PROFILEICON.style.padding='1rem';

    //MENU ICON
    MENUICON.style.position='absolute';
    MENUICON.style.left='0';
    MENUICON.style.top='10%';
    MENUICON.style.padding='1rem';

    BACKICON.style.width='20px';
    BACKICON.style.height='20px';
    BACKICON.style.background='#7E7A98';
    BACKICON.style.borderRadius='50px';
}

export{APPSTYLES}