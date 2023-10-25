import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { LOGINPAGE } from "./LoginPage.js";

const AUTOLOGIN = (DIV) => {
    const STOREDEMAIL = localStorage.getItem('UserEmail');

    if (STOREDEMAIL) {
        const URL = `https://demo.naweri.com/end-points/test-email.php?test_email=${STOREDEMAIL}`;

        fetch(URL)
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.Status === 'success') {

                    // User is authenticated, redirect to homepage
                    
                    HOMEPAGE(DIV);

                } else {

                    localStorage.removeItem('UserEmail');
                    // User not authenticated, redirect to login page
                    LOGINPAGE(DIV);
                }
            })
            .catch(error => {
                console.error(error);
                // Handle fetch error if needed
                // For example, you can redirect to the login page here as well
                LOGINPAGE(DIV);
            });
    } else {
        // No stored email, redirect to login page
        LOGINPAGE(DIV);
    }
};

export { AUTOLOGIN };
