<script setup>
import { Tabs, Tab } from 'super-vue3-tabs';
</script>

<template>
  <Tabs>
    <Tab value="Tab 1">
        <template #icon>
            <svg class="w-5 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="8"/><circle cx="12" cy="10" r="3"/><path d="M7 22h10"/><path d="M12 22v-4"/></svg>
        </template>
        <p>This is the content of Tab 1</p>
    </Tab>
    <Tab value="Tab 2">
        <template #icon>
            <svg class="w-5 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quis earum ad optio dolor officiis culpa voluptates maiores libero, repellat</p>
    </Tab>
    <Tab value="Tab 3">
        <template #icon>
            <svg class="w-5 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 8v3"/><path d="M12 6v7"/><path d="M16 8v3"/></svg>
        </template>
        <p>This is dummy content, for tab 3 </p>
    </Tab>
  </Tabs>
</template>