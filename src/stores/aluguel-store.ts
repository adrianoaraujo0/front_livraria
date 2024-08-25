import axios from "axios";
import { defineStore } from "pinia";


export const useAluguelStore = defineStore('aluguel',{


  state:()=>({
    alugueis: [],
    showTable: false
  }),
  actions:{
    async getAlugueis(){
      let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/alugueis');
      this.alugueis = response.data
      console.log(this.alugueis);

      this.showTable = true;
    }


  }

});
