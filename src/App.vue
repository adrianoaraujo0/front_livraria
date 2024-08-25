<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import { useEditoraStore } from './stores/editore-store';

defineOptions({
  name: 'App'
});

const editoraStore = useEditoraStore()

onBeforeMount( async ()=>{
 await editoraStore.getEditoras();

})


</script>
