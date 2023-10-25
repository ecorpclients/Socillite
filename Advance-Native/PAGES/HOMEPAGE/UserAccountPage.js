import { ADVANCE } from "../../ADVANCE/Advance.js";
import { GETUSERDATA } from "../../FUNCTIONS/GetUserData.js";
import { HOMEPAGE } from "./HomePage.js";

const BACKICON=ADVANCE.BACKICON;

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML='';

    DIV.append(BACKICON);

    APPSTYLES()

    BACKICON.onclick=()=>{
        
        HOMEPAGE(DIV);

    }
    

    GETUSERDATA(DIV);


}

const APPSTYLES=()=>{

    BACKICON.style.width='20px';
    BACKICON.style.height='20px';
    BACKICON.style.background='black';
    BACKICON.style.borderRadius='50px';
}

export{USERACCOUNTPAGE};