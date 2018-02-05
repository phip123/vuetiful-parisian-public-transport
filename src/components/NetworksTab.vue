<template>
  <section>
    <b-tabs @change="load" position="is-centered" class="block" v-model="activeTab">
      <b-tab-item v-for="network in networks" :key="network.id" :label="network.name">
        <line-list :lines="lines[network.id]"></line-list>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import LineList from "./LineList";

export default {
  name: "networks-tab",
  components: { LineList },
  props: {
    networks: {
      type: Array,
      default: () => []
    },
    lines: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  mounted: function() {
    this.load(0);
  },
  methods: {
    load: function(index) {
      this.$emit("load", this.networks[index].id);
    }
  }
};
</script>

<style scoped>

</style>
