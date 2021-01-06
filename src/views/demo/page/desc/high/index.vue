<template>
  <PageWrapper title="单号：234231029431" contentBackgrond>
    <template #extra>
      <a-button> 操作一 </a-button>
      <a-button> 操作二 </a-button>
      <a-button type="primary"> 主操作 </a-button>
    </template>

    <template #footer>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="详情" />
        <a-tab-pane key="2" tab="规则" />
      </a-tabs>
    </template>

    <div class="m-4 pt-4 desc-wrap">
      <a-descriptions size="small" :column="2">
        <a-descriptions-item label="__Some-New-Token__"> __Some-New-Token__ </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__">
          XX __Some-New-Token__
        </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__"> 2017-01-10 </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__"> <a>12421</a> </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__">
          2017-07-07 ~ 2017-08-08
        </a-descriptions-item>
        <a-descriptions-item label="__Some-New-Token__"> __Some-New-Token__ </a-descriptions-item>
      </a-descriptions>
      <a-card title="流程进度" :bordered="false">
        <a-steps :current="1" progress-dot size="small">
          <a-step title="__Some-New-Token__">
            <template #description> <div>Vben</div> <p>2016-12-12 12:32</p> </template>
          </a-step>
          <a-step title="__Some-New-Token__">
            <template #description> <p>Chad</p> </template>
          </a-step>
          <a-step title="__Some-New-Token__" />
          <a-step title="__Some-New-Token__" />
        </a-steps>
      </a-card>

      <a-card title="__Some-New-Token__" :bordered="false" class="mt-5">
        <a-descriptions :column="3">
          <a-descriptions-item label="__Some-New-Token__"> __Some-New-Token__ </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__">
            XX 32943898021309809423
          </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__">
            3321944288191034921
          </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__"> 18112345678 </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__" :span="2">
            __Some-New-Token__ 18100000000 __Some-New-Token__
          </a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="__Some-New-Token__" :column="3">
          <a-descriptions-item label="__Some-New-Token__"> 111 </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__"> 2017-08-08 </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__"> 725 </a-descriptions-item>
          <a-descriptions-item label="__Some-New-Token__"> 2017-08-08 </a-descriptions-item>
        </a-descriptions>

        <h4>__Some-New-Token__</h4>
        <a-card title="__Some-New-Token__">
          <a-descriptions title="__Some-New-Token__" :column="3">
            <a-descriptions-item label="__Some-New-Token__">
              __Some-New-Token__
            </a-descriptions-item>
            <a-descriptions-item label="__Some-New-Token__"> 1234567 </a-descriptions-item>
            <a-descriptions-item label="__Some-New-Token__">
              XX__Some-New-Token__ - YY__Some-New-Token__
            </a-descriptions-item>
            <a-descriptions-item label="__Some-New-Token__"> 2017-08-08 </a-descriptions-item>
            <a-descriptions-item label="__Some-New-Token__" :span="2">
              __Some-New-Token__...
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="__Some-New-Token__" :column="1">
            <a-descriptions-item label="__Some-New-Token__">
              Citrullus lanatus (Thunb.) Matsum. et
              Nakai__Some-New-Token__；__Some-New-Token__、__Some-New-Token__，__Some-New-Token__。__Some-New-Token__..
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="__Some-New-Token__" :column="1">
            <a-descriptions-item label="__Some-New-Token__">
              __Some-New-Token__
            </a-descriptions-item>
            <a-descriptions-item label="__Some-New-Token__"> 1234568 </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-card>
      <a-card title="__Some-New-Token__" class="my-5">
        <a-empty />
      </a-card>
      <BasicTable @register="registerTimeTable" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { refundTimeTableSchema, refundTimeTableData } from './data';
  export default defineComponent({
    components: { Description, BasicTable, PageWrapper },
    setup() {
      const [registerTimeTable] = useTable({
        title: '__Some-New-Token__',
        columns: refundTimeTableSchema,
        pagination: false,
        dataSource: refundTimeTableData,
        showIndexColumn: false,
        scroll: { y: 300 },
      });

      return {
        registerTimeTable,
      };
    },
  });
</script>
