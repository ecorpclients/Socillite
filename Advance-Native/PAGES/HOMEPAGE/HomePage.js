import { ADVANCE } from "../../ADVANCE/Advance.js";
import { APPPOSTS } from "../../FUNCTIONS/GetPosts.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

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

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=``;

    DIV.append(HEADER);

    DIV.append(SCROLLINGDIV);
   
    DIV.append(FOOTER);
    
    //APPEND IMAGES TO FOOTER
    FOOTER.append(CHATICON);
    FOOTER.append(POSTICON);
    FOOTER.append(SETTINGSICON);

    //APPEND IMAGES FOR HEADER
    HEADER.append(PROFILEICON);
    HEADER.append(MENUICON);

    PROFILEICON.onclick=()=>{

        USERACCOUNTPAGE(DIV)

    }
  
   

    APPSTYLES();

    APPPOSTS(DIV,SCROLLINGDIV)
}

const APPSTYLES=()=>{

    //SCROLLING DIV
    SCROLLINGDIV.style.top='10%';
    SCROLLINGDIV.style.bottom='10%';
    SCROLLINGDIV.style.background='black';

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

    


}

export{HOMEPAGE}