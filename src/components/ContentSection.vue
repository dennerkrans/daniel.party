<template lang="pug">
  .Content-section(v-bind:class='"Content-section--" + type')
    h2.Content-title--section {{ type }}
    ul.Content-list
      li.Content-listItem(v-for='item in items')
        a.Content-listLink(:href='item.link') {{ item.name }}
        span.Content-linkMeta(v-if='item.meta') {{ item.meta }}
</template>

<script>
export default {
  props: {
    type: String,
    items: Array
  }
}
</script>

