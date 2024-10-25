import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        const editoras = controleEditora.getEditoras();
        return res.status(200).json(editoras);
      default:
        return res.status(405).json({ erro: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro no servidor' });
  }
};

