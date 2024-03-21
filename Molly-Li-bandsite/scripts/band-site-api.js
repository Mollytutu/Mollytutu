// const API_URL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
// const API_KEY = '<1a5aa7ad-7d9c-4102-8608-8b5b93bcd653';

// function apiUrl(endpoint) {
//   const url = `${API_URL}${endpoint}?api_key=${API_KEY}`;
// }

// const apiComments= apiUrl(comments);
// console.log(apiComments);

// class BandSiteApi{
//     constructor(apiKey){
//         this.apiKey=apiKey;
//         this.baseUrl= 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
//     }

//     async postComment(comment) {
//         try {
//             const response= awaitaxios.get(`${this.baseUrl}${comments}?api_key=${API_KEY}`);
//         }catch(error){ console.log('your api link is broken');
//         }
//     }

//     async getComments() {
//         try {
//             const response = await axios.get(`${this.baseUrl}/comments`), 
//             data = response.data;
//             // Sorting comments from newest to oldest
//             return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//         }catch(error)
//         {console.log("Sorry, get comments failed")
//             }
//         };
// }
    
//  const bandSiteApi = new BandSiteApi(apiKey);