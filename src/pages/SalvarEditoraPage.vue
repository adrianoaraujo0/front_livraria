<template>

  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=editora.nome label="Nome"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=editora.cidade label="Cidade"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-btn color="deep-purple-9" label="Salvar" v-on:click="console.log(editora)" />
    </div>

  </div>


</template>


<script setup lang="ts">
import { EditoraModel } from 'src/models/editora-model';
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

let editora = reactive<EditoraModel>({
  id: '',
  nome: '',
  cidade: ''
})

let nome = ref('')
let cidade = ref('')

onBeforeMount(() => {
  editora = JSON.parse(route.query.editora as string)
  console.log(editora);
})


</script>
