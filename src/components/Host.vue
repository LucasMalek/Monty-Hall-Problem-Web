<template>
  <div class="situation_animation">
    <transition name="fade" mode="out-in">
      <img
        class="w-[30%] h-[30%]"
        :src="currentImage"
        alt=""
        :key="currentImage"
      />
    </transition>
    <div
      class="flex relative items-center justify-center w-[20%] h-[30%] mb-[2rem]"
    >
      <img class="w-full h-full" src="../assets/tv.png" alt="" />
      <transition name="fade" mode="out-in">
        <div
          class="absolute px-2 text-white font-bold text-[1.6rem]"
          :key="currentText"
        >
          {{ currentText }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hostproperties: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      currentImage: this.hostproperties.img1_transition,
      currentText: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.currentImage = this.hostproperties.img2_transition;
      this.currentText = this.hostproperties.situationtext;
    }, 500);
  },
};
</script>

<style>
.situation_animation {
  display: flex;
  width: auto;
  height: auto;
  bottom: 4rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: -5.4rem;
  z-index: 100;
  overflow: visible;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
