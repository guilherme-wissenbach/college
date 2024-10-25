import { Livro } from "../classes/modelo/Livro";
import { controleEditora } from "../pages/api/editoras";

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo:number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { 
    const { livro, excluir } = props;
    
      const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    
      return (
        <tr>
          <td>
            {livro.titulo}
            <br></br>
            <button onClick={() => excluir(livro.codigo)} className='btn btn-danger'>Excluir</button>
          </td>
          <td>{livro.resumo}</td>
          <td>{nomeEditora}</td>
          <td>
            <ul>
              {livro.autores.map((autor, index) => (
                <li key={index}>{autor}</li>
              ))}
            </ul>
          </td>
        </tr>
      );
}