<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { ref, computed, onMounted } from "vue";
import type Emoji from "@/types/emoji";
import type Entry from "@/types/entry";
import { defineEmits, inject } from "vue";
import { userInjectionKey } from "@/injectionKeys";

// data
const text = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => text.value.length);
const maxChars = 280;

//template refs
const textArea = ref<HTMLTextAreaElement | null>(null);
onMounted(() => {
  textArea.value?.focus();
});

//inject child component
const user = inject(userInjectionKey);

// events
const emit = defineEmits<{
  (e: "@create", entry: Entry): void;
}>();

// methods
const handleTextInput = (e: KeyboardEvent) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length < maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.slice(0, maxChars);
  }
  text.value = (e.target as HTMLTextAreaElement).value;
};

const handleSubmit = () => {
  emit("@create", {
    createdAt: new Date(),
    userId: 1,
    id: Math.random(),
    body: text.value,
    emoji: emoji.value,
  });
  text.value = "";
  emoji.value = null;
};
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      ref="textArea"
      :value="text"
      @keyup="handleTextInput"
      :placeholder="`New Journal Entry for ${user?.username || 'anonymous'}}`"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
