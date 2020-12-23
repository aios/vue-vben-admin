<template>
  <div ref="chartRef" :style="{ height, width }" />
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  import { basicProps } from './props';
  export default defineComponent({
    props: basicProps,
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);

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
            show: false,
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
                color: '#5B8FF9',
              },
              areaStyle: {
                // __Some-New-Token__，__Some-New-Token__4__Some-New-Token__x0,y0,x2,y2(__Some-New-Token__0~1);__Some-New-Token__。__Some-New-Token__‘true’，__Some-New-Token__。
                // @ts-ignore
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#5B8FF9',
                    },
                    {
                      offset: 1,
                      color: 'rgba(118,168,248, 0)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(118,168,248, 0.9)', // __Some-New-Token__
                shadowBlur: 20, // shadowBlur__Some-New-Token__。__Some-New-Token__shadowColor,shadowOffsetX/Y, __Some-New-Token__。
              },
              // areaStyle: {},
              data: [134, 330, 132, 101, 90, 230, 210, 150, 230, 400, 232, 234],
              animationDuration: 3000,
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
