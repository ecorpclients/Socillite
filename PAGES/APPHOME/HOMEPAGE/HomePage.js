import { HOMEDIV } from "../HOMEDIV/HomeDiv.js";
import { HOMEFOOTER } from "../HOMEFOOTER/HomeFooter.js";
import { HOMEHEADER } from "../HOMEHEADER/HomeHeader.js";


const HOMEPAGE=(DIV)=>{

    DIV.innerHTML='';

    HOMEHEADER(DIV);

    HOMEDIV(DIV);

    HOMEFOOTER(DIV);

}

export{HOMEPAGE};