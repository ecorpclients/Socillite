import { ICONSAPI } from "../../API/Api.js";

const Stories=(DIV)=>{

    const StoriesDiv=document.querySelector('.StoriesDiv');

    StoriesDiv.innerHTML='';

    fetch('https://ecorpclients.github.io/Socillite/JSON/stories.json')

    .then(res => res.json())

    .then(data =>{

        data.forEach(element => {
           
            console.log(element);

            //CREATE MINIDIV
            const MiniStories=document.createElement('div');
            //CLASSASSIGN
            MiniStories.classList.add('MiniStories');

            MiniStories.innerHTML=`
            
            <img  src="${ICONSAPI}google.png" class='StoriesImage'/>

            `;

            MiniStories.addEventListener('click',()=>{

                ViewStory(element);

            })
            

            StoriesDiv.append(MiniStories);
            
        });

       
        const ViewStory=(element)=>{

            const StoryDiv=document.querySelector('.FunctionsDiv');

            StoryDiv.style.display='block';

            StoryDiv.innerHTML=`
            
            <h1 class='PostersName' >${element.PostersName}</h1>

            <img src='${ICONSAPI}close.png' id='CloseStory' class='BackIcon'/>

            <img src='${ICONSAPI}google.png' id='CloseStory' class='PostedStoryImage'/>

            <input type="text" name="" class="CommentInput">

            <img src='${ICONSAPI}send.png'  class='sendIcon'/>

            `;

            const CloseStory=document.querySelector('#CloseStory');

            CloseStory.addEventListener('click',()=>{

                
                StoryDiv.style.display='none';

            })
           
    
        }
       
      

    })

    .catch(error =>console.log(error))

    

}




export{Stories}


