import "./Login.css";
import logo from "../../assets/LENSS_logo_transparente.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState({
        nome: "",
        senha: "",
    });

    const navigate = useNavigate();
    const [erro, setErro] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        // Enviando ao servidor com o ENDPOINT de login, await para esperar
        const resposta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login),
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            navigate("/feed");
        } else {
            setErro(dados.mensagem);
        }
    }

    return (
        <div className="login-container container-fluid">
            <div className="login-card card card-row container-fluid">
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxM2p3fDA%3D"
                    className="login-card-img card-img-start object-fit-cover d-none md:d-block"
                    alt=""
                />

                <div className="card-body login-forms">
                    <img src={logo} alt="" className="login-logo" />

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
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                value={login.senha}
                                onChange={(event) =>
                                    setLogin({ ...login, senha: event.target.value })
                                }
                            />
                        </div>

                        <button type="submit" className="login-btn btn-solid theme-primary">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;