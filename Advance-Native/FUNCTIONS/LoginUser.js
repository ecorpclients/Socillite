import { HOMEPAGE } from "../PAGES/HOMEPAGE/HomePage.js";

const LOGINUSER = (DIV, EMAILINPUT, PASSWORDINPUT, LOGINBUTTON, LOGINMESSAGE) => {
    
    if (EMAILINPUT.value && PASSWORDINPUT.value) {

        LOGINBUTTON.innerHTML = `Please Wait`;

        const URL = `https://demo.naweri.com/end-points/login.php`;

        // USER DATA VALUES
        const USERDATA = {
            "Email": EMAILINPUT.value, // Changed from USERNAMEINPUT to EMAILINPUT
            "password": PASSWORDINPUT.value, // Changed from EMAILINPUT to PASSWORDINPUT
        };

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(USERDATA),
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.UserLogin === 'success') {

                localStorage.setItem('UserEmail',data.UserEmail)

                setTimeout(() => {

                    HOMEPAGE(DIV)


                }, 2000);

            } else {

                // Handle error condition or show appropriate message to the user
                LOGINMESSAGE.innerHTML = data.message;
                
                setTimeout(() => {
                    LOGINMESSAGE.innerHTML = '';
                    LOGINBUTTON.innerHTML = `LogIn`;
                }, 2000);

            }

        })
        .catch(error => {
            
            console.error("Error:", error);
            LOGINMESSAGE.innerHTML = `Error occurred. Please try again later.`;
            setTimeout(() => {
                LOGINMESSAGE.innerHTML = '';
                LOGINBUTTON.innerHTML = `LogIn`;
            }, 2000);
        });

    } else {

        LOGINMESSAGE.innerHTML = `Fill All Parts`;

        setTimeout(() => {
            LOGINMESSAGE.innerHTML = '';
        }, 2000);

    }
};

export { LOGINUSER };
