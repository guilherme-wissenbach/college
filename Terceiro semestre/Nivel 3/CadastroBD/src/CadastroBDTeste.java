
import cadastro.model.PessoaFisicaDAO;
import cadastro.model.PessoaJuridicaDAO;
import cadastro.model.util.SequenceManager;
import cadastrobd.model.PessoaFisica;
import cadastrobd.model.PessoaJuridica;
import java.util.List;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Guilherme
 */
public class CadastroBDTeste {
    
    public static void main(String[] args)throws Exception {
        // a. Instanciar uma pessoa física e persistir no banco de dados    
        //Instanciando a sequencia
        SequenceManager seq = new SequenceManager();
        
        PessoaFisica pessoaIncluir = new PessoaFisica(seq.getValue("seq_Pessoa"),"Guilherme", "Rua 444, Centro", 
        "São Paulo", "SP", "1212-1212","Guilherme@saopaulo.com","11999999999");
        PessoaFisicaDAO pessoaPF = new PessoaFisicaDAO();
        pessoaPF.incluir(pessoaIncluir);
        
        // b.Alterar os dados da pessoa física no banco.
        // Alterando pessoa e pessoaFisica pelo id--> 3 . Mudando nome, cpf e telefone
       PessoaFisicaDAO pessoaPF1 = new PessoaFisicaDAO();
       pessoaPF1.alterar( 1,  "12345678998",  "Guilherme Ferreira",  "", "",  "", "123456789",  "");
              
       // c.Consultar todas as pessoas físicas do banco de dados e listar no console.
       // Retorno de todas as pessoas físicas do banco de dados 
       System.out.println("Pessoas fisicas:");
       PessoaFisicaDAO pessoasPF = new PessoaFisicaDAO();
       List<PessoaFisica> resultado = pessoasPF.getPessoas();
        for (PessoaFisica pessoaFisica : resultado) {
           pessoaFisica.exibir();
        } 
       
      //d. Excluir a pessoa física criada anteriormente no banco.
       // Excluindo pessoaFisica e Pessoa pelo id.
       PessoaFisicaDAO pessoaPF2 = new PessoaFisicaDAO();
       pessoaPF2.excluir(1);
      
      
      // e.Instanciar uma pessoa jurídica e persistir no banco de dados.
      
        
      //Incluir pessoa juridica e pessoa
      PessoaJuridica pessoaIncluir2 = new PessoaJuridica(seq.getValue("seq_Pessoa"),"GUI LTDA",
            "Rua São Paulo, Centro","São Paulo", "SP", "7070-9898","Guisaosao.com","55555555555555");
      PessoaJuridicaDAO pessoaPJ = new PessoaJuridicaDAO();
      pessoaPJ.incluir(pessoaIncluir2);
      
      
      // f.Alterar os dados da pessoa jurídica no banco.

      
      // Alterando pessoa e pessoaJuridica pelo id--> 4 . Mudando nome e cnpj
      PessoaJuridicaDAO pessoaPJ2 = new PessoaJuridicaDAO();
      pessoaPJ2.alterar( 2,  "99999999999999",  "Guilherme LTDA ",  "", "",  "", "",  "");
      
      
      // g.Consultar todas as pessoas jurídicas do banco e listar no console.
      
      
      // Retorno de todas as pessoas juridicas do banco de dados
       System.out.println("Pessoas juridicas:");    
       PessoaJuridicaDAO pessoasPJ = new PessoaJuridicaDAO();
       List<PessoaJuridica> resultado2 = pessoasPJ.getPessoas();
        for (PessoaJuridica pessoaJuridica : resultado2) {
           pessoaJuridica.exibir();
        } 
      
      
     // h.Excluir a pessoa jurídica criada anteriormente no banco.
     
     
     // Excluindo pessoa juridida e Pessoa pelo id.
      PessoaJuridicaDAO pessoaPJ3 = new PessoaJuridicaDAO();
      pessoaPJ3.excluir(2);
     
    }
}