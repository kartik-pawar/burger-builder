import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://burger-app-f8771.firebaseio.com/'
});

export default instance;