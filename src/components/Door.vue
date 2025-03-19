<template>
  <div
    @click="Handleclick"
    class="flex relative items-center w-[10rem] h-[14rem] hover:cursor-pointer"
    ref="door_container"
    style="border: 2px solid #654321; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5)"
  >
    <div id="door" :class="{ open: opendoor }" ref="opened_closed">
      <div id="front_door"></div>
      <div id="content">
        <Gift v-if="awardeddoor" id="gift" />
        <div v-if="!awardeddoor" id="donkey">
          <img src="../assets/burro.png" />
        </div>
      </div>
    </div>
    <div
      class="absolute top-1/2 lef-1/2 rounded-full w-[0.8rem] h-[0.8rem] bg-[#D2B48C]"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)"
    ></div>
  </div>
</template>

<script>
import Gift from "./Gift.vue";
import { nextTick } from "vue";

export default {
  props: {
    awardeddoor: {
      type: Boolean,
      required: false,
    },

    clicked: {
      type: Boolean,
      required: false,
    },

    id: {
      type: Number,
      required: false,
    },

    opendoor: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      showwcontent: false,
    };
  },

  components: { Gift },

  watch: {
    opendoor(newValue) {
      nextTick(() => {
        if (newValue) {
          this.OpenDoor();
        }
      });
    },
  },

  methods: {
    Handleclick(event) {
      this.$emit("click_door", this.id);

      if (this.clicked) {
        this.OpenDoor();

        this.awardeddoor
          ? this.$emit("win_loose", "win")
          : this.$emit("win_loose", "loose");
      }
    },

    OpenDoor() {
      this.$refs.opened_closed.classList.add("open");
    },
  },
};
</script>

<style>
#door {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
}

#front_door {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #8b4513;
  position: absolute;
  backface-visibility: hidden;
}

#content {
  display: flex;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  position: absolute;
  visibility: hidden;
  transition: visibility 0s linear 0.6s, opacity 0.3s ease-in-out 0.8s;
  opacity: 0;
  align-items: center;
  justify-content: center;
}

#gift,
#donkey {
  display: none;
}

#door.open {
  transform: rotateY(180deg);
}

#door.open #donkey {
  display: flex;
  position: absolute;
  width: 12rem;
  height: 12rem;
  bottom: 0;
}

#door.open #gift {
  display: flex;
  position: absolute;
  bottom: 0;
}

#door.open #content {
  visibility: visible;
  opacity: 1;
}

#door.open + div {
  display: none;
}

#door + div {
  display: flex;
}
</style>