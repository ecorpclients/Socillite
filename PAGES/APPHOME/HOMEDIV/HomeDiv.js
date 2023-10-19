import { ICONSAPI } from "../../../API/Api.js";
import { CLOSEICON } from "../../../MODULES/AppImages/CloseIcon.js";
import { FULLSTORYDIV } from "../../../MODULES/Div/FullDIV.js";
import { HOMEPAGEDIV } from "../../../MODULES/Div/HomeDiv.js";
import { HOMESTORIESDIV } from "../../../MODULES/Div/StoriesDiv.js";
import { HOMESTORIES } from "./HomeStories.js";

const HOMEDIV=(DIV)=>{

HOMEPAGEDIV.append(HOMESTORIESDIV);

DIV.append(HOMEPAGEDIV);

HOMESTORIES(HOMESTORIESDIV,ICONSAPI,FULLSTORYDIV,DIV,CLOSEICON);

}

export{HOMEDIV};