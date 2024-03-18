const showSchedules = [
    {date:  'Mon Sept 09 2024',
     venue: 'Ronald Lane',
     location: 'San Francisco,CA',
    },
    {date: 'Tue Sept 17 2024',
     venue: 'Pier 3 East',
     location: 'San Francisco, CA',
    },
    {date: 'Sat Oct 12 2024',
     venue: 'View Lounge',
     location: 'San Francisco, CA',
    },
    {date: 'Sat Nov 12 2024',
     venue: 'Hyatt Agency',
     location: 'San Francisco, CA',
    },
    {date: 'Fri Nov 29 2024',
     venue: 'Moscow Center',
     location: 'San Francisco, CA',
    },
    {date: 'Wed Dec 18 2024',
     venue: 'Press Club',
     location: 'San Francisco, CA',
    },
];

const pickSection=document.querySelector('.shows');

const divE0=document.createElement('div');
    divE0.classList.add('shows__header1');
    pickSection.appendChild(divE0);

    const showTitleE=document.createElement('h2');
    showTitleE.classList.add('shows__header');
    showTitleE.innerHTML='Shows';
    divE0.appendChild(showTitleE);

function renderShows() {
    showSchedules.forEach((eachShow)=> {
        // console.log(eachShow);
    const divE=document.createElement('div');
    divE.classList.add('shows__section');
    pickSection.appendChild(divE);

    const dateTitleE=document.createElement('h4');
    dateTitleE.classList.add('shows__title');
    dateTitleE.innerHTML="DATE";
    divE.appendChild(dateTitleE);

    const dateTextE=document.createElement('h3');
    dateTextE.classList.add('shows__info1');
    dateTextE.innerHTML= (eachShow).date;
    divE.appendChild(dateTextE);
  
    const venueTitleE=document.createElement('h4');
    venueTitleE.classList.add('shows__title');
    venueTitleE.innerHTML="VENUE";
    divE.appendChild(venueTitleE);

    const venueTextE=document.createElement('h3');
    venueTextE.classList.add('shows__info');
    venueTextE.innerHTML= (eachShow).venue;
    divE.appendChild(venueTextE);

    const locationTitleE=document.createElement('h4');
    locationTitleE.classList.add('shows__title');
    locationTitleE.innerHTML="LOCATION";
    divE.appendChild(locationTitleE);

    const locationTextE=document.createElement('h3');
   locationTextE.innerHTML=(eachShow).location;
    locationTextE.classList.add('shows__info');
    divE.appendChild(locationTextE);

    const buttonE=document.createElement('button');
    buttonE.classList.add('shows__button');
    buttonE.innerHTML='BUY TICKETS';
    divE.appendChild(buttonE);

    const divE1=document.createElement('div');
    divE1.classList.add('shows__hrWrapper');
    pickSection.appendChild(divE1);

    const hrE=document.createElement('hr');
    hrE.classList.add("shows__hr");
    divE1.appendChild(hrE);
    })
}

renderShows();

