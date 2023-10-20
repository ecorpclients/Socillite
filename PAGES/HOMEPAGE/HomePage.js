import { HOMEDIVDATA } from "./HomeDivData.js";
import { HOMEFOOTERDATA } from "./HomeFooterData.js";
import { HOMEHEADERDATA } from "./HomeHeaderData.js"

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='Header'>${HOMEHEADERDATA}</div>

    <div class='HomeDiv'>${HOMEDIVDATA}</div>

    <div class='Footer'>${HOMEFOOTERDATA}</div>

    `;

}

export{HOMEPAGE}