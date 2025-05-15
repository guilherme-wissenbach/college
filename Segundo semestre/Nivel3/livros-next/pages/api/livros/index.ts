import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        const livros = controleLivro.obterLivros();
        return res.status(200).json(livros);
      case 'POST':
        const livro = req.body;
        controleLivro.incluir(livro);
        return res.status(200).json({ mensagem: 'Livro incluído com sucesso' });
      default:
        return res.status(405).json({ erro: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro no servidor' });
  }
};
