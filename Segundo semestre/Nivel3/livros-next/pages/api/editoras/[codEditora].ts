import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        const {codEditora} = req.query;
        const codigo = Number(codEditora);
        const nomeEditora = controleEditora.getNomeEditora(codigo)
        return res.status(200).json({nome: nomeEditora})
      default:
        return res.status(405).json({ erro: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro no servidor' });
  }
};
