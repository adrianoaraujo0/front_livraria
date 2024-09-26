<template>

  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=user.nome label="Nome"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=user.email label="Email"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=user.endereco label="Endereço"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-input outlined bg-color="white" stack-label label-color="black" v-model=user.cidade label="Cidade"
        color="text-black" />
    </div>

    <div class="col-6">
      <q-btn color="deep-purple-9" label="Salvar" v-on:click="cadastrarUsuarioERetornarParaListagem()" />
    </div>

  </div>


</template>


<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import { useUsuarioStore } from 'src/stores/usuario-store';
import { UserModel } from 'src/models/user-model';
import { useRouter } from 'vue-router';
const router = useRouter()



let user = reactive<UserModel>({
  nome: '',
  email: '',
  cidade: '',
  endereco: ''
})


let cadastrarUsuarioERetornarParaListagem = async () => {
  let status = await usuarioStore.cadastrarUsuario(user);
  console.log("RETORNO: " + status)
  if (status == 200) {
    alert("Usuario salvo com sucesso")
    router.push("/usuarios");
  }
}


const usuarioStore = useUsuarioStore()



</script>
