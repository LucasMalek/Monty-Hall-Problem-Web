<template>
  <div class="items-center justify-center gap-8 flex">
    <Door :opendoor="is_door_open[0]" :awardeddoor="false" />

    <Door :opendoor="is_door_open[1]" :awardeddoor="true" />

    <Door :opendoor="is_door_open[2]" :awardeddoor="false" />
  </div>
</template>

<script>
import Door from "./Door.vue";

export default {
  components: { Door },

  data() {
    return {
      is_door_open: [false, false, false],
    };
  },

  mounted() {
    const door_order = [0, 2, 1];
    let current_position = 0;

    this.is_door_open[door_order[current_position]] = true;

    setInterval(() => {
      this.is_door_open[door_order[current_position]] = false;

      current_position < 2 ? (current_position += 1) : (current_position = 0);

      this.is_door_open[door_order[current_position]] = true;
    }, 3000);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>