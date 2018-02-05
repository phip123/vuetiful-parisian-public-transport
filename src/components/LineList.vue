<template>
  <div>
    <ul>
      <li
        v-for="line in lines" :key="line.id"
        >
        {{line.shortName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "line-list",
  props: {
    lines: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
