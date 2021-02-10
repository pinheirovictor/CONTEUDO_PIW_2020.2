import "./Navegador.css"

export function Navegador() {
    let Link = (props) => (<a href="http://google.com" className="link-navegador">{props.linkTexto}</a>);
    return (
        <nav className="navegador">
            <Link linkTexto="Link 1"></Link>
            <Link linkTexto="Link 2"></Link>
            <Link linkTexto="Link 3"></Link>
        </nav>
    );
}