import React from 'react';
import LivroLista from './LivroLista';

const App = () => {
  return (
    <div>
      <LivroLista />
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LivroLista from './LivroLista';
// import LivroDados from './LivroDados';

// const App = () => {
//   return (
//     <Router>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Biblioteca</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Lista de Livros</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dados">Dados do Livro</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<LivroLista />} />
//         <Route path="/dados" element={<LivroDados />} />
//       </Routes>
//     </Router>
//   );
// };
