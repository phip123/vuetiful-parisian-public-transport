<template>
  <div>
    <networks-tab
      :networks="networks"
      :lines="lines"
      :isLoading="isLoading"
      :hasError="hasError"
      @load="load"
    ></networks-tab>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
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
    ...mapState({
      metroLines: state => state.lines.metro.all
    }),
    ...mapGetters({
      isLoading: "isLoadingAll",
      hasError: "hasErrorAll"
    }),
    lines: function() {
      return {
        metro: this.metroLines
      };
    }
  },
  methods: {
    ...mapActions({
      loadMetroLines: "getAllMetroLines",
      resetErrors: "resetErrors"
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
  },
  watch: {
    hasError: function(newError, oldError) {
      if (newError.error) {
        const vm = this;
        setTimeout(function() {
          vm.resetErrors();
        }, 150);
      }
    }
  }
};
</script>

<style scoped>

</style>
