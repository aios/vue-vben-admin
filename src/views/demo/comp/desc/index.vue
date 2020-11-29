<template>
  <div class="p-4">
    <Description
      title="__Some-New-Token__"
      :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
      :column="3"
      :data="mockData"
      :schema="schema"
    />

    <Description
      class="mt-4"
      title="__Some-New-Token__"
      layout="vertical"
      :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
      :column="2"
      :data="mockData"
      :schema="schema"
    />

    <Description @register="register" class="mt-4" />
    <Description @register="register1" class="mt-4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  const mockData: any = {
    username: 'test',
    nickName: 'VB',
    age: 25,
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '__Some-New-Token__',
    sex: '__Some-New-Token__',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const schema: DescItem[] = [
    {
      field: 'username',
      label: '__Some-New-Token__',
    },
    {
      field: 'nickName',
      label: '__Some-New-Token__',
      render: (curVal, data) => {
        return `${data.username}-${curVal}`;
      },
    },
    {
      field: 'phone',
      label: '__Some-New-Token__',
    },
    {
      field: 'email',
      label: '__Some-New-Token__',
    },
    {
      field: 'addr',
      label: '__Some-New-Token__',
    },
  ];
  export default defineComponent({
    components: { Description, Alert },
    setup() {
      const [register] = useDescription({
        title: 'useDescription',
        data: mockData,
        schema: schema,
      });

      const [register1] = useDescription({
        title: '__Some-New-Token__',
        bordered: false,
        data: mockData,
        schema: schema,
      });
      return { mockData, schema, register, register1 };
    },
  });
</script>
