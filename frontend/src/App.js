import { useEffect, useState } from 'react';
import './App.css';
import { addCientifica, getCientificas, deleteCientifica, modifyCientifica } from './services/cientificas';
import Card from './components/Card';
import Modal from './components/Modal';
import { getAreas } from './services/areas';

function App() {
  const [cientificas, setCientificas] = useState([]);
  const [areas, setAreas] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [initialModalData, setInitialModalData] = useState({});

  const getAreasData = () => {
    getAreas()
      .then(response => setAreas(response));
  };

  const getCientificasData = () => {
    getCientificas()
      .then(response => setCientificas(response));
  };

  const newCientifica = (cientifica) => {
    addCientifica(cientifica).then(response => {
      setIsAddModalOpen(false);
      getCientificasData();
    });
  };

  const removeCientifica = (id) => {
    deleteCientifica(id).then(response => {
      getCientificasData();
    });
  };

  const editarCientifica = (cientifica) => {
    modifyCientifica(cientifica).then(response => {
      setIsEditModalOpen(false);
      getCientificasData();
    });
  };

  const openEditCientifica = (cientifica) => {
    setIsEditModalOpen(true);
    setInitialModalData(cientifica);
  };

  useEffect(() => {
    if (!cientificas || cientificas?.length === 0) {
      getCientificasData();
    }
    if (!areas || areas?.length === 0) {
      getAreasData();
    }
  });

  return (
    <div className='container-fluid mt-5 px-5'>
      <section className='main-header'>
        <h1>Mujeres en tecnologia y ciencia</h1>
        <div className='row'>
          <div className='col-md-6 col-12'>
              A lo largo de la historia, mujeres extraordinarias han
              demostrado ...
          </div>
          <div className='col-md-6 col-12'>
              <button className='btn btn-success float-end mr-2' onClick={() => setIsAddModalOpen(true)}>Agregar</button>
          </div>
        </div>
      </section>
      <section>
        <div className='row'>
          {cientificas.map((cientifica) => 
              <div className='col-12 col-md-6 col-lg-4'>
                <Card 
                  cientifica={cientifica} 
                  deleteAction={removeCientifica} 
                  editAction={openEditCientifica} 
                />
              </div>
            )
          }
        </div>
      </section>
      {isAddModalOpen ? 
        <Modal 
          idModal={'agregarCientifica'} 
          label={'Agregar Cientifica'} 
          areas={areas}
          onCancel={() => setIsAddModalOpen(false)} 
          onSave={newCientifica}
        />: null}
      {isEditModalOpen ? 
        <Modal 
          idModal={'editarCientifica'} 
          label={'Editar Cientifica'} 
          areas={areas}
          initialValue={initialModalData}
          onCancel={() => setIsEditModalOpen(false)} 
          onSave={editarCientifica}
        />: null}
    </div>
  );
}

export default App;
