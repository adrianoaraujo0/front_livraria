<template>

  <TableComponent
  v-if="usuarioStore.showTable"
    title="Usuários"
    :datas=usuarioStore.usuarios
    :headers="[
      {
        title:'Nome',
        key:'nome'
      },
      {
        title:'Cidade',
        key:'cidade'
      },
      {
        title:'Endereco',
        key:'endereco'
      },
      {
        title:'Email',
        key:'email'
      },
    ]"
  />

</template>

<script setup>
import TableComponent from 'components/TableComponent.vue';
import { useUsuarioStore } from 'src/stores/usuario-store';
import { onBeforeMount } from 'vue';


  const usuarioStore = useUsuarioStore()


onBeforeMount(()=>{
  usuarioStore.getUsuarios();
})

</script>
