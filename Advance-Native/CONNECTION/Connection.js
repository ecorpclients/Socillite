import { OPERATINGSYSTEM } from "../PACKAGES/OperatingSystemChecker/OperatingSystemChecker.js";
import { ZOOMEFFECT } from "../PACKAGES/ZoomEffect/ZoomEffect.js";
import { AUTOLOGIN } from "../PAGES/ACCOUNTSPAGE/AutoLogin.js";




const CONNECTION=(DIV)=>{

    DIV.style.background='#7E7A98';
    
    OPERATINGSYSTEM();

    ZOOMEFFECT();

    //APP START HERE
    AUTOLOGIN(DIV);

    

}

export{CONNECTION}