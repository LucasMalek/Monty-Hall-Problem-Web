<template>
  <div class="flex items-center justify-center w-[100%] h-[100%]">
    <form
      class="flex flex-col items-center w-[100%] h-[100%]"
      @submit.prevent="handleSubmit"
    >
      <div class="avatar-container" @click="triggerFileInput">
        <input
          type="file"
          ref="fileInput"
          @change="handleFileChange"
          name="profilepicture"
          style="display: none"
        />
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
        placeholder="Digite um nome para login"
      />
      <input
        type="password"
        class="w-[50%] p-[0.5%] outline-none rounded mt-4"
        name="password"
        placeholder="Digite uma senha"
      />
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
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleSubmit(event) {
      const { username, password, profilepicture } = event.target.elements;
      const formdata = new FormData();
      formdata.append("username", username.value);
      formdata.append("password", password.value);
      if (profilepicture.files[0]) {
        formdata.append("profilepicture", profilepicture.files[0]);
      }
      axios
        .post("http://localhost:3000/api/postuser", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.$emit("signed", response.data);
        })
        .catch((err) => {
          alert(err.response.data.message);
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
