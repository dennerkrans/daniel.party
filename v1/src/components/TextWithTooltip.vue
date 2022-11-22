<template lang="pug">
  .Text-wrapper
    .Text-tooltip
      | {{ tipText }}
    slot
</template>

<script>
export default {
  props: {
    tipText: String
  }
};
</script>

<style lang="sass" scoped>
.Text-wrapper
  position: relative
.Text-tooltip
  postition: absolute
  top: -1.5em
  padding: 1em 0.5em
  border-radius: 8px
  background-color: palegreen
</style>
