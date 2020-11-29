<template>
  <div ref="chartRef" :style="{ height, width }" />
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  export default defineComponent({
    props: {
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: 'calc(100vh - 78px)',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
      const yAxisData = [
        '__Some-New-Token__1',
        '__Some-New-Token__2',
        '__Some-New-Token__3',
        '__Some-New-Token__4',
        '__Some-New-Token__5',
        '__Some-New-Token__6',
        '__Some-New-Token__7',
        '__Some-New-Token__8',
        '__Some-New-Token__9',
        '__Some-New-Token__10',
      ];
      onMounted(() => {
        setOptions({
          backgroundColor: '#0f375f',
          title: [
            {
              text: '__Some-New-Token__',
              x: '2%',
              y: '1%',
              textStyle: { color: '#fff', fontSize: 14 },
            },
            {
              text: '__Some-New-Token__TOP10',
              x: '40%',
              y: '1%',
              textStyle: { color: '#fff', fontSize: 14 },
            },
            {
              text: '__Some-New-Token__',
              x: '2%',
              y: '50%',
              textStyle: { color: '#fff', fontSize: 14 },
            },
          ],
          grid: [{ x: '50%', y: '7%', width: '45%', height: '90%' }],
          tooltip: {
            formatter: '{b} ({c})',
          },
          xAxis: [
            {
              gridIndex: 0,
              axisTick: { show: false },
              axisLabel: { show: false },
              splitLine: { show: false },
              axisLine: { show: false },
            },
          ],
          yAxis: [
            {
              gridIndex: 0,
              interval: 0,
              data: yAxisData.reverse(),
              axisTick: { show: false },
              axisLabel: { show: true },
              splitLine: { show: false },
              axisLine: { show: true, lineStyle: { color: '#6173a3' } },
            },
          ],
          series: [
            {
              name: '__Some-New-Token__',
              type: 'pie',
              radius: '30%',
              center: ['22%', '25%'],
              color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
              data: [
                { value: 335, name: '__Some-New-Token__' },
                { value: 310, name: '__Some-New-Token__' },
                { value: 234, name: '__Some-New-Token__' },
                { value: 135, name: '__Some-New-Token__' },
                { value: 105, name: '__Some-New-Token__' },
              ],
              labelLine: { normal: { show: false } },
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b} \n ({d}%)',
                    textStyle: { color: '#B1B9D3' },
                  },
                },
              },
            },
            {
              name: '__Some-New-Token__',
              type: 'pie',
              radius: '30%',
              center: ['22%', '75%'],
              color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
              labelLine: { normal: { show: false } },
              data: [
                { value: 335, name: 'A__Some-New-Token__' },
                { value: 310, name: 'B__Some-New-Token__' },
                { value: 234, name: 'C__Some-New-Token__' },
                { value: 135, name: 'D__Some-New-Token__' },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b} \n ({d}%)',
                    textStyle: { color: '#B1B9D3' },
                  },
                },
              },
            },
            {
              name: '__Some-New-Token__TOP10',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: '45%',
              itemStyle: { normal: { color: '#86c9f4' } },
              label: { normal: { show: true, position: 'right', textStyle: { color: '#9EA7C4' } } },
              data: dataAll.sort(),
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
