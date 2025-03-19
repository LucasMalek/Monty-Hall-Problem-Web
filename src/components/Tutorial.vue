<template>
  <div
    class="flex flex-col relative w-auto h-auto px-4 overflow-visible items-center"
  >
    <h2
      class="text-green-900 text-[3rem] mt-[1rem]"
      :style="{
        'text-shadow':
          '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, 0px 1px 0 white, 0px -1px 0 white, -1px 0px 0 white, 1px 0px 0 white, 2px 2px 4px rgba(0, 0, 0, 0.4)',
      }"
    >
      Como Jogar?
    </h2>
    <div>
      <p
        class="break-words font-serif text-white text-[1.3rem] mt-2 font-sans"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Bem-vindo ao nosso jogo de Monty Hall! Vamos ver se você consegue
        vencer... ou se vai acabar tropeçando.
      </p>
      <p
        class="break-words font-serif text-white text-[1.3rem] mt-2 font-sans"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Primeiro, escolha uma das três portas clicando nela. Pode escolher
        qualquer uma, afinal, a sorte pode ou não estar ao seu lado.
      </p>
      <p
        class="break-words font-serif text-white text-[1.3rem] mt-2 font-sans"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Depois, para dar uma 'ajudinha', eu vou abrir uma das portas que você
        não escolheu, revelando que ela não tem o prêmio. Olha só que bonzinho
        eu sou, hein?
      </p>
      <p
        class="break-words font-serif text-white text-[1.3rem] mt-2 font-sans"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Agora vem a melhor parte: você estará por sua própria conta. Decida se
        quer mudar sua escolha para a outra porta fechada ou manter sua escolha
        original. Clique uma vez para selecionar sua escolha final e outra para
        abrir a porta.
      </p>
      <p
        class="break-words font-serif text-white text-[1.3rem] mt-2 font-sans"
        style="text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.7)"
      >
        Vamos ver se você é esperto o suficiente para sair vencedor... ou se vai
        apenas aumentar a audiência com um fracasso espetacular. Boa sorte, você
        vai precisar!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
