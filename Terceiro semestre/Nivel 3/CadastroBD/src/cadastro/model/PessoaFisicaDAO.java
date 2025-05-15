package cadastro.model;

import cadastrobd.model.PessoaFisica;
import java.util.ArrayList;
import java.util.List;
import cadastro.model.util.ConectorBD;
import com.sun.jdi.connect.spi.Connection;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

/**
 *
 * @author Guilherme
 */
public class PessoaFisicaDAO {
    
    public ConectorBD connection = new ConectorBD();
    
    public PessoaFisica getPessoa(int id)throws Exception {
        PessoaFisica pessoa = null;
                      String sql = "select *\n" +
                      "from pessoa, pessoa_fisica\n" +
                      "where pessoa.id_pessoa = "+ id + "AND " +
                      "pessoa.id_pessoa = pessoa_fisica.id_pessoa;";
            PreparedStatement ps = connection.getPrepared(sql);
            ResultSet resultado = ps.executeQuery();
            while(resultado.next()){
                pessoa = new PessoaFisica(resultado.getInt("id_pessoa"),
                resultado.getString("nome"),
                resultado.getString("logradouro"),
                resultado.getString("cidade"),
                resultado.getString("estado"),
                resultado.getString("telefone"),
                resultado.getString("email"),
                resultado.getString("cpf"));
                connection.closeConnection();
                //connection.closeResult(ps);
                connection.closeStatement(sql);
            } return pessoa;  
    } 
    
       
    public List<PessoaFisica> getPessoas() throws Exception{
        List<PessoaFisica> lista = new ArrayList<>();
                      String sql = "select *\n" +
                      "from pessoa, pessoa_fisica\n" +
                      "where pessoa.id_pessoa = pessoa_fisica.id_pessoa;";
            PreparedStatement ps = connection.getPrepared(sql);
            ResultSet resultado = ps.executeQuery();
            while(resultado.next()){
                //System.out.println(resultado.getString(5));
                lista.add(new PessoaFisica(resultado.getInt("id_pessoa"),
                resultado.getString("nome"),
                resultado.getString("logradouro"),
                resultado.getString("cidade"),
                resultado.getString("estado"),
                resultado.getString("telefone"),
                resultado.getString("email"),
                resultado.getString("cpf")));
                connection.closeConnection();
                //connection.closeResult(ps);
                connection.closeStatement(sql);
            } return lista;
            
    }       
   
    
    public void incluir(PessoaFisica pessoafisica)throws Exception{
        String sqlfisica  = "insert into pessoa_fisica (id_pessoa, cpf) values (?,?)"; 
        String sqlpessoa = "insert into pessoa (id_pessoa,nome,logradouro, cidade,"
                + "estado, telefone, email ) values (?,?,?,?,?,?,?)";
        PreparedStatement ps = connection.getPrepared(sqlfisica);
        PreparedStatement ps1 = connection.getPrepared(sqlpessoa);
        //ResultSet resultado = ps.executeQuery();
        ps.setInt(1, pessoafisica.getId());
        ps.setString(2, pessoafisica.getCpf());
        ps1.setInt(1, pessoafisica.getId());
        ps1.setString(2, pessoafisica.getNome());
        ps1.setString(3, pessoafisica.getLogradouro());
        ps1.setString(4, pessoafisica.getCidade());
        ps1.setString(5, pessoafisica.getEstado());
        ps1.setString(6, pessoafisica.getTelefone());
        ps1.setString(7, pessoafisica.getEmail());
        ps1.execute();
        ps.execute();
        connection.closeConnection();
        //connection.closeResult(ps);
        connection.closeStatement(sqlfisica);
    }
    
    public void alterar(int id, String cpf, String nome, String logradouro, 
        String cidade, String estado, String telefone, String email) throws Exception {
    PessoaFisica pessoa = getPessoa(id);
    if (pessoa == null) {
        throw new Exception("Pessoa não encontrada!" +id);
    }
    
    String sqlfisica = "UPDATE pessoa_fisica SET cpf=? WHERE id_pessoa = ?";
    String sqlpessoa = "UPDATE pessoa SET nome=?, logradouro=?, cidade=?, estado=?, telefone=?, email=? WHERE id_pessoa= ?";
    
    try (PreparedStatement ps = connection.getPrepared(sqlfisica);
         PreparedStatement ps1 = connection.getPrepared(sqlpessoa)) {
        
        ps.setString(1, cpf.isEmpty() ? pessoa.getCpf() : cpf);
        ps.setInt(2, id);
        ps.executeUpdate();
        
        ps1.setString(1, nome.isEmpty() ? pessoa.getNome() : nome);
        ps1.setString(2, logradouro.isEmpty() ? pessoa.getLogradouro() : logradouro);
        ps1.setString(3, cidade.isEmpty() ? pessoa.getCidade() : cidade);
        ps1.setString(4, estado.isEmpty() ? pessoa.getEstado() : estado);
        ps1.setString(5, telefone.isEmpty() ? pessoa.getTelefone() : telefone);
        ps1.setString(6, email.isEmpty() ? pessoa.getEmail() : email);
        ps1.setInt(7, id);
        ps1.executeUpdate();
        
    } finally {
        connection.closeConnection();
    }
}
    
    public void excluir(int id)throws Exception{
        String sqlfisica = "DELETE FROM pessoa_fisica WHERE id_pessoa="+id;
        String sqlpessoa = "DELETE FROM pessoa WHERE id_pessoa="+id;
        PreparedStatement ps = connection.getPrepared(sqlfisica);
        PreparedStatement ps1 = connection.getPrepared(sqlpessoa);
        ps.execute();
        ps1.execute();
        connection.closeConnection();
        //connection.closeResult(ps);
        connection.closeStatement(sqlfisica);
    }
    
}