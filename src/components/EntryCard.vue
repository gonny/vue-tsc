<script lang="ts" setup>
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";
import type Entry from "@/types/entry";
import { defineProps, inject } from "vue";
import { userInjectionKey } from "@/injectionKeys";

const { findEmoji } = UseEmojis();
defineProps<{
  entry: Entry;
}>();

//inject child component
const user = inject(userInjectionKey);
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ user?.username || "anonymous" }}</span>
    </div>
  </div>
</template>
