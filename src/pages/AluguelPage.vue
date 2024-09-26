<template>

  <TableComponent v-if="aluguelStore.showTable" :datas="aluguelStore.alugueis" :headers="[
    { title: 'Aluguel', key: 'dataAluguel' },
    { title: 'Devolucao', key: 'dataDevolucao' },
    { title: 'Previsao', key: 'dataPrevisao' },
    { title: 'Livro', key: 'livroNome' },
    { title: 'Editora', key: 'editoraNome' },
    { title: 'Usuario', key: 'usuarioNome' },
  ]" title="Alugueis" :on-click-delete="(aluguel) => aluguelStore.deleteAluguel(aluguel.id)" />

</template>

<script setup>
import { useAluguelStore } from 'src/stores/aluguel-store';
import { onBeforeMount } from 'vue';
import TableComponent from 'components/TableComponent.vue';


const aluguelStore = useAluguelStore()

onBeforeMount(() => {

  aluguelStore.getAlugueis()

})
</script>
