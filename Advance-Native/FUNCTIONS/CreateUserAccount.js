import { HOMEPAGE } from "../PAGES/HOMEPAGE/HomePage.js";

const CREATEUSERACCOUNT=(DIV,CREATEACCOUNTBUTTON,USERNAMEINPUT,EMAILINPUT,PASSWORDINPUT,CREATEINPUTDATE,CREATEPHONENUMBER,CREATELOCATIONINPUT,CREATEMESSAGE)=>{

    if (USERNAMEINPUT.value && EMAILINPUT.value && PASSWORDINPUT.value && CREATEINPUTDATE.value && CREATEPHONENUMBER.value && CREATELOCATIONINPUT.value ) {
        
        CREATEACCOUNTBUTTON.innerHTML = `Please Wait`;

        const URL = `https://demo.naweri.com/end-points/sign-up.php`;

        //USER DATA VALUES
        const USERDATA={

            "UserName":USERNAMEINPUT.value,
            "UserEmail": EMAILINPUT.value,
            "UserName":USERNAMEINPUT.value,
            "UserName":USERNAMEINPUT.value,
            "UserPassword":PASSWORDINPUT.value,
            "UserDate":CREATEINPUTDATE.value,
            "UserCreatedOn":Date.now(),
            "UserTelephone": CREATEPHONENUMBER.value,
            "UserLocation": CREATELOCATIONINPUT.value,

        }
            
        fetch(URL, {
            method: "POST",
            body:JSON.stringify(USERDATA),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.UserRegistration ==="success"){

                localStorage.setItem('UserName',data.UserName);

                localStorage.setItem('UserEmail',data.UserEmail);

                CREATEMESSAGE.innerHTML=data.message;

                setTimeout(() => {
                    
                    HOMEPAGE(DIV)

                }, 2000);
                                    
                
                
            }else{

                CREATEMESSAGE.innerHTML=data.message;

                setTimeout(() => {
                 
                    CREATEMESSAGE.innerHTML=``;

                    CREATEACCOUNTBUTTON.innerHTML = `Create Account`;
                    
                }, 2000);

            }

        })
        .catch(error => console.log(error));


    } else {
        

        CREATEMESSAGE.innerHTML = `Fill All Parts`;

        setTimeout(() => {

            CREATEMESSAGE.innerHTML = '';

        }, 2000);

    }


}

export{CREATEUSERACCOUNT};

