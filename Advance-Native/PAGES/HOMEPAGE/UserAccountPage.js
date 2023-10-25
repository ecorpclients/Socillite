import { GETUSERDATA } from "../../FUNCTIONS/GetUserData.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML='';

    GETUSERDATA(DIV);

}


export{USERACCOUNTPAGE};