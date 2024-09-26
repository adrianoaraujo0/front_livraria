
// axios.get('https://livraria-api-linux.altislabtech.com.br/api/livros').then((value)=>{
//   this.books.values = value.data;
// })

import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";

interface Livro {
  id: number,
  nome: string;
  editora: {nome: string};
  lancamento: string;
  autor: string;
  totalalugado: number;
  quantidade: number;
}

interface LivroEditoraFiltrada {
  id: number,
  nome: string;
  editora: string;
  lancamento: string;
  autor: string;
  totalalugado: number;
  quantidade: number;
}

export const useBooksStore = defineStore('livros',{


  state:()=>({
    loading: false,
    livros: [] as LivroEditoraFiltrada[]
  }),
  actions:{
    async getBooks(){

      let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/livros');
      this.livros = this.filterLivros(response.data);
      // console.log(this.filterLivros(response.data))
      this.loading = true;
    },
    filterLivros(livros: Livro[]): LivroEditoraFiltrada[] {
         return livros.map((livro)=>{
           return {
            id: livro['id'],
            nome: livro['nome'],
            editora: livro['editora']['nome'],
            lancamento: livro['lancamento'],
            autor: livro['autor'],
            totalalugado:livro['totalalugado'],
            quantidade:livro['quantidade']
           }
        })
    },
    async getLivroById(id: number){
      let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/livro/'+ id);
      return response.data;
    },
    async deletarLivro(id: number){
      try{
        console.log("index:"+ id)
        let book = await this.getLivroById(id)
        console.log(book)
        let response = await axios.delete(
          'https://livraria-api-linux.altislabtech.com.br/api/livro',
          {
            data:{
                autor: book["autor"],
                editora : {
                  cidade: book["editora"]["cidade"],
                  id: book["editora"]["id"],
                  nome: book["editora"]["nome"]
                },
                id: book["id"],
                lancamento: book["lancamento"],
                nome: book["nome"],
                quantidade: book["quantidade"],
                totalalugado: book["totalalugado"]
            }
          },
      );

      console.log("DEU CERTO")
      console.log(response)

    }catch(e){
      if(e instanceof AxiosError){
          alert(e.response?.data.error)
        }
      }

    }
  }

});
