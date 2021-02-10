import { Navegador } from "../../commom/Navegador/Navegador"
import { Conteudo } from "./Conteudo";
import "./PaginaPrincipal.css"

<Conteudo></Conteudo>

function Cabecalho({ paginaAtual }) {
    return (
        <header className="cabecalho">
            <h1 className="logo">Matricula UFC-QXD</h1>
            <span className="pagina-atual">Você está na {paginaAtual}</span>
        </header>
    );
}

export function PaginaPrincipal() {
    return (
        <div>
            <Cabecalho paginaAtual="página de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
        </div>
    );
}