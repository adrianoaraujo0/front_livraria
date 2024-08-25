<template>
  <q-item
    clickable
    target="_blank"
    @click="router.push(path)"
  >

    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

defineOptions({
  name: 'RouteList'
});





export interface Routes{
  title: string;
  path: string;
  icon: string;
}

withDefaults(defineProps<Routes>(), {
  title: '',
  path: '',
  icon: '',
});
</script>
