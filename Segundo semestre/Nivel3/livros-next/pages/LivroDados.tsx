import type { NextPage } from "next";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Menu } from '@/componentes/Menu';
import { Livro } from '@/classes/modelo/Livro';
import { ControleEditora } from '@/classes/controle/ControleEditora';

const controleEditora = new ControleEditora()

const baseURL = "http://localhost:3000/api/livros";

const LivroDados: NextPage = () => {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [autores, setAutores] = useState<string>('');
    const [codEditora, setCodEditora] = useState<number>(opcoes[0]?.value || 0);

    const navigate = useRouter();

    const incluirLivro = async (livro: Livro) => {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        const data = await response.json();
        return data.mensagem;
    };

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const livro: Livro = {
            codigo: 0, 
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n'), 
        };

        const resultado = await incluirLivro(livro);
        
        if (resultado != "") {
            navigate.push('/LivroLista'); 
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Incluir Livro</title>
                <meta name="description" content="Formulário para inclusão de livros" />
            </Head>
            <Menu />
            <main>
                <h1>Incluir Livro</h1>
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
        </div>
    );
};

export default LivroDados;
