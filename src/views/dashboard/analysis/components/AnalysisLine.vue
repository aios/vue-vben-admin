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
          // title: {
          //   text: '__Some-New-Token__',
          // },
          tooltip: {
            trigger: 'axis',
            padding: 3,
            backgroundColor: 'rgba(0, 0, 0, .6)',
            borderColor: '#777',
            borderWidth: 1,
          },
          legend: {
            icon: 'rect',
            itemWidth: 15,
            itemHeight: 4,
            left: 80,
            top: 0,
            orient: 'horizontal',
            data: ['__Some-New-Token__', '__Some-New-Token__'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              inside: true, // __Some-New-Token__
            },
            data: [
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
              '__Some-New-Token__',
            ],
          },
          yAxis: {
            type: 'value',
            axisTick: {
              inside: true, // __Some-New-Token__
            },
          },
          series: [
            {
              name: '__Some-New-Token__',
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#5B8FF9',
                },
              },
              // areaStyle: {},
              data: [330, 132, 101, 134, 90, 230, 210, 150, 232, 234, 230, 400],
              animationDuration: 4000,
            },
            {
              name: '__Some-New-Token__',
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#55D187',
                },
              },
              data: [220, 182, 191, 234, 290, 330, 310, 330, 232, 201, 330, 190],
              animationDuration: 4000,
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
