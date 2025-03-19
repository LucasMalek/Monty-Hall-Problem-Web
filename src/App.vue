<template>
  <div
    id="app"
    class="flex flex-col h-screen w-full bg-blue-500 justify-center items-center overflow-visible"
  >
    <div
      v-if="passintroduction"
      id="title"
      class="w-[15%] h-[6%] border bg-gray-600 bg-opacity-80 text-[1.5rem] font-serif flex items-center justify-center text-white mb-[2%]"
    >
      Problema de Monty Hall
    </div>
    <GameContainer
      v-if="start"
      :gameproperties="gameproperties"
      @result="Handleresult"
      @situation="Handlefault"
    />
    <Home v-if="!passintroduction" @play="Handleplay" />
    <img
      v-if="showtutorial"
      src="./assets/hostblink.png"
      class="absolute left-[10rem] top-[12rem]"
    />
    <div
      v-if="!start && passintroduction"
      id="container"
      class="flex relative w-[40%] h-[60%] border-l-2 border-r-2 border-white mb-[2%] overflow-y-auto custom-scrollbar overflow-x-visible"
    >
      <SignUpInterface
        v-if="signedup"
        ref="signUpInterface"
        @signed="Handleuserproperties"
      />
      <SignedInInterface
        v-if="signedin"
        ref="signUpInterface"
        @signed="Handleuserproperties"
        @gotoregister="Handlegotoregister"
      />
      <SelectProperties
        v-if="selecporperties"
        :userproperties="userproperties"
        ref="SelectProperties"
        @properties="Handlegameproperties"
      />
      <Tutorial v-if="showtutorial" />
    </div>
    <div
      v-if="!start && passintroduction"
      class="w-[40%] flex items-center justify-center gap-[5%] h-auto mb-[5%]"
    >
      <button
        ref="button"
        type="button"
        v-if="tutorial_button"
        @click="Handle_show_tutorial_button($event)"
        class="w-[15%] min-h-[2rem] text-xl break-words overflow-hidden leading-tight whitespace-normal bg-blue-700 rounded-lg text-white font-sans border-1 border-white hover:bg-green-300 border-2 border-black"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.1)"
      >
        Tutorial
      </button>
      <button
        ref="button"
        type="button"
        v-if="register"
        name="register"
        @click="Handle_action_register_login($event)"
        class="w-[15%] min-h-[2rem] text-xl break-words overflow-hidden leading-tight whitespace-normal bg-blue-700 rounded-lg text-white font-sans border-1 border-white hover:bg-green-300 border-2 border-black"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.1)"
      >
        Registrar
      </button>
      <button
        ref="button"
        type="button"
        v-if="login"
        name="login"
        @click="Handle_action_register_login($event)"
        class="w-[15%] min-h-[2rem] text-xl break-words overflow-hidden leading-tight whitespace-normal bg-blue-700 rounded-lg text-white font-sans border-1 border-white hover:bg-green-300 border-2 border-black"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.1)"
      >
        Entrar
      </button>
    </div>
    <Host v-if="showsituation" :hostproperties="hostproperties" />
  </div>
</template>

<script>
import IntrodotoryTextVue from "./components/IntrodotoryText.vue";
import SignUpInterface from "./components/SignUpInterface.vue";
import SignedInInterface from "./components/SignedInInterface.vue";
import SelectProperties from "./components/SelectProperties.vue";
import GameContainer from "./components/GameContainer.vue";
import Host from "./components/Host.vue";
import axios from "axios";
import Tutorial from "./components/Tutorial.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    IntrodotoryTextVue,
    SignUpInterface,
    SelectProperties,
    GameContainer,
    Host,
    SignedInInterface,
    Tutorial,
    Home,
  },

  data() {
    return {
      passintroduction: false,
      login: true,
      register: false,
      signedup: false,
      signedin: false,
      start: false,
      selecporperties: false,
      showtutorial: false,
      tutorial_button: false,
      showsituation: false,
      userproperties: {},
      gameproperties: {},
      hostproperties: {},
    };
  },
  methods: {
    Handle_action_register_login(event) {
      if (this.passintroduction && (this.signedup || this.signedin)) {
        this.$refs.signUpInterface.$refs.submitButton.click();
        this.tutorial_button = true;

        return;
      }
      if (this.selecporperties) {
        this.$refs.SelectProperties.$refs.submitButton.click();
        this.selecporperties = false;
      } else {
        if (event.target.name == "register") {
          this.login = false;
          this.signedup = true;
        } else {
          this.register = false;
          this.signedin = true;
        }

        this.passintroduction = true;
      }
    },

    Handlegameproperties(properties) {
      this.gameproperties = properties;
      this.start = true;
    },

    Handleuserproperties(userproperties) {
      this.userproperties = userproperties;
      this.signedin = false;
      this.signedup = false;
      this.selecporperties = true;
      this.$refs.button.textContent = "Jogar";
    },

    Handleresult(result) {
      let win,
        lose = false;

      if (result == "win") {
        this.userproperties.wins += 1;
        win = true;
      } else {
        this.userproperties.losses += 1;
        lose = true;
      }

      axios
        .post("http://localhost:3000/api/postpoint", {
          win: win,
          lose: lose,
          id: this.userproperties._id,
        })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Algo deu errado com o servidor!");
          } else {
            console.log(response);
          }
        })
        .catch((err) => {
          console.log(`Erro ao recuperar o usuário:`, err);
        });

      this.start = false;
      this.selecporperties = true;
    },

    Handlefault(situation) {
      if (situation.showsituation == true) {
        this.hostproperties = {
          img1_transition: situation.img1_transition,
          img2_transition: situation.img2_transition,
          situationtext: situation.situationtext,
          remove: situation.remove,
          add: situation.add,
          class: situation.class,
        };

        this.showsituation = true;
      } else {
        this.showsituation = false;
      }
    },

    Handle_show_tutorial_button(funcao) {
      if (funcao.target.textContent == "Tutorial") {
        this.showtutorial = true;
        this.selecporperties = false;
        this.login = false;
        funcao.target.textContent = "Voltar";
      } else {
        this.showtutorial = false;
        this.selecporperties = true;
        this.login = true;
        this.$refs.button.textContent = "Tutorial";
      }
    },

    Handleplay() {
      this.passintroduction = true;
      this.signedin = true;
    },

    Handlegotoregister() {
      this.signedin = false;
      this.signedup = true;
      this.login = false;
      this.register = true;
    },
  },
};
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
</style>
