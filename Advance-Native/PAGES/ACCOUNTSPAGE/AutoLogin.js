import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { LOGINPAGE } from "./LoginPage.js";

const AUTOLOGIN=(DIV)=>{

    const STOREDEMAIL=localStorage.getItem('UserEmail')

    const URL=`https://demo.naweri.com/end-points/test-email.php?test_email=${STOREDEMAIL}`

    fetch(URL)

    .then(res => res.json())

    .then(data => {

        if (data.status === 'sucess') {
            
            localStorage.removeItem('UserEmail');

            LOGINPAGE(DIV);           

        } else {
               
            HOMEPAGE(DIV);

        }

    })

    .catch(error => console.log(error))

}

export{AUTOLOGIN};