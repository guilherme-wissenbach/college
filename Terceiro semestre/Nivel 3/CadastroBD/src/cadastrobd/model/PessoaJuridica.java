package cadastrobd.model;
import java.io.Serializable;

/**
 *
 * @author Guilherme
 */
public class PessoaJuridica extends Pessoa implements Serializable{
    
    private String cnpj;
    
    public PessoaJuridica(int id, String nome, String logradouro, String cidade, String estado,
            String telefone, String email, String cnpj){
        super(id, nome, logradouro, cidade, estado, telefone, email);
        this.cnpj = cnpj;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    
    public void exibir(){
        System.out.print("id: "+ getId()+ "\n" + "Nome: " + getNome() + "\n" + 
        "logradouro: "+getLogradouro()+"\n"+"cidade: "+getCidade()+"\n"+
        "estado: "+getEstado()+"\n" + "telefone: " +  getTelefone() + "\n"+ "email: " + getEmail() + "\n"+
        "CNPJ: "+this.cnpj + "\n");
    }
}