import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '218845c21emsh22cb8d007fffedep1a5680jsnff04fc881ca2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
         }
    });

    return data;
 }