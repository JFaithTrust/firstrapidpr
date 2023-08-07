import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '40',
  },
  headers: {
    'X-RapidAPI-Key': 'a82772a254mshc19f8873687252fp17c31fjsn571b5a71f1b3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
    async fetching(url){
        const res = await axios.get(`${BASE_URL}/${url}`, options)
        return res.data
    }
}