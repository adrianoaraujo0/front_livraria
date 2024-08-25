<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      :title="props.title"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :style="{backgroundColor:'#C0C0C0'}"
    >
    <template v-slot:body-cell="propsTable">

      <q-td :props="propsTable">
        <q-input
          v-model="propsTable.row[ propsTable.col.name]"
          input-class="text-left"
          type="text"
          dense
          borderless
        />
      </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar/dist/types/api/qtable';
import { onBeforeMount, reactive, ref } from 'vue'
import { HeadersModel } from './models';

defineOptions({
  name: "TableComponent"
})

const props = defineProps<{
  datas: any[],
  headers: HeadersModel[],
  title: string
}>()

onBeforeMount(()=>{
  console.log(props.headers)
  props.headers.forEach((header)=>{
    console.log(header.title)
    columns.push({ name: header.key, align: 'left', label: header.title, field: header.key, sortable: true })
  })



  props.datas.forEach((data)=>{
    rows.push(data)
  })


})

const columns: QTableColumn[] = reactive([])

const rows: EditoraModel[] = reactive([])

</script>
