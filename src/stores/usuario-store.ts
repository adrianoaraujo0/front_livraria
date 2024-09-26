import axios, { AxiosError } from 'axios';
import { defineStore } from 'pinia';
import { UserModel } from 'src/models/user-model';


export const useUsuarioStore = defineStore('Usuario',{

  state: ()=>({
    usuarios: [],
    showTable: false,
  }),
  actions:{
    async getUsuarios(){
      this.showTable = false;
       let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/usuarios');
       this.usuarios = response.data;
       console.log(this.usuarios)
       this.showTable = true;
    },
    async deleteUsuario(user: any){
      try{
        console.log(user)
        let response = await axios.delete('https://livraria-api-linux.altislabtech.com.br/api/usuario/',
          {
            data:{
              cidade: user["cidade"],
              email: user["email"],
              endereco: user["endereco"],
              id: user["id"],
              nome: user["nome"]
            }
          }
        );

        this.getUsuarios();

      }catch(e){
        if(e instanceof AxiosError){
          console.log(e)
          alert(e.response?.data.error)
        }
      }
    },
    async cadastrarUsuario(user: UserModel) : Promise<number> {

      console.log(user.nome);
      console.log(user.email);
      console.log(user.cidade);
      console.log(user.endereco);
      try{
        let response = await axios.post('https://livraria-api-linux.altislabtech.com.br/api/usuario/',
          {
            cidade: user.cidade,
            email: user.email,
            endereco: user.endereco,
            nome: user.nome,
          }
        );

        return response.status;
      }catch(e){
        if(e instanceof AxiosError){
          let data = e.response?.data
          let errorEmail = data.email ? "Email: " +  data.email + "\n" : "";
          let errorCidade = data.cidade ? "Cidade: " +  data.cidade + "\n"  : "";
          let errorNome = data.nome ? "Nome: " +  data.nome + "\n": "";
          let errorEndereco = data.endereco ? "Endereco: " +  data.endereco : "";

          if(errorNome || errorEmail || errorCidade || errorEndereco){
            alert(
              errorNome +  errorEmail + errorCidade + errorEndereco
            )
          }

          if(data.error){
              alert(data.error)
          }

        }

        return 0;
      }
    }
  }

})
