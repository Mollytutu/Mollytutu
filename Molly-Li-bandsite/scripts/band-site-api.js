const API_URL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
 const API_KEY = '1a5aa7ad-7d9c-4102-8608-8b5b93bcd653'

function apiUrl(endpoint) {
  return`${API_URL}${endpoint}?api_key=${API_KEY}`;
}

const apiComments= apiUrl('comments');

export class BandSiteApi{
    constructor(apiKey){
        this.apiKey=API_KEY;
        this.baseUrl=API_URL;
    }

    async postComment(comments) {
        try {
            const response= await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`,comments);
            console.log(response.data);
            return response.data;
        }catch(error){ 
            console.log('Failed to post comment:',error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`); 
            const commentsData = response.data;
            // Sorting comments from newest to oldest
            commentsData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            return commentsData;
        }catch(error){
            console.log("Sorry, Failed to fetch comments:",error);
            }
        };
    
    async getShows() {
        try{
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`); 
            const showsData = response.data;
            return showsData;
        }catch(error){
            console.log("Sorry, not able to access shows information",error)
        }
    }
}
    

 