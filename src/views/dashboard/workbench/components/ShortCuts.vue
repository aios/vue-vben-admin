<template>
  <CollapseContainer class="shortcuts" title="__Some-New-Token__" :canExpan="false">
    <template #action>
      <a-button size="small" type="link"> __Some-New-Token__ </a-button>
    </template>
    <Row>
      <template v-for="item in shortCuts" :key="item.img">
        <Col :span="8" class="shortcuts__item p-3">
          <img :src="item.img" class="shortcuts__item-img mb-2" />
          <br />
          <span>{{ item.name }}</span>
        </Col>
      </template>

      <Col :span="8" class="shortcuts__item p-3">
        <span class="shortcuts__item-all mb-2">
          <RightOutlined />
        </span>
        <br />
        <span>__Some-New-Token__</span>
      </Col>
    </Row>
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  import { CollapseContainer } from '/@/components/Container/index';

  import { RightOutlined } from '@ant-design/icons-vue';
  import wokbImg1 from '/@/assets/images/dashboard/wokb/attendance.png';
  import wokbImg2 from '/@/assets/images/dashboard/wokb/overtime.png';
  import wokbImg3 from '/@/assets/images/dashboard/wokb/meal.png';
  import wokbImg4 from '/@/assets/images/dashboard/wokb/leave.png';
  import wokbImg5 from '/@/assets/images/dashboard/wokb/stamp.png';
  import wokbImg6 from '/@/assets/images/dashboard/wokb/travel.png';
  import wokbImg7 from '/@/assets/images/dashboard/wokb/performance.png';
  import wokbImg8 from '/@/assets/images/dashboard/wokb/approve.png';
  const shortCuts = [
    {
      img: wokbImg1,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg2,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg3,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg4,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg5,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg6,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg7,
      name: '__Some-New-Token__',
    },
    {
      img: wokbImg8,
      name: '__Some-New-Token__',
    },
  ];
  export default defineComponent({
    components: { Row, Col, CollapseContainer, RightOutlined },
    setup() {
      return { shortCuts };
    },
  });
</script>
<style lang="less" scoped>
  .shortcuts {
    &__item {
      text-align: center;

      &-img {
        width: 36px;
      }

      &-all {
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        color: #000;
        cursor: pointer;
        background: lightgrey;
        border-radius: 50%;
      }
    }
  }
</style>
