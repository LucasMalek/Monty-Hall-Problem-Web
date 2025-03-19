<template>
  <div id="container" class="w-[100%] h-[100%]">
    <form
      class="flex items-center w-[100%] h-[90%] flex-col justify-center"
      @submit.prevent="Handlesubmit"
    >
      <p
        class="font-sans text-white text-[1.8rem] w-auto mt-[2rem] mb-0 p-0"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Bem vindo {{ userproperties.name }}!
      </p>
      <div class="avatar-container mt-[1rem]">
        <img
          :src="
            userproperties.profilepicture
              ? require(`../../uploads/${userproperties.profilepicture}`)
              : require('../assets/avatar_icon.png')
          "
          class="avatar-img"
        />
      </div>
      <div class="flex items-center w-[100%] h-auto justify-center mb-[2rem]">
        <p
          class="mt-[1rem] text-white font-sans"
          style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.1)"
        >
          Vencidas:
        </p>
        <div class="mt-[1rem] ml-[0.5rem] text-green-900 font-sans">
          {{ userproperties.wins }}
        </div>
        <p class="mt-[1rem] ml-[1.5rem] text-white font-sans">Perdidas:</p>
        <div class="mt-[1rem] ml-[0.5rem] text-red-500 font-sans">
          {{ userproperties.losses }}
        </div>
      </div>
      <button type="submit" class="hidden" ref="submitButton"></button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    userproperties: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    Handlesubmit(event) {
      const random_awarded_door = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      this.$emit("properties", {
        doors_qtd: 3,
        award_door: random_awarded_door,
      });
    },
  },
};
</script>

<style>
.avatar-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid grey;
  background-color: whitesmoke;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>