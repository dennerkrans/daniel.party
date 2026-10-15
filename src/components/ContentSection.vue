<template>
  <div class="Content-section" :class="`Content-section--${type}`">
    <h2 class="Content-title--section">{{ type }}</h2>
    <ul class="Content-list">
      <li v-for="item in items" :key="item.name" class="Content-listItem">
        <a class="Content-listLink" :href="item.link">{{ item.name }}</a>
        <span v-if="item.award" class="Content-award"
          >{{ item.award.place
          }}<span class="Content-award--info" :class="`Content-award--info--${type}`">{{
            item.award.info
          }}</span></span
        >
        <span v-if="item.meta" class="Content-linkMeta">{{ item.meta }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  items: Array,
});
</script>
