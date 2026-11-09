import "./Cardfeed.css"

function Cardfeed(props) {
    return (
        <section className="card-feed">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-feed-text">
                    <a href=""><h3>{props.nome}</h3></a>
                    <p>{props.desc}</p>
                </div>
                <a href="#" id="btn" className="btn-solid theme-primary">Ir para o perfil</a>
            </div>
        </section>
    )
}

export default Cardfeed