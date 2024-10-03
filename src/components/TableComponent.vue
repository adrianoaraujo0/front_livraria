<template>
  <div class="q-pa-md">

    <q-table flat bordered :title="props.title" :rows="rows" :columns="columns" row-key="id"
      :style="{ backgroundColor: '#C0C0C0' }" :filter="filter">



      <template v-slot:top-right>

        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <div style="padding-left: 20px;">
          <q-btn color="deep-purple-9" icon="add" text-color="white"
            v-on:click="$router.push({ name: props.savePagePath })" />
        </div>


      </template>


      <template v-slot:body-cell="propsTable">
        <q-td :props="propsTable">
          <q-input v-model="propsTable.row[propsTable.col.name]" input-class="text-left" type="text" dense borderless />
        </q-td>
      </template>

      <template v-slot:body-cell-editar="propsTable">
        <q-td>
          <q-btn icon="edit" style="color:black" @click="props.onClickEdit(propsTable.row)" />
        </q-td>
      </template>

      <template v-slot:body-cell-acoes="propsTable">
        <q-td>
          <q-btn icon="delete" style="color:red" @click="props.onClickDelete(propsTable.row)" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar/dist/types/api/qtable';
import { onBeforeMount, reactive, ref } from 'vue'
import { HeadersModel } from './models';
import { UserModel } from 'src/models/user-model';

defineOptions({
  name: "TableComponent"
})

const props = defineProps<{
  datas: any[],
  headers: HeadersModel[],
  title: string,
  onClickDelete: (id: any) => void,
  onClickEdit: (model: UserModel) => void,
  savePagePath: string

}>()

onBeforeMount(() => {


  props.headers.forEach((header) => {
    // console.log("title:" + header.title)
    // console.log("key:" + header.key)
    columns.push({ name: header.key, align: 'left', label: header.title, field: header.key, sortable: true })
  })

  columns.push({ name: 'acoes', align: 'left', label: 'Ações', field: 'acoes' });
  columns.push({ name: 'editar', align: 'left', label: 'Editar', field: 'editar' });

  props.datas.forEach((data) => {
    rows.push(data)
  })


})

let filter = ref('')

const columns: QTableColumn[] = reactive([])

const rows: EditoraModel[] = reactive([])

</script>
