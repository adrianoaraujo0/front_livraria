<template>

    <TableComponent
    v-if="editoraStore.loading"
    :datas="editoraStore.editoras"
    :headers="[
      {title: 'Nome', key: 'nome'},
      {title: 'Cidade', key: 'cidade'}
    ]"
    title="Editoras"
  />


</template>

<script setup>
  import TableComponent from 'components/TableComponent.vue';
  import { useEditoraStore } from 'src/stores/editore-store';
  import { onBeforeMount } from 'vue';

  const editoraStore = useEditoraStore()

  onBeforeMount(async ()=>{
    editoraStore.getEditoras();
  })

</script>


<style>



</style>
