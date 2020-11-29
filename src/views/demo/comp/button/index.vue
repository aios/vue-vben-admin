<template>
  <div class="p-4">
    <Alert
      message="__Some-New-Token__"
      description="__Some-New-Token__ ant-design-vue,__Some-New-Token__,__Some-New-Token__demo__Some-New-Token__（__Some-New-Token__）"
      type="info"
      show-icon
    />

    <div class="my-2">
      <h3>success</h3>
      <a-button color="success">__Some-New-Token__</a-button>
      <a-button color="success" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button color="success" class="ml-2" loading> loading </a-button>
      <a-button color="success" type="link" class="ml-2"> link </a-button>
      <a-button color="success" type="link" class="ml-2" loading> loading link </a-button>
      <a-button color="success" type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>warning</h3>
      <a-button color="warning">__Some-New-Token__</a-button>
      <a-button color="warning" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button color="warning" class="ml-2" loading> loading </a-button>
      <a-button color="warning" type="link" class="ml-2"> link </a-button>
      <a-button color="warning" type="link" class="ml-2" loading> loading link </a-button>
      <a-button color="warning" type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>error</h3>
      <a-button color="error">__Some-New-Token__</a-button>
      <a-button color="error" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button color="error" class="ml-2" loading> loading </a-button>
      <a-button color="error" type="link" class="ml-2"> link </a-button>
      <a-button color="error" type="link" class="ml-2" loading> loading link </a-button>
      <a-button color="error" type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>ghost</h3>
      <a-button ghost>__Some-New-Token__</a-button>
      <a-button ghost class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button ghost class="ml-2" loading> loading </a-button>
      <a-button ghost type="link" class="ml-2"> link </a-button>
      <a-button ghost type="link" class="ml-2" loading> loading link </a-button>
      <a-button ghost type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>primary</h3>
      <a-button type="primary">__Some-New-Token__</a-button>
      <a-button type="primary" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button type="primary" class="ml-2" loading> loading </a-button>
      <a-button type="link" class="ml-2"> link </a-button>
      <a-button type="link" class="ml-2" loading> loading link </a-button>
      <a-button type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>default</h3>
      <a-button type="default">__Some-New-Token__</a-button>
      <a-button type="default" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button type="default" class="ml-2" loading> loading </a-button>
      <a-button type="link" class="ml-2"> link </a-button>
      <a-button type="link" class="ml-2" loading> loading link </a-button>
      <a-button type="link" class="ml-2" disabled> disabled link </a-button>
    </div>

    <div class="my-2">
      <h3>dashed</h3>
      <a-button type="dashed">dashed</a-button>
      <a-button type="dashed" class="ml-2" disabled> __Some-New-Token__ </a-button>
      <a-button type="dashed" class="ml-2" loading> loading </a-button>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  export default defineComponent({
    components: { Alert },
    setup() {
      return {};
    },
  });
</script>
