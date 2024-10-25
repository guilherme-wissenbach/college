import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu: React.FC = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
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
      </nav>
    );
}