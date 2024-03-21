comments = [
    {name:"Victor Pinto",
     date:"11/02/2023",
     comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",},
    {name:"Christina Cabrera",
     date:"10/28/2023",
     comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",},

     {name:"Isaac Tadesse",
      date:"10/20/2023",
      comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",},
]

const selectSection=document.querySelector(".comment");

// const divEl10=document.createElement('div');
// divEl10.classList.add("comment__box");
// selectorSector.appendChild(divEl10);

const hrAbove=document.createElement("hr");
hrAbove.classList.add('comment__hr');
divEl.appendChild(hrAbove);

function renderComments(){
comments.forEach((e) => {

const divEl11=document.createElement('div');
divEl11.classList.add("comment__container");
selectorSector.appendChild(divEl11);

const divEl01=document.createElement('div');
divEl01.classList.add("comment__container");
divEl11.appendChild(divEl01)

const imgEl=document.createElement("img");
imgEl.classList.add("comment__image");
imgEl.setAttribute('src', 'https://via.placeholder.com/48x48/E1E1E1/E1E1E1')
divEl01.appendChild(imgEl);

const divEl02=document.createElement('div');
divEl02.classList.add("comment__wrapper");
divEl02.appendChild(divEl11);

const nameEl=document.createElement('h3');
nameEl.classList.add("comment__name");
nameEl.innerHTML=(e).name,
divEl02.appendChild(nameEl);

const timeEl=document.createElement('h3');
timeEl.classList.add("comment__time");
// const timeValue=(e).date;
// timeEl.setAttribute('datetime',timeValue);
timeEl.innerHTML=(e).date;
divEl02.appendChild(timeEl);

const textEl=document.createElement('p');
textEl.classList.add("comment__text");
textEl.innerHTML=(e).comment;
divEl02.appendChild(textEl);

const hrUnder=document.createElement("hr");
hrUnder.classList.add('comment__hr1');
selectorSector.appendChild(hrUnder);

})
}

// renderComments(){

// const insertHere=document.querySelector(".divEl");

// insertHere.addEventListener('submit', (event) => {
//     event.preventDefault();

// const nameVal = event.target.name.value;
// const dateVal = new Date();
// const commentVal = event.target.comment.value;

// const newEntry = {
//     name: nameVal,
//     date: dateVal,
//     text: commentVal,
//   };
  
//   comments.push(newEntry);
//   event.target.reset();
// };

//   renderComments();

 

