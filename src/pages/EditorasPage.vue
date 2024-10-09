  <template>

    <TableComponent v-if="editoraStore.loading" :datas="editoraStore.editoras" :headers="[
      { title: 'Nome', key: 'nome' },
      { title: 'Cidade', key: 'cidade' }
    ]" title="Editoras" v-on:click-delete="(editora) => { editoraStore.deleteEditoras(editora) }" v-on:click-edit="(editora) => {
      $router.push({
        name: 'saveeditora',
        query: {
          editora: JSON.stringify(editora)
        },
      })
    }" save-page-path="saveeditora" />


  </template>

<script setup>
import TableComponent from 'components/TableComponent.vue';
import { useEditoraStore } from 'src/stores/editore-store';
import { onBeforeMount } from 'vue';


const editoraStore = useEditoraStore()

onBeforeMount(async () => {
  editoraStore.getEditoras();
})

</script>


<style></style>
