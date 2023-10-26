import { ADVANCE } from "../../ADVANCE/Advance.js";
import { APPPOSTS } from "../../FUNCTIONS/GetPosts.js";
import { APPSTYLES } from "../../STYLES/AppStyles.js";
import { CHATPAGE } from "./ChatPage.js";
import { POSTPAGE } from "./PostPage.js";
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

    FOOTER.innerHTML=``;

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

    POSTICON.onclick=()=>{

        POSTPAGE(DIV);

    }

    CHATICON.onclick=()=>{

        CHATPAGE(DIV);

    }
  
   

    APPSTYLES()

    APPPOSTS(DIV,SCROLLINGDIV)
}



export{HOMEPAGE}