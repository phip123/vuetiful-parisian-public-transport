<template>
  <div>
    <networks-tab
      :networks="networks"
      :lines="lines"
      @load="load"
    ></networks-tab>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NetworksTab from "../components/NetworksTab";
import { NETWORK_TYPES } from "../util/constants";

export default {
  components: { NetworksTab },
  name: "lines",
  data() {
    return {
      networks: NETWORK_TYPES
    };
  },
  computed: {
    ...mapState("lines", {
      metroLines: state => state.metro.all
    }),
    lines: function() {
      return {
        metro: this.metroLines
      };
    }
  },
  methods: {
    ...mapActions("lines/metro", {
      loadMetroLines: "getAllLines"
    }),
    loadLines: function() {
      let self = this;
      return {
        metro: function() {
          self.loadMetroLines();
        }
      };
    },
    load(id) {
      if (this.loadLines()[id]) {
        this.loadLines()[id]();
      }
    }
  }
};
</script>

<style scoped>

</style>
