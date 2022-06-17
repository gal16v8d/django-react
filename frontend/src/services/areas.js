import axios from 'axios';

function getAreas() {
    return axios.get('http://localhost:8000/api/areasClass/listado/')
    .then(response => response.data)
    .catch(error => console.log(error));
};

export { getAreas }