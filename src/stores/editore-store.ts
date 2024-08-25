import axios from "axios"
import { defineStore } from 'pinia';

export const useEditoraStore = defineStore('editora', {

  state:()=>({
    editoras: [],
    loading: false
  }),
  actions: {
    async getEditoras(){
      let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/editoras');
      this.editoras = response.data;
      this.loading = true;
    }
  }

});
