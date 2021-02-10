import "./Conteudo.css"
import classNames from 'classnames';


function Card({ nome, codigo, disponivel }) {
    let nomeClasses = classNames("card", {
        "fundo-vermelho": !disponivel,
    })
    // let nomeClasse = "card ";
    // if (disponivel == false) {
    //     nomeClasse += "fundo-vermelho"
    // }
    return (
        <div className={nomeClasses}>
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo() {
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD0987654",
            disponivel: true,
        },
        {
            nome: "PIW",
            codigo: "QXD12345678",
            disponivel: false
        },
        {
            nome: "PAA",
            codigo: "QXD555555555",
            disponivel: true
        },
        {
            nome: "IHC",
            codigo: "QXD555555555",
            disponivel: true
        }
    ];


    let cards = disciplinas.map((disciplina) =>
        (<Card nome={disciplina.nome} codigo={disciplina.codigo} disponivel={disciplina.disponivel}></Card>))

    let lis = disciplinas.map(
        (disciplina) =>
            (<li>{disciplina.nome} - {disciplina.codigo}</li>)
    );

    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
    );
}
