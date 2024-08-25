import axios from 'axios';
import { defineStore } from 'pinia';



export const useUsuarioStore = defineStore('Usuario',{

  state: ()=>({
    usuarios: [],
    showTable: false,
  }),
  actions:{
    async getUsuarios(){
       let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/usuarios');
       this.usuarios = response.data;
       console.log(this.usuarios)
       this.showTable = true;
    }
  }

})
