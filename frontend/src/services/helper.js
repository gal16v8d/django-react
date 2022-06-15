import axios from 'axios';

function getCientificas() {
    return axios.get('http://localhost:8000/api/cientificasClass/listado/')
    .then(response => { return response.data})
    .catch(error => console.log(error));
};

export {getCientificas}