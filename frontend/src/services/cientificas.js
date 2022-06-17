import axios from 'axios';

function getCientificas() {
    return axios.get('http://localhost:8000/api/cientificasClass/listado/')
    .then(response => response.data)
    .catch(error => console.log(error));
};

function addCientifica(cientifica) {
    let formData = new FormData();
    if (cientifica.foto) {
        formData.append('foto', cientifica.foto, cientifica.foto.name);
    }
    formData.append('nombre', cientifica.nombre);
    formData.append('fecha_nacimiento', cientifica.fecha_nacimiento);
    formData.append('nacionalidad', cientifica.nacionalidad);
    formData.append('descripcion', cientifica.descripcion);
    return axios.post('http://localhost:8000/api/cientificasClass/listado/', formData, 
    {headers: {'content-type': 'multipart/form-data'}})
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function deleteCientifica(id) {
    return axios.delete(`http://localhost:8000/api/cientificasClass/listado/${id}/`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}


function modifyCientifica(cientifica) {
    let formData = new FormData();
    if (cientifica.foto) {
        formData.append('foto', cientifica.foto, cientifica.foto.name);
    }
    formData.append('nombre', cientifica.nombre);
    formData.append('fecha_nacimiento', cientifica.fecha_nacimiento);
    formData.append('nacionalidad', cientifica.nacionalidad);
    formData.append('descripcion', cientifica.descripcion);
    return axios.put(`http://localhost:8000/api/cientificasClass/listado/${cientifica.id}/`, formData, 
    {headers: {'content-type': 'multipart/form-data'}})
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export {getCientificas, addCientifica, deleteCientifica, modifyCientifica}