<template>
  <div
    ref="doorcontainer"
    class="w-[100%] h-[70%] flex items-center justify-between pr-[2%] pl-[2%]"
  >
    <div
      v-for="n in parseInt(gameproperties.doors_qtd)"
      :key="n"
      class="w-[100%] h-[100%] flex flex-col items-center space-x-6 justify-center"
    >
      <Door
        :awardeddoor="n === parseInt(gameproperties.award_door)"
        :ref="'door'"
        :clicked="n === choosed_door"
        :opendoor="is_door_open[n]"
        @click_door="Handleclick"
        :id="n"
        @win_loose="Handleresult"
        class="mb-[30%]"
        :style="{
          borderTop:
            choosed_door === n ? '2px solid yellow' : '2px solid #654321',
          borderLeft:
            choosed_door === n ? '2px solid yellow' : '2px solid #654321',
          borderRight:
            choosed_door === n ? '2px solid yellow' : '2px solid #654321',
          borderBottom: choosed_door === n ? '2px solid yellow' : 'none',
        }"
      />
    </div>
  </div>
</template>

<script>
import Door from "./Door.vue";

export default {
  props: {
    gameproperties: {
      type: Object,
      required: true,
    },
  },

  components: { Door },

  data() {
    return {
      choosed_door: null,
      opening_doors: true,
      is_door_open: [null, false, false, false],
    };
  },

  methods: {
    Handleclick(id) {
      this.choosed_door = id;

      if (this.opening_doors) {
        this.OpeningDoors();
        this.opening_doors = false;
      }
    },

    Handleresult(result) {
      this.choosed_door = null;

      if (result == "win") {
        this.$emit("situation", {
          img1_transition: require("../assets/hostsurprised.png"),
          img2_transition: require("../assets/hosthappy.png"),
          situationtext: "Venceu!",
          remove: "fault",
          add: "win",
          showsituation: true,
        });
      } else {
        this.$emit("situation", {
          img1_transition: require("../assets/hostsurprised.png"),
          img2_transition: require("../assets/hostblink.png"),
          situationtext: "Perdeu!",
          remove: "win",
          add: "fault",
          showsituation: true,
        });
      }

      this.TimeOutHost(result);
    },

    OpeningDoors() {
      const doors = this.$refs.door;
      let door_has_been_closed = false;

      for (let i = 1; i <= parseInt(this.gameproperties.doors_qtd); i++) {
        if (!door_has_been_closed) {
          if (i != this.choosed_door && doors[i - 1].awardeddoor != true) {
            this.is_door_open[i] = true;
            door_has_been_closed = true;
          }
        }
      }

      this.$emit("situation", {
        img1_transition: require("../assets/hosthelp.png"),
        img2_transition: require("../assets/hostblink.png"),
        situationtext: `Aqui vai uma ajudinha. Uma porta foi aberta!`,
        remove: "win",
        add: "fault",
        showsituation: true,
        class: "hosthelp",
      });

      this.TimeOutHost();
    },

    TimeOutHost(result = null) {
      setTimeout(() => {
        this.$emit("situation", { showsituation: false });
        if (result != null) {
          this.$emit("result", result);
        }
      }, 4000);
    },
  },
};
</script>

<style>
</style>
