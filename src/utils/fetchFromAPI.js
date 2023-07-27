import axios from 'axios'


const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  
  url: BASE_URL,
  params: {
maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '8505c9ce07msh2397bcfad35ce0ap1a997ajsn8564acd48860',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(uri)=>{
    const {data}= await axios.get(`${BASE_URL}/${uri}`,options)
      return data
}