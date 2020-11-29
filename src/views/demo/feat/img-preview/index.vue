<template>
  <div class="p-4">
    <Alert message="__Some-New-Token__" type="info" />
    <div class="flex justify-center mt-4">
      <img :src="img" v-for="img in imgList" :key="img" class="mr-2" @click="handleClick(img)" />
    </div>
    <Alert message="__Some-New-Token__" type="info" />
    <a-button @click="handlePreview" type="primary" class="mt-4">__Some-New-Token__</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { createImgPreview } from '/@/components/Preview/index';
  const imgList: string[] = [
    'https://picsum.photos/id/66/346/216',
    'https://picsum.photos/id/67/346/216',
    'https://picsum.photos/id/68/346/216',
  ];
  export default defineComponent({
    components: { Alert },
    setup() {
      function handleClick(img: string) {
        createImgPreview({ imageList: [img] });
      }

      function handlePreview() {
        createImgPreview({ imageList: imgList });
      }
      return { imgList, handleClick, handlePreview };
    },
  });
</script>
