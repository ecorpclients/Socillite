import { ADVANCE } from "../ADVANCE/Advance.js";

const PROFILEICON=ADVANCE.PROFILEICON;

const EDITICON=ADVANCE.EDITICON;

const GETUSERDATA = (DIV) => {
    const URL = `https://demo.naweri.com/end-points/users-list.php`;
    const STOREDEMAIL = localStorage.getItem('UserEmail');

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const user = data.find(user => user.UserEmail === STOREDEMAIL);

            if (user) {

                console.log(user);

                //CREATE A DIV FOR THE HOLDERS
                const USERHOLDER=document.createElement('div')
                //STYLES
                USERHOLDER.style.position='relative';
                USERHOLDER.style.width='95%';
                USERHOLDER.style.height='30%';
                USERHOLDER.style.background='red';
                USERHOLDER.style.left='2%';
                USERHOLDER.style.top='2%';
                USERHOLDER.style.borderRadius='10px';
                USERHOLDER.style.display='inline-flex';

                
                //CREATE A DIV FOR THE HOLDERS
                const USERSCECTION=document.createElement('h1')
                USERSCECTION.innerHTML='User Profile';
                //STYLES
                USERSCECTION.style.position='absolute';
                USERSCECTION.style.width='auto';
                USERSCECTION.style.height='auto';
                USERSCECTION.style.fontSize='20px';
                USERSCECTION.style.background='black';
                USERSCECTION.style.right='2%';
                USERSCECTION.style.top='0';
                USERSCECTION.style.padding='1%';
                USERSCECTION.style.borderRadius='5px';
                USERSCECTION.style.display='block';


                 //CREATE A IMAGESHOLDER FOR THE HOLDERS
                const USERIMAGEDIV=document.createElement('div')
                 //STYLES
                USERIMAGEDIV.style.position='relative';
                USERIMAGEDIV.style.width='35%';
                USERIMAGEDIV.style.height='90%';
                USERIMAGEDIV.style.background='blue';
                USERIMAGEDIV.style.left='1%';
                USERIMAGEDIV.style.marginTop='auto';
                USERIMAGEDIV.style.marginBottom='auto';
                USERIMAGEDIV.style.marginLeft='auto';
                USERIMAGEDIV.style.marginRight='auto';
                USERIMAGEDIV.style.borderRadius='10px';
                USERIMAGEDIV.style.display='inline-flex';

                 //CREATE A IMAGE FOR THE HOLDERS
                 const USERIMAGE=document.createElement('img')
                 USERIMAGE.src=PROFILEICON;
                 //STYLES
                 USERIMAGE.style.position='relative';
                 USERIMAGE.style.width='100px';
                 USERIMAGE.style.height='100px';
                 USERIMAGE.style.background='orange';
                 USERIMAGE.style.left='1%';
                 USERIMAGE.style.marginTop='auto';
                 USERIMAGE.style.marginBottom='auto';
                 USERIMAGE.style.marginLeft='auto';
                 USERIMAGE.style.marginRight='auto';
                 USERIMAGE.style.borderRadius='50px';
                 USERIMAGE.style.display='inline-flex';
                
                  //CREATE A IMAGESHOLDER FOR THE HOLDERS
                const USERDETAILDIV=document.createElement('div')
                  //STYLES
                USERDETAILDIV.style.position='relative';
                USERDETAILDIV.style.width='55%';
                USERDETAILDIV.style.height='90%';
                USERDETAILDIV.style.background='black';
                USERDETAILDIV.style.left='1%';
                USERDETAILDIV.style.marginTop='auto';
                USERDETAILDIV.style.marginBottom='auto';
                USERDETAILDIV.style.marginLeft='auto';
                USERDETAILDIV.style.marginRight='auto';
                USERDETAILDIV.style.borderRadius='10px';
                USERDETAILDIV.style.display='block';

                 //CREATE A USERNAME FOR THE HOLDERS
                 const USERNAMEHOLDER=document.createElement('h1')
                 USERNAMEHOLDER.innerHTML=user.UserName;
                 //STYLES
                 USERNAMEHOLDER.style.position='relative';
                 USERNAMEHOLDER.style.width='90%';
                 USERNAMEHOLDER.style.height='10%';
                 USERNAMEHOLDER.style.fontSize='20px';
                 USERNAMEHOLDER.style.background='red';
                 USERNAMEHOLDER.style.left='5%';
                 USERNAMEHOLDER.style.textAlign='center';
                 USERNAMEHOLDER.style.marginTop='1rem';
                 USERNAMEHOLDER.style.marginBottom='1rem';
                 USERNAMEHOLDER.style.padding='1%';
                 USERNAMEHOLDER.style.borderRadius='5px';
                 USERNAMEHOLDER.style.display='block';

                 //CREATE A USERNAME FOR THE HOLDERS
                 const USEREMAILHOLDER=document.createElement('h1')
                 USEREMAILHOLDER.innerHTML=user.UserTelephone;
                 //STYLES
                 USEREMAILHOLDER.style.position='relative';
                 USEREMAILHOLDER.style.width='90%';
                 USEREMAILHOLDER.style.height='10%';
                 USEREMAILHOLDER.style.fontSize='15px';
                 USEREMAILHOLDER.style.background='red';
                 USEREMAILHOLDER.style.left='5%';
                 USEREMAILHOLDER.style.textAlign='center';
                 USEREMAILHOLDER.style.top='0';
                 USEREMAILHOLDER.style.marginTop='1rem';
                 USEREMAILHOLDER.style.marginBottom='1rem';
                 USEREMAILHOLDER.style.padding='1%';
                 USEREMAILHOLDER.style.borderRadius='5px';
                 USEREMAILHOLDER.style.display='block';

                  //CREATE A USERNAME FOR THE HOLDERS
                  const USERLOCATIONHOLDER=document.createElement('h1')
                  USERLOCATIONHOLDER.innerHTML=user.UserLocation;
                  //STYLES
                  USERLOCATIONHOLDER.style.position='relative';
                  USERLOCATIONHOLDER.style.width='90%';
                  USERLOCATIONHOLDER.style.height='10%';
                  USERLOCATIONHOLDER.style.fontSize='15px';
                  USERLOCATIONHOLDER.style.background='red';
                  USERLOCATIONHOLDER.style.left='5%';
                  USERLOCATIONHOLDER.style.textAlign='center';
                  USERLOCATIONHOLDER.style.top='0';
                  USERLOCATIONHOLDER.style.marginTop='1rem';
                  USERLOCATIONHOLDER.style.marginBottom='1rem';
                  USERLOCATIONHOLDER.style.padding='1%';
                  USERLOCATIONHOLDER.style.borderRadius='5px';
                  USERLOCATIONHOLDER.style.display='block';

                   //CREATE A USERNAME FOR THE HOLDERS
                   const EDITBUTTON=document.createElement('h1')
                   EDITBUTTON.innerHTML='Edit';
                   //STYLES
                   EDITBUTTON.style.position='absolute';
                   EDITBUTTON.style.width='90%';
                   EDITBUTTON.style.height='10%';
                   EDITBUTTON.style.fontSize='15px';
                   EDITBUTTON.style.background='red';
                   EDITBUTTON.style.left='5%';
                   EDITBUTTON.style.textAlign='center';
                   EDITBUTTON.style.textAlign='center';
                   EDITBUTTON.style.marginTop='1rem';
                   EDITBUTTON.style.marginBottom='1rem';
                   EDITBUTTON.style.bottom='1%';
                   EDITBUTTON.style.padding='1%';
                   EDITBUTTON.style.borderRadius='5px';
                   EDITBUTTON.style.display='block';
                

                   //CREATE A USERNAME FOR THE HOLDERS
                  const USEREMAIL=document.createElement('h1')
                  USEREMAIL.innerHTML=user.UserEmail;
                  //STYLES
                  USEREMAIL.style.position='relative';
                  USEREMAIL.style.width='90%';
                  USEREMAIL.style.height='auto';
                  USEREMAIL.style.background='red';
                  USEREMAIL.style.left='2%';
                  USEREMAIL.style.padding='2%'
                  USEREMAIL.style.textAlign='left';
                  USEREMAIL.style.fontSize='20px'
                  USEREMAIL.style.top='2%';
                  USEREMAIL.style.borderRadius='10px';
                  USEREMAIL.style.display='inline-flex';
                

                
                //APPEND ALL THE DATA

                USERIMAGEDIV.append(USERIMAGE);

                USERIMAGEDIV.append(EDITICON);

                USERHOLDER.append(USERIMAGEDIV);

                USERHOLDER.append(USERDETAILDIV);

                USERDETAILDIV.append(USERNAMEHOLDER);

                USERDETAILDIV.append(USEREMAILHOLDER);

                USERDETAILDIV.append(USERLOCATIONHOLDER);

                USERDETAILDIV.append(EDITBUTTON);
                
                
                DIV.append(USERHOLDER);

                DIV.append(USERSCECTION);

                DIV.append(USEREMAIL);

                
            } 

        })

        .catch(error => console.error(error));

        APPSTYLES();

};


const APPSTYLES=()=>{

    EDITICON.style.position='absolute';
    EDITICON.style.width='25px';
    EDITICON.style.height='25px';
    EDITICON.style.background='transparent';
    EDITICON.style.right='1%';
    EDITICON.style.bottom='5%';
    EDITICON.style.borderRadius='50px';
    EDITICON.style.display='block';

}


export { GETUSERDATA };
