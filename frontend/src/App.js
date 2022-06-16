import { useEffect, useState } from 'react';
import './App.css';
import { addCientifica, getCientificas } from './services/helper';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [cientificas, setCientificas] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  useEffect(() => {
    if (!cientificas || cientificas?.length === 0) {
      getCientificasData();
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
                <Card cientifica={cientifica} />
              </div>
            )
          }
        </div>
      </section>
      {isAddModalOpen ? 
        <Modal 
          idModal={'agregarCientifica'} 
          label={'Agregar Cientifica'} 
          onCancel={() => setIsAddModalOpen(false)} 
          onSave={newCientifica}
        />: null}
    </div>
  );
}

export default App;
