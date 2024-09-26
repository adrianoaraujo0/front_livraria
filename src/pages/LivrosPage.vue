<template>
  <TableComponent v-if="booksStore.loading" :datas="booksStore.livros" :headers="[
    { title: 'Nome', key: 'nome' },
    { title: 'Editora', key: 'editora' },
    { title: 'Lançamento', key: 'lancamento' },
    { title: 'Autor', key: 'autor' },
    { title: 'Total alugado', key: 'totalalugado' },
    { title: 'Quantidade', key: 'quantidade' },
  ]" title="Livros" v-on:click-delete="(book) => { booksStore.deletarLivro(book.id) }" />



</template>

<script setup>
import TableComponent from 'components/TableComponent.vue';
import { useBooksStore } from 'src/stores/books-store';
import { onBeforeMount } from 'vue';

const booksStore = useBooksStore()


onBeforeMount(() => {

  booksStore.getBooks();

})

</script>
