import "./Perfil.css"
import profileImage from "../../assets/images.jpg"
import bannerImage from "../../assets/banner.jpg"
import { BsThreeDots } from "react-icons/bs"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Perfil() {
    const [perfil, setPerfil] = useState({
        nome: "",
        username: "",
        description: "",
    });

    useEffect(() => {
        async function carregarPerfil() {
            const resposta = await fetch("http://localhost:3000/perfil/1");
            const dados = await resposta.json();
            setPerfil(dados);
        }

        carregarPerfil();
    }, []);

    return (
        <div className="perfil-container container-fluid">
            <div className="teste sm:container p-0">
                <div className="perfil-card">
                    <div className="perfil-banner container-fluid">
                        <img
                            src={bannerImage} alt="Banner do perfil"
                            className="w-100 h-100 object-fit-cover image-fluid"
                        />
                    </div>

                    <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 px-3">

                        <div className="perfil-avatar-anel flex-shrink-0">
                            <img
                                src={profileImage}
                                alt="Foto de perfil"
                                className="perfil-avatar rounded-circle object-fit-cover"
                            />
                        </div>

                        <div className="flex-grow-1 pt-md-3">

                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <div className="d-flex align-items-baseline gap-2 flex-wrap">
                                    <h2 className="fw-bold mb-0">{perfil.nome}</h2>
                                    <span className="perfil-handle">@{perfil.username}</span>
                                </div>

                                <div className="d-flex gap-3">
                                    <Link to="/edit" className="btn btn-link p-0 text-dark" title="opções">
                                        <BsThreeDots size={24} />
                                    </Link>
                                </div>
                            </div>

                            <div className="d-flex gap-4 mt-3">
                                <span><strong>20</strong> <span className="text-secondary">posts</span></span>
                                <span><strong>1000</strong> <span className="text-secondary">seguidores</span></span>
                                <span><strong>1230</strong> <span className="text-secondary">seguindo</span></span>
                            </div>

                            <p className="mt-3 mb-0 perfil-bio">
                                {perfil.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-imgs-perfil">
                <div className="grid text-center grid-cols-4">
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                    <div>
                        <img src="https://placehold.co/293x391" className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;