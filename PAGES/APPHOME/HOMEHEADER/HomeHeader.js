import { MENUICON } from "../../../MODULES/AppImages/MenuIcon.js";
import { USERICON } from "../../../MODULES/AppImages/UserIcon.js";
import { FIXEDHEADER } from "../../../MODULES/Headers/FixedDiv.js";

const HOMEHEADER=(DIV)=>{

    DIV.innerHTML='';

    FIXEDHEADER.append(MENUICON);

    FIXEDHEADER.append(USERICON);

    DIV.append(FIXEDHEADER);

}

export{HOMEHEADER};