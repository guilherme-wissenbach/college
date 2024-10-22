import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const LivroDados = () => {
//   return (
//     <main>
//       <h1>Olá mundo</h1>
//     </main>
//   );
// };

const controleLivro = {
  incluir: (livro) => {
    console.log("Livro incluído:", livro);
  }
};

const controleEditora = {
  getEditoras: () => {
    return [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' }
    ];
  }
};

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main className='novo-body'>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir} className='form-body'>
        <div>
          <label className='label-class'>Título:</label>
          <input className='form-control'
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label-class'>Resumo:</label>
          <textarea className='form-control'
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo} className='form-control'>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='label-class'>Autores (1 por linha):</label>
          <textarea className='form-control'
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn btn-primary'>Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;