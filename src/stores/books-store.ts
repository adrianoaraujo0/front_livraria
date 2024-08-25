
// axios.get('https://livraria-api-linux.altislabtech.com.br/api/livros').then((value)=>{
//   this.books.values = value.data;
// })

import axios from "axios";
import { defineStore } from "pinia";

interface Livro {
  nome: string;
  editora: {nome: string};
  lancamento: string;
  autor: string;
  totalalugado: number;
  quantidade: number;
}

interface LivroEditoraFiltrada {
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
      console.log(this.filterLivros(response.data))
      this.loading = true;
    },
    filterLivros(livros: Livro[]): LivroEditoraFiltrada[] {
         return livros.map((livro)=>{
           return {
            nome: livro['nome'],
            editora: livro['editora']['nome'],
            lancamento: livro['lancamento'],
            autor: livro['autor'],
            totalalugado:livro['totalalugado'],
            quantidade:livro['quantidade']
           }
        })
    }
  }

});
