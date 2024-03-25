import {BandSiteApi, timestampDateString} from './band-site-api.js';

const API_URL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
const API_KEY = '<1a5aa7ad-7d9c-4102-8608-8b5b93bcd653>'

const bandSiteApi = new BandSiteApi();
const selectSection=document.querySelector(".comment");

async function renderComments(){
    try{
        const comments = await bandSiteApi.getComments();
        selectSection.innerHTML='';

        comments.forEach((e) => {
        const divEl10=document.createElement('div');
        divEl10.classList.add("comment__container");
        selectSection.appendChild(divEl10);

        const divEl01=document.createElement('div');
        divEl01.classList.add("comment__left");
        divEl10.appendChild(divEl01)

        const imgEl=document.createElement("img");
        imgEl.classList.add("comment__image");
        imgEl.setAttribute('src', 'https://via.placeholder.com/48x48/E1E1E1/E1E1E1')
        divEl01.appendChild(imgEl);

        const divEl02=document.createElement('div');
        divEl02.classList.add("comment__right");
        divEl10.appendChild(divEl02);

        const nameEl=document.createElement('h3');
        nameEl.classList.add("comment__name");
        nameEl.innerHTML=(e).name,
        divEl02.appendChild(nameEl);

        const timeEl=document.createElement('h3');
        timeEl.classList.add("comment__time");
        timeEl.innerHTML=timestampDateString(e.timestamp);
        divEl02.appendChild(timeEl);

        const textEl=document.createElement('p');
        textEl.classList.add("comment__text");
        textEl.innerHTML=(e).comment;
        divEl02.appendChild(textEl);
    });
    } catch (error){
        console.error("Error fatching comments",error)
    }
};

renderComments();

const formEl=document.querySelector(".form");

formEl.addEventListener('submit', async(event) => {
    event.preventDefault();

    const nameVal = event.target.name.value;
    const commentVal = event.target.comment.value;

    const newEntry = {
        name: nameVal,
        comment: commentVal,
    };

    try{ 
        await bandSiteApi.postComment(newEntry);
        await renderComments();
        event.target.reset();
    }catch(error){
        console.error('Error posting comment:', error);
    }
});





