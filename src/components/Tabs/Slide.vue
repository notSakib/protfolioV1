<script setup>
import { Tabs, Tab } from 'super-vue3-tabs';
</script>

<template>
  <Tabs>
    <Tab v-for="index in 25" :key="index" :value="`Tab ${index}`">
      <p>Tab <b>{{ index }}</b> content: This is some dummy content.</p>
      <p>You can put any component inside this as well.</p>
    </Tab>
  </Tabs>
</template>