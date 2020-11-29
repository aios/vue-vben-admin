<template>
  <div class="high-form">
    <a-page-header title="__Some-New-Token__" :ghost="false"> __Some-New-Token__。 </a-page-header>

    <div class="m-5">
      <a-card title="__Some-New-Token__" :bordered="false">
        <BasicForm @register="register" layout="vertical" />
      </a-card>
      <a-card title="__Some-New-Token__" :bordered="false" class="mt-5">
        <BasicForm @register="registerTask" layout="vertical" />
      </a-card>
      <a-card title="__Some-New-Token__" :bordered="false" class="mt-5">
        <PersonTable ref="tableRef" />
      </a-card>
    </div>

    <PageFooter>
      <template #right>
        <a-button type="primary" @click="submitAll">__Some-New-Token__</a-button>
      </template>
    </PageFooter>
  </div>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import PersonTable from './PersonTable.vue';
  import { PageFooter } from '/@/components/Page';

  import { schemas, taskSchemas } from './data';

  export default defineComponent({
    components: { BasicForm, PersonTable, PageFooter },
    setup() {
      const tableRef = ref<{ getDataSource: () => any } | null>(null);

      const [register, { validate }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });

      const [registerTask, { validate: validateTaskForm }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: taskSchemas,
        showActionButtonGroup: false,
      });

      async function submitAll() {
        try {
          if (tableRef.value) {
            console.log('table data:', tableRef.value.getDataSource());
          }

          const [values, taskValues] = await Promise.all([validate(), validateTaskForm()]);
          console.log('form data:', values, taskValues);
        } catch (error) {}
      }

      return { register, registerTask, submitAll, tableRef };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
