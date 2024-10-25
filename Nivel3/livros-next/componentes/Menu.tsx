import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu: React.FC = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/LivroLista" className="nav-link">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link href="/LivroDados"className="nav-link">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
