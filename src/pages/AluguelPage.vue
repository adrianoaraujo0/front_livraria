<template>



</template>

<script setup>
import { useAluguelStore } from 'src/stores/aluguel-store';
import { onBeforeMount } from 'vue';


  const aluguelStore = useAluguelStore()

  onBeforeMount(()=>{

    aluguelStore.getAlugueis()

  })
</script>
