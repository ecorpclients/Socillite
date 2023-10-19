import { ICONSAPI } from "../../../API/Api.js";
import { CLOSEICON } from "../../../MODULES/AppImages/CloseIcon.js";
import { FULLSTORYDIV } from "../../../MODULES/Div/FullDIV.js";
import { HOMEPAGEDIV } from "../../../MODULES/Div/HomeDiv.js";
import { HOMEPOSTSDIV} from "../../../MODULES/Div/PostsDiv.js";
import { HOMESTORIESDIV } from "../../../MODULES/Div/StoriesDiv.js";
import { HOMEPOSTS } from "./HomePosts.js";
import { HOMESTORIES } from "./HomeStories.js";

const HOMEDIV=(DIV)=>{

HOMEPAGEDIV.append(HOMESTORIESDIV);

HOMEPAGEDIV.append(HOMEPOSTSDIV);

HOMESTORIES(HOMESTORIESDIV,ICONSAPI,FULLSTORYDIV,DIV,CLOSEICON);

HOMEPOSTS(DIV,HOMEPOSTSDIV,ICONSAPI);

DIV.append(HOMEPAGEDIV);


}

export{HOMEDIV};