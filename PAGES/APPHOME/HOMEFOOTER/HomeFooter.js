import { MESSAGEICON } from "../../../MODULES/AppImages/MessageIcon.js";
import { POSTICON } from "../../../MODULES/AppImages/PostsIcon.js";
import { SETTINGSICON } from "../../../MODULES/AppImages/SettingsIcon.js";
import { FIXEDFOOTER } from "../../../MODULES/Footers/FixedFooter.js";

const HOMEFOOTER=(DIV)=>{

    FIXEDFOOTER.append(MESSAGEICON);

    FIXEDFOOTER.append(POSTICON);

    FIXEDFOOTER.append(SETTINGSICON);

    DIV.append(FIXEDFOOTER);

}

export{HOMEFOOTER};