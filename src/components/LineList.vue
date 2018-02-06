<template>
  <div>
    <ul>
      <li
        class="small"
        is="line-detail"
        v-for="line in lines" :key="line.id"
        :line="line"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import LineDetail from "./LineDetail";
export default {
  name: "line-list",
  components: {
    LineDetail
  },
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
