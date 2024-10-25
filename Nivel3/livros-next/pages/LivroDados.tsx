import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Menu } from '@/componentes/Menu'; 
import { Livro } from '@/classes/modelo/Livro';
import { ControleEditora } from '@/classes/controle/ControleEditora';

const controleEditora = new ControleEditora()

const baseURL = "http://localhost:3000/api/livros";

const LivroDados = () => {
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
        return data.ok;
    };

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const livro: Livro = {
            codigo: 0, 
            titulo:titulo,
            resumo:resumo,
            autores: autores.split('\n'), 
            codEditora:codEditora,
        };

        const resultado = await incluirLivro(livro);
        if (resultado) {
            navigate.push('/livroLista'); 
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
                <form onSubmit={incluir}>
                    <div>
                        <label htmlFor="titulo">Título:</label>
                        <input
                            id="titulo"
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea
                            id="resumo"
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="autores">Autores (um por linha):</label>
                        <textarea
                            id="autores"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="codEditora">Editora:</label>
                        <select id="codEditora" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Incluir Livro</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;