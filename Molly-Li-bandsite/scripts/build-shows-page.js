import { BandSiteApi, timestampDateString } from './band-site-api.js';
// import  {timestampDateString} from './index-page.js';

const API_URL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
const API_KEY = '1a5aa7ad-7d9c-4102-8608-8b5b93bcd653';

const bandSiteApi = new BandSiteApi();
const selectSection=document.querySelector('.shows');
const selectDetails=document.querySelector('.shows__detail')

async function renderShows() {
    try{
        selectDetails.innerHTML = '';

        const divE0=document.createElement('div');
    divE0.classList.add('shows__header1');
    selectSection.appendChild(divE0);

    const showTitleE=document.createElement('h2');
    showTitleE.classList.add('shows__header');
    showTitleE.innerHTML='Shows';
    divE0.appendChild(showTitleE);
        
        const showSchedules = await bandSiteApi.getShows();

        showSchedules.forEach((eachShow)=> {
        const divE=document.createElement('div');
        divE.classList.add('shows__section');
        selectSection.appendChild(divE);

        const dateTitleE=document.createElement('h4');
        dateTitleE.classList.add('shows__title');
        dateTitleE.innerHTML="DATE";
        divE.appendChild(dateTitleE);
        
        const dateTextE=document.createElement('h3');
        dateTextE.classList.add('shows__info1');
        dateTextE.innerHTML= timestampDateString(eachShow.date);
        divE.appendChild(dateTextE);
    
        const venueTitleE=document.createElement('h4');
        venueTitleE.classList.add('shows__title');
        venueTitleE.innerHTML="VENUE";
        divE.appendChild(venueTitleE);

        const venueTextE=document.createElement('h3');
        venueTextE.classList.add('shows__info');
        venueTextE.innerHTML= eachShow.place;
        divE.appendChild(venueTextE);

        const locationTitleE=document.createElement('h4');
        locationTitleE.classList.add('shows__title');
        locationTitleE.innerHTML="LOCATION";
        divE.appendChild(locationTitleE);

        const locationTextE=document.createElement('h3');
        locationTextE.innerHTML=eachShow.location;
        locationTextE.classList.add('shows__info');
        divE.appendChild(locationTextE);

        const buttonE=document.createElement('button');
        buttonE.classList.add('shows__button');
        buttonE.innerHTML='BUY TICKETS';
        divE.appendChild(buttonE);

        const divE1=document.createElement('div');
        divE1.classList.add('shows__hrWrapper');
        selectSection.appendChild(divE1);

        const hrE=document.createElement('hr');
        hrE.classList.add("shows__hr");
        divE1.appendChild(hrE);

         });
    } catch (error) {
        console.log('Error fetching shows:', error);
    }
}   

renderShows();

