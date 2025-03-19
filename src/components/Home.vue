<template>
  <div
    class="min-h-screen text-white font-sans items-center flex-col justify-center"
  >
    <!-- Cabeçalho -->
    <header
      class="text-center h-[93vh] py-6 bg-gradient-to-br from-blue-900 to-blue-500 flex-col items-center"
    >
      <h1 class="text-[5rem] font-bold">Problema de Monty Hall</h1>
      <p class="text-xl text-blue-300 mt-2">
        Desafie sua sorte e descubra a lógica por trás do paradoxo!
      </p>
      <HomeAnimation class="mt-[5rem] items-center" />
      <div class="flex justify-center mt-[10rem]">
        <button
          class="bg-green-500 hover:bg-green-400 text-white w-[20rem] text-[2rem] font-bold py-3 px-8 shadow-md transform hover:scale-105 transition duration-300"
          @click="Handleplay"
        >
          Iniciar Jogo
        </button>
      </div>
    </header>

    <!-- Seção de Introdução -->
    <main class="p-6 space-y-6">
      <div
        class="bg-blue-500 rounded-lg shadow-md pr-6 pl-6 pt-2 pb-6 items-center justify-center"
      >
        <h2
          class="text-[2rem] font-serif font-bold mb-4 text-center items-center"
        >
          O Que é o Paradoxo de Monty Hall?
        </h2>
        <p
          class="text-lg leading-relaxed text-justify pr-6 pl-6 pt-2 pb-2 items-center justify-center"
        >
          O problema de Monty Hall, também conhecido por paradoxo de Monty Hall,
          é um problema matemático e paradoxo que surgiu a partir de um concurso
          televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na
          década de 1970. O jogo consistia no seguinte: Monty Hall, o
          apresentador, apresentava três portas aos concorrentes. Atrás de uma
          delas estava um prêmio (um carro) e, atrás das outras duas, dois
          bodes.
        </p>

        <div class="flex-col w-full h-full mt-[10rem]">
          <div
            class="flex flex-col md:flex-row items-center justify-center gap-[10%] shadow-md py-6 rounded-lg"
          >
            <img
              src="../assets/door1.png"
              class="w-[15rem] h-[25rem] rounded-lg"
              alt="Monty Hall"
            />

            <p
              class="list-decimal text-[1.7rem] text-justify space-y-2 w-[50rem] h-[25rem] p-4 rounded-lg"
            >
              O jogador escolhe inicialmente uma porta. Em seguida, o
              apresentador, que sabe onde está o prêmio, abre uma das outras
              duas portas, revelando uma cabra. Então, o jogador é oferecido a
              oportunidade de mudar de porta ou manter sua escolha inicial.
              Apesar de parecer contraintuitivo, mudar de porta aumenta
              significativamente as chances de ganhar.
            </p>
          </div>

          <div
            class="flex flex-col md:flex-row items-center justify-center gap-[10%] shadow-md py-4 rounded-lg mt-[1rem]"
          >
            <p
              class="list-decimal text-[1.7rem] text-justify space-y-2 w-[50rem] h-[25rem] p-4 rounded-lg"
            >
              A razão para mudar está na matemática das probabilidades. Ao
              escolher a primeira porta, há 1/3 de chance de que o prêmio esteja
              lá e 2/3 de que esteja em uma das outras duas portas. Quando o
              apresentador revela uma cabra, ele não está apenas escolhendo
              aleatoriamente, mas eliminando uma opção que ele sabe ser errada.
              Isso concentra as probabilidades de 2/3 na única porta restante
              que o jogador não escolheu inicialmente.
            </p>
            <img
              src="../assets/door2.png"
              class="w-[15rem] h-[25rem] rounded-lg"
              alt="Monty Hall"
            />
          </div>

          <div
            class="flex flex-col md:flex-row items-center justify-center gap-[10%] py-4 rounded-lg mt-[1rem]"
          >
            <img
              src="../assets/door3.png"
              class="w-[15rem] h-[25rem] rounded-lg"
              alt="Monty Hall"
            />
            <p
              class="list-decimal text-[1.7rem] text-justify space-y-2 w-[50rem] h-[25rem] p-4 rounded-lg"
            >
              Assim, ao mudar, o jogador está efetivamente apostando em uma
              probabilidade maior, de 2/3, enquanto manter a escolha inicial
              significa permanecer com apenas 1/3 de chance de ganhar. Esse
              paradoxo também destaca a importância de revisar informações e
              ajustar decisões conforme novas evidências surgem. No caso de
              Monty Hall, o instinto inicial pode nos levar a confiar em nossa
              primeira escolha, acreditando que as chances agora são iguais
              entre as duas portas restantes.
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Rodapé -->
    <footer class="text-center py-4 mt-10 text-blue-300 text-sm">
      <p>&copy; 2025 Monty Hall Game. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import HomeAnimation from "./HomeAnimation.vue";

export default {
  components: { HomeAnimation },

  methods: {
    Handleplay() {
      this.$emit("play");
    },
  },
};
</script>

<style>
</style>