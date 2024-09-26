<template>
  <q-layout view="lHh Lpr lFf" :style="{ backgroundColor: '#1C1C1C' }">
    <q-header elevated :style="{ backgroundColor: '#483D8B' }">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Livraria
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :style="{ backgroundColor: '#C0C0C0' }">
      <q-list>


        <EssentialLink v-for="route in routesList" :key="route.title" :title="route.title" :icon="route.icon"
          :path="route.path" />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { Routes } from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout'
});


const routesList: Routes[] = [
  {
    title: "Menu",
    path: "/",
    icon: "home"
  },
  {
    title: "Editoras",
    path: "/editoras",
    icon: "apartment"
  },
  {
    title: "Livros",
    path: "/livros",
    icon: "book"
  },
  {
    title: "Usuários",
    path: "/usuarios",
    icon: "person"
  },
  {
    title: "Alugueis",
    path: "/alugueis",
    icon: "calendar_today"
  },
];



const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  console.log("1")
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>


<style></style>
