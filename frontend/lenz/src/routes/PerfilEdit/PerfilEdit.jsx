import "./PerfilEdit.css"
import logo from "../../assets/LENSS_logo_transparente.png";
import { useState } from "react";

function PerfilEdit() {
    const [login, setLogin] = useState({
        nome: "",
        username: "",
        description: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();

        const resposta = await fetch("http://localhost:3000/perfil/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login),
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            alert(dados.mensagem);
        } else {
            alert("Erro: " + dados.mensagem);
        }
    }

    return (
        <div className="edit-container container-fluid">

            <div className="card-body login-forms">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={login.nome}
                            onChange={(event) =>
                                setLogin({ ...login, nome: event.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={login.username}
                            onChange={(event) =>
                                setLogin({ ...login, username: event.target.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            value={login.description}
                            onChange={(event) =>
                                setLogin({ ...login, description: event.target.value })
                            }
                        />
                    </div>

                    <button type="submit" className="login-btn btn-solid theme-primary">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PerfilEdit