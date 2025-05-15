import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro }  from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'DELETE':
        const codigo = Number(req.query.codigo);
        controleLivro.excluir(codigo);
        return res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
      default:
        return res.status(405).json({ erro: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro no servidor' });
  }
};

