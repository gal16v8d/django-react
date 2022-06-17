function Card({cientifica, editAction, deleteAction}) {
    return (
        <div className="card-container">
            <div className="row">
                <div className="col-6">
                    <img src={cientifica.foto} className="avatar" alt={cientifica.nombre}></img>
                </div>
                <div className="col-6 card-data">
                    <h5 className="card-title">
                        {cientifica.nombre}
                    </h5>
                    <h6 className="card-title">
                        {cientifica.nacionalidad}
                    </h6>
                    <p>
                        Nace el: {cientifica.fecha_nacimiento}
                    </p>
                </div>
            </div>
            <div className="card-description">
                <p className="card-text">
                    {cientifica.descripcion}
                </p>
            </div>
            <div className="card-actions">
                <button className="icon-button" onClick={() => editAction(cientifica)}>
                    <i className="bi bi-pencil-square text-primary"></i>
                </button>
                <button className="icon-button" onClick={() => deleteAction(cientifica.id)}>
                    <i className="bi bi-trash text-danger"></i>
                </button>
            </div>
        </div>
    );
};

export default Card;
