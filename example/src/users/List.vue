<template>
<va-datagrid :data="data" style="width: 100%">
  <va-text-field prop="id" label="ID" width="100"></va-text-field>
  <va-text-field prop="name" label="Name"></va-text-field>
</va-datagrid>
</template>

<script>
import { resourceList } from 'adminvue'

export default resourceList({
})
</script>
