<<<<<<< HEAD
package cadastrobd.model;
import java.io.Serializable;

/**
 *
 * @author Guilherme
 */
public class PessoaFisica extends Pessoa implements Serializable {

    private String cpf;
    
    public PessoaFisica(int id, String nome, String logradouro, String cidade, String estado,
            String telefone, String email, String cpf){
        super(id, nome, logradouro, cidade, estado, telefone, email);
        this.cpf = cpf;
    }

     public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    
        public void exibir(){
        System.out.print("id: "+ getId()+ "\n" + "Nome: " + getNome() + "\n" + 
        "logradouro: "+getLogradouro()+"\n"+"cidade: "+getCidade()+"\n"+
        "estado: "+getEstado()+"\n" + "telefone: " +  getTelefone() + "\n"+ "email: " + getEmail() + "\n"+
        "CPF: "+this.cpf + "\n");
    }
=======
package cadastrobd.model;
import java.io.Serializable;

/**
 *
 * @author Guilherme
 */
public class PessoaFisica extends Pessoa implements Serializable {

    private String cpf;
    
    public PessoaFisica(int id, String nome, String logradouro, String cidade, String estado,
            String telefone, String email, String cpf){
        super(id, nome, logradouro, cidade, estado, telefone, email);
        this.cpf = cpf;
    }

     public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    
        public void exibir(){
        System.out.print("id: "+ getId()+ "\n" + "Nome: " + getNome() + "\n" + 
        "logradouro: "+getLogradouro()+"\n"+"cidade: "+getCidade()+"\n"+
        "estado: "+getEstado()+"\n" + "telefone: " +  getTelefone() + "\n"+ "email: " + getEmail() + "\n"+
        "CPF: "+this.cpf + "\n");
    }
>>>>>>> 0cbe715b5be65d8c775a8c582ae93b422ac1035a
}