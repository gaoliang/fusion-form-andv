<template>
  <div>test state {{ state.count }}</div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "FusionFormRenderer",
  props: {
    schema: {}
  },
  setup(props) {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    console.log("test Composition API ", props);
    return {
      state
    };
  }
};
</script>

<style></style>
