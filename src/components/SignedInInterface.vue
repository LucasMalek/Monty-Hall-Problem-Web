<template>
  <div class="flex items-center justify-center w-[100%] h-[100%]">
    <form
      class="flex flex-col items-center w-[100%] h-[100%]"
      @submit.prevent="HandleSubmit"
    >
      <div class="avatar-container">
        <img :src="avatarUrl" alt="Avatar Preview" class="avatar-img" />
      </div>
      <h3
        class="font-sans text-gray-100 mt-4 w-auto min-w min-h"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Indique os dados de registro
      </h3>
      <input
        type="text"
        class="w-[50%] p-[0.5%] rounded mt-2 outline-none"
        name="username"
        placeholder="Digite o nome de login"
      />
      <input
        type="password"
        class="w-[50%] p-[0.5%] outline-none rounded mt-4"
        name="password"
        placeholder="Digite a senha"
      />
      <button
        type="button"
        class="text-blue-800 hover:text-blue-900 no-underline hover:underline mt-[2rem]"
        @click="Handleregister"
      >
        Ainda não tem conta? Registre-se
      </button>
      <button type="submit" ref="submitButton" class="hidden">Submit</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      avatarUrl: require("../assets/avatar_icon.png"),
    };
  },
  methods: {
    HandleSubmit(event) {
      const { username, password } = event.target.elements;

      axios
        .post("http://localhost:3000/api/getuser", {
          username: username.value,
          password: password.value,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("signed", response.data);
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    Handleregister() {
      this.$emit("gotoregister");
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
  cursor: pointer;
  border: 1px solid grey;
  background-color: whitesmoke;
  margin-top: 10%;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
  