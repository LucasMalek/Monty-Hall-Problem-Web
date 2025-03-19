<template>
  <div class="flex w-[10%] h-[7%] items-center">
    <img
      :src="
        userproperties.profilepicture
          ? userproperties.profilepicture
          : '../assets/avatar_icon.png'
      "
      class="w-[50%] h-[100%]"
    />
    <div class="flex w-[50%] h-[80%] items-center justify-center">
      <div class="w-[50%] h-[100%]">Vitórias: {{ userproperties.wins }}</div>
      <div class="w-[50%] h-[100%]">Derrotas: {{ userproperties.losses }}</div>
    </div>
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
};
</script>

<style>
</style>