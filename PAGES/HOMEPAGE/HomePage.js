import { HOMEFOOTERDATA } from "./HomeFooterData.js";
import { HOMEHEADERDATA } from "./HomeHeaderData.js"

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='Header'>${HOMEHEADERDATA}</div>

    <div class='HomeDiv'></div>

    <div class='Footer'>${HOMEFOOTERDATA}</div>

    `;

}

export{HOMEPAGE}