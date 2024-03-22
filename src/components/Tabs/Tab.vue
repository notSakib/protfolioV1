<script setup>
import { Tabs, Tab } from 'super-vue3-tabs';

// define props to accept "disbaled" prop
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <Tabs>
    <Tab value="Tab 1">
      <p>This is the content of Tab 1</p>
    </Tab>
    <Tab :disabled="props.disabled" value="Tab 2">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quis earum ad optio dolor officiis culpa voluptates maiores libero, repellat</p>
    </Tab>
    <Tab value="Tab 3">
      <p>This is dummy content, for tab 3 </p>
    </Tab>
  </Tabs>
</template>