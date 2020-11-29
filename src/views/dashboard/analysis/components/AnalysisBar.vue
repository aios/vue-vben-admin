<template>
  <div ref="chartRef" :style="{ height, width }" />
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  import { basicProps } from './props';
  export default defineComponent({
    name: 'AnalysisLine',
    props: basicProps,
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

      onMounted(() => {
        setOptions({
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            axisPointer: {
              // __Some-New-Token__，__Some-New-Token__
              type: 'shadow', // __Some-New-Token__，__Some-New-Token__：'line' | 'shadow'
            },
          },
          legend: {
            itemWidth: 15,
            right: 10,
            data: ['__Some-New-Token__', '__Some-New-Token__', '__Some-New-Token__'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                inside: true, // __Some-New-Token__
              },
              data: ['__Some-New-Token__', '__Some-New-Token__', '__Some-New-Token__'],
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                inside: true, // __Some-New-Token__
              },
            },
          ],
          series: [
            {
              name: '__Some-New-Token__',
              type: 'bar',
              itemStyle: {
                color: '#3ca0f6',
              },
              data: [3200, 3320, 3010],
              animationDuration: 4000,
            },
            {
              name: '__Some-New-Token__',
              type: 'bar',
              itemStyle: {
                color: '#7dd9b9',
              },
              data: [1200, 2600, 1010],
              animationDuration: 4000,
            },

            {
              name: '__Some-New-Token__',
              type: 'bar',
              itemStyle: {
                color: '#e6a23c',
              },
              data: [862, 2500, 964],
              animationDuration: 4000,
            },
          ],
        });
      });

      return { chartRef };
    },
  });
</script>
