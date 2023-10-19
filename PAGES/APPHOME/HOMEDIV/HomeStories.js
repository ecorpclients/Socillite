import { STORIESIMAGE } from "../../../MODULES/AppImages/StoriesImages.js";
import { HOMEMINISTORIES } from "../../../MODULES/Div/MiniStoriesDiv.js";
import { HOMESTORIESDIV } from "../../../MODULES/Div/StoriesDiv.js";

const HOMESTORIES=()=>{

    fetch('../../../JSON/Stories.json')

    .then(res=>res.json())

    .then(data =>{

        data.forEach(element => {
        
            STORIESIMAGE.src=element.Image;

            HOMEMINISTORIES.append(STORIESIMAGE)

            HOMESTORIESDIV.append(HOMEMINISTORIES)

        });

    })

    .catch(error => console.log(error));

}

export{HOMESTORIES};