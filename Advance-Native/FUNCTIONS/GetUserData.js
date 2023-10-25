import { ADVANCE } from "../ADVANCE/Advance.js";
import { HOMEPAGE } from "../PAGES/HOMEPAGE/HomePage.js";

const BACKICON=ADVANCE.BACKICON;

const DELETEICON=ADVANCE.DELETEICON;

const EDITICON=ADVANCE.EDITICON;

const DOWNLOADICON=ADVANCE.DOWNLOADICON;

const LOGOUTICON=ADVANCE.LOGOUTICON;

const HELPICON=ADVANCE.HELPICON;

const GETUSERDATA = (DIV) => {

    const URL = `https://demo.naweri.com/end-points/users-list.php`;

    const STOREDEMAIL = localStorage.getItem('UserEmail');

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const user = data.find(user => user.UserEmail === STOREDEMAIL);

            if (user) {

              console.log(user);

              //CREATE A PROFILE IMAGE 
              const PROFILEIMAGE=document.createElement('img');
              PROFILEIMAGE.src='../ASSETS/Images/profile.jpg';
                //STYLES
              PROFILEIMAGE.style.position='absolute';
              PROFILEIMAGE.style.width='100%';
              PROFILEIMAGE.style.height='50%';
              PROFILEIMAGE.style.display='block';
              PROFILEIMAGE.style.top='0%';
              PROFILEIMAGE.style.borderRadius='0px 0px 10px 10px';

              //CREATE A PROFILE IMAGE 
              const USERNAMEHOLDER=document.createElement('h1');
              USERNAMEHOLDER.innerHTML=user.UserName;
                //STYLES
              USERNAMEHOLDER.style.position='absolute';
              USERNAMEHOLDER.style.width='auto';
              USERNAMEHOLDER.style.height='auto';
              USERNAMEHOLDER.style.fontSize='20px';
              USERNAMEHOLDER.style.padding='0.3rem';
              USERNAMEHOLDER.style.borderRadius='5px';
              USERNAMEHOLDER.style.background='black';
              USERNAMEHOLDER.style.display='block';
              USERNAMEHOLDER.style.right='1rem';
              USERNAMEHOLDER.style.top='0%';
              USERNAMEHOLDER.style.textAlign='center';

              //CREATE A DIV FOR USERDETAILS
              const USERDETAILS=document.createElement('div');
              //STYLES
              USERDETAILS.style.position='absolute';
              USERDETAILS.style.width='100%';
              USERDETAILS.style.height='50%';
              USERDETAILS.style.bottom='0';
              USERDETAILS.style.background='red';
              USERDETAILS.style.borderRadius='10px 10px 0px 0px';

              //CREATE A DIV FOR EACH SECTION
              
              //USERNAMEHOLDER
              const USERNAMEDIV=document.createElement('div');
              //STYLES
              USERNAMEDIV.style.position='relative';
              USERNAMEDIV.style.width='95%';
              USERNAMEDIV.style.height='10%';
              USERNAMEDIV.style.left='2%';
              USERNAMEDIV.style.display='inline-flex';
              USERNAMEDIV.style.marginTop='1rem';
              USERNAMEDIV.style.marginBottom='1rem';
              USERNAMEDIV.style.background='blue';
              USERNAMEDIV.style.borderRadius='10px';

              //USERNAME
             const USERNAME=document.createElement('div');
             //STYLES
             USERNAME.style.position='relative';
             USERNAME.style.marginLeft='auto';
             USERNAME.style.marginRight='auto';
             USERNAME.style.marginBottom='auto';
             USERNAME.style.marginTop='auto';
             USERNAME.style.display='block';
             USERNAME.style.fontSize='20px';
             USERNAME.innerHTML=user.UserEmail;

             //USERTELEPHONEDIV
             const USERTELEPHONEDIV=document.createElement('div');
             //STYLES
             USERTELEPHONEDIV.style.position='relative';
             USERTELEPHONEDIV.style.width='95%';
             USERTELEPHONEDIV.style.height='10%';
             USERTELEPHONEDIV.style.left='2%';
             USERTELEPHONEDIV.style.display='inline-flex';
             USERTELEPHONEDIV.style.marginTop='1rem';
             USERTELEPHONEDIV.style.marginBottom='1rem';
             USERTELEPHONEDIV.style.background='blue';
             USERTELEPHONEDIV.style.borderRadius='10px';

             //TELEPHONE
            const TELEPHONE=document.createElement('div');
            //STYLES
            TELEPHONE.style.position='relative';
            TELEPHONE.style.marginLeft='auto';
            TELEPHONE.style.marginRight='auto';
            TELEPHONE.style.marginBottom='auto';
            TELEPHONE.style.marginTop='auto';
            TELEPHONE.style.display='block';
            TELEPHONE.style.fontSize='20px';
            TELEPHONE.innerHTML=user.UserTelephone;

            //USERLOCATIONDIV
            const USERLOCATIONDIV=document.createElement('div');
            //STYLES
            USERLOCATIONDIV.style.position='relative';
            USERLOCATIONDIV.style.width='95%';
            USERLOCATIONDIV.style.height='10%';
            USERLOCATIONDIV.style.left='2%';
            USERLOCATIONDIV.style.display='inline-flex';
            USERLOCATIONDIV.style.marginTop='1rem';
            USERLOCATIONDIV.style.marginBottom='1rem';
            USERLOCATIONDIV.style.background='blue';
            USERLOCATIONDIV.style.borderRadius='10px';

            //USERLOCATION
           const USERLOCATION=document.createElement('div');
           //STYLES
           USERLOCATION.style.position='relative';
           USERLOCATION.style.marginLeft='auto';
           USERLOCATION.style.marginRight='auto';
           USERLOCATION.style.marginBottom='auto';
           USERLOCATION.style.marginTop='auto';
           USERLOCATION.style.display='block';
           USERLOCATION.style.fontSize='20px';
           USERLOCATION.innerHTML=user.UserLocation;

           //USERFUNCTONDIV
           const USERFUNCTONDIV=document.createElement('div');
           //STYLES
           USERFUNCTONDIV.style.position='absolute';
           USERFUNCTONDIV.style.width='100%';
           USERFUNCTONDIV.style.height='30%';
           USERFUNCTONDIV.style.bottom='0';
           USERFUNCTONDIV.style.left='0';
           USERFUNCTONDIV.style.display='flex';
           USERFUNCTONDIV.style.background='green';
           USERFUNCTONDIV.style.borderRadius='10px 10px 0px 0px';

           USERFUNCTONDIV.append(HELPICON);

           USERFUNCTONDIV.append(EDITICON);
           
           USERFUNCTONDIV.append(LOGOUTICON);



             
              //APPEND THE USER DATA

              USERNAMEDIV.append(USERNAME);

              USERDETAILS.append(USERNAMEDIV);

              //USER TELEPHONE
              
              USERTELEPHONEDIV.append(TELEPHONE);

              USERDETAILS.append(USERTELEPHONEDIV);

              //USERLOCATION

              USERLOCATIONDIV.append(USERLOCATION);

              USERDETAILS.append(USERLOCATIONDIV);

              //USERFUNCTTION DIV
              USERDETAILS.append(USERFUNCTONDIV);
              

              DIV.append(USERDETAILS);

              DIV.append(PROFILEIMAGE);

              DIV.append(USERNAMEHOLDER);

              DIV.append(BACKICON);


              BACKICON.onclick=()=>{
                    
                HOMEPAGE(DIV);
            
              }
               
              APPSTYLES();
                
            } 

        })

        .catch(error => console.error(error));

  

};

const APPSTYLES=()=>{

  BACKICON.style.width='20px';
  BACKICON.style.height='20px';
  BACKICON.style.background='black';
  BACKICON.style.borderRadius='50px';
}


export { GETUSERDATA };
