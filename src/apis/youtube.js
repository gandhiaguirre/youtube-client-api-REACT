import axios from 'axios'

const KEY = 'AIzaSyCy0Gq2xaOWmGAFNVdsjsP8sJhyzsxBhR0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '15',
        key: KEY

    }
});