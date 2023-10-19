import { HOMEPAGEDIV } from "../../../MODULES/Div/HomeDiv.js";
import { HOMESTORIESDIV } from "../../../MODULES/Div/StoriesDiv.js";
import { HOMESTORIES } from "./HomeStories.js";

const HOMEDIV=(DIV)=>{

HOMEPAGEDIV.append(HOMESTORIESDIV);

DIV.append(HOMEPAGEDIV);

HOMESTORIES();

}

export{HOMEDIV};