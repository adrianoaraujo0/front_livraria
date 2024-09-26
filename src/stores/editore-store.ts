import axios, { AxiosError } from "axios"
import { defineStore } from 'pinia';


interface EditoraModel{
  id: number,
  nome: string,
  cidade: string,
}

export const useEditoraStore = defineStore('editora', {

  state:()=>({
    editoras: [] as EditoraModel[],
    loading: false
  }),
  actions: {
    async getEditoras(){
      let response = await axios.get<EditoraModel[]>('https://livraria-api-linux.altislabtech.com.br/api/editoras');
      this.editoras = response.data;
      this.loading = true;
    },
    async deleteEditoras(editora: EditoraModel){

      console.log(editora);
      try{
        let response = await axios.delete(
          'https://livraria-api-linux.altislabtech.com.br/api/editora',
          {
            data:{
              id: editora.id,
              cidade: editora.cidade,
              nome: editora.nome
            }
          },
        );
      } catch(e) {
        if(e instanceof AxiosError){
          alert(e.response?.data.error)
        }
      }
      this.loading = true;
    },
  }

});
