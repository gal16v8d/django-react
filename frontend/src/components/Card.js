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
            </div>
        </div>
    );
};

export default Card;
