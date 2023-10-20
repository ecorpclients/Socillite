import { HOMEDIVDATA} from "./HomeDivData.js";
import { HOMEFOOTERDATA } from "./HomeFooterData.js";
import { HOMEHEADERDATA } from "./HomeHeaderData.js"
import { PostsDisplay } from "./PostsDisplay.js";
import { Stories } from "./StoriesDisplay.js";

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='Header'>${HOMEHEADERDATA}</div>

    <div class='HomeDiv'>${HOMEDIVDATA}</div>

    <div class='Footer'>${HOMEFOOTERDATA}</div>

    <div class='FunctionsDiv'></div>

    `;

    Stories()

    PostsDisplay()

}

export{HOMEPAGE}