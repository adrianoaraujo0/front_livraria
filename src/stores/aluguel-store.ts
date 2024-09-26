import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";


interface AluguelModel{
  id: string,
  data_aluguel: string,
  data_devolucao: string,
  data_previsao: string,
  livro_id: {nome: string, editora: {nome: string}},
  usuario_id: {nome: string},
}

interface AluguelFiltradoModel{
  id: string,
  dataAluguel: string | null,
  dataDevolucao: string | null,
  dataPrevisao: string | null,
  livroNome: string,
  editoraNome: string,
  usuarioNome: string

}


export const useAluguelStore = defineStore('aluguel',{


  state:()=>({
    alugueis: [] as AluguelFiltradoModel[],
    showTable: false
  }),
  actions:{
    async getAlugueis(){
      let response = await axios.get<AluguelModel[]>('https://livraria-api-linux.altislabtech.com.br/api/alugueis');
      this.alugueis = this.filtrarAluguel(response.data);
      console.log(this.alugueis);
      this.showTable = true;
    },
    formatarData(data: string | null): string | null{
      console.log(data)
      // return reverterData.replaceAll(",","/");
      return data != null ? data.split("-").reverse().join("/") : "Sem data"
    },
    filtrarAluguel(alugueis: AluguelModel[]): AluguelFiltradoModel[] {
      return alugueis.map( (aluguel) => {
        return {
          id: aluguel['id'],
          dataAluguel: this.formatarData(aluguel['data_aluguel']),
          dataDevolucao: this.formatarData(aluguel['data_devolucao']) ,
          dataPrevisao:  this.formatarData(aluguel['data_previsao']),
          livroNome: aluguel['livro_id']['nome'],
          editoraNome:aluguel['livro_id']['editora']['nome'],
          usuarioNome: aluguel['usuario_id']['nome'],
        };
      });
    },
    async getAluguel(id: any){
      try{
        console.log(id);
        let response = await axios.get('https://livraria-api-linux.altislabtech.com.br/api/aluguel/'+ id);
        return response.data;
      }catch(e){
        console.log(e);
      }
    },
    async deleteAluguel(id: number){
      let aluguel = await this.getAluguel(id);

      console.log(aluguel);
      try{
        let response = await axios.delete(
          'https://livraria-api-linux.altislabtech.com.br/api/aluguel/',
          {
            data:{
              data_aluguel: aluguel["data_aluguel"],
              data_devolucao: aluguel["data_devolucao"],
              data_previsao: aluguel["data_previsao"],
              id: aluguel["id"],
              livro_id: {
                autor: aluguel["livro_id"]["autor"],
                editora: {
                  cidade: aluguel["livro_id"]["editora"]["cidade"],
                  id: aluguel["livro_id"]["editora"]["id"],
                  nome: aluguel["livro_id"]["editora"]["nome"]
                },
                id: aluguel["livro_id"]["id"],
                lancamento: aluguel["livro_id"]["lancamento"],
                nome: aluguel["livro_id"]["nome"],
                quantidade: aluguel["livro_id"]["quantidade"],
                totalalugado: aluguel["livro_id"]["totalalugado"]
              },
              usuario_id: {
                cidade: aluguel["usuario_id"]["cidade"],
                email: aluguel["usuario_id"]["email"],
                endereco: aluguel["usuario_id"]["endereco"],
                id: aluguel["usuario_id"]["id"],
                nome: aluguel["usuario_id"]["nome"]
              }
            }
          },
        );

        console.log(response.data)
        alert("O aluguel do livro "+aluguel["livro_id"]["nome"] + "foi excluido")
      }catch(e){
        if(e instanceof AxiosError){
          console.log(e);
          alert(e.response?.data.error)

        }
      }
    }


  }

});
