function Card(cientifica, editAction, deleteAction) {
    const cientificaData = cientifica?.cientifica;
    return (
        <div className="card-container">
            <div className="row">
                <div className="col-6">
                    <img src={cientificaData.foto} className="avatar" alt={cientificaData.nombre}></img>
                </div>
                <div className="col-6 card-data">
                    <h5 className="card-title">
                        {cientificaData.nombre}
                    </h5>
                    <h6 className="card-title">
                        {cientificaData.nacionalidad}
                    </h6>
                    <p>
                        Nace el: {cientificaData.fecha_nacimiento}
                    </p>
                </div>
            </div>
            <div className="card-description">
                <p className="card-text">
                    {cientificaData.descripcion}
                </p>
            </div>
            <div className="card-actions">
            </div>
        </div>
    );
};

export default Card;
