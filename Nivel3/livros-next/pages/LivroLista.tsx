import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Menu } from '@/componentes/Menu'; 
import { LinhaLivro } from '@/componentes/LinhaLivro';
import { Livro } from '@/classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);

    const obter = async () => {
        const response = await fetch(baseURL);
        return await response.json();
    };
    

    const excluirLivro = async (codigo:number) => {
        const response = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data.ok; 
    };

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const livrosObtidos: Array<Livro> = await obter();
                console.log(livrosObtidos);
                setLivros(livrosObtidos);
            } catch (error) {
                console.error('Erro ao obter livros:', error);
                setLivros([]); 
            } finally {
                setCarregado(true); 
            }
        };
    
        if (!carregado) {
            obterLivros();
        }
    }, [carregado]);
    

    const excluir = async (codigo:number) => {
        const resultado = await excluirLivro(codigo);
        if (resultado) {
            setLivros(livros.filter(livro => livro.codigo !== codigo));
            setCarregado(false);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Lista de Livros</title>
                <meta name="description" content="Lista de livros cadastrados" />
            </Head>
            <Menu />
            <main>
                <h1>Lista de Livros</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro 
                                key={livro.codigo} 
                                livro={livro} 
                                excluir={() => excluir(livro.codigo)} 
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;