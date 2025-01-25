<script lang="ts">import { Section, Faq, FaqItem } from "flowbite-svelte-blocks";
</script>

<div id="faq" class="mt-20">
  <Section name="faq">
    <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Perguntas frequentes</h2>
    <Faq>
      <div>
        <FaqItem>
          <svelte:fragment slot="h3">O que é a plataforma?</svelte:fragment>
          <p class="text-gray-500 dark:text-gray-400">
            A InnovaADS é uma plataforma que ajuda gestores de tráfego a obter informações valiosas sobre público-alvo, nichos específicos e criativos para as suas campanhas.
          </p>
        </FaqItem>
        <FaqItem>
          <svelte:fragment slot="h3">Eu consigo testar a plataforma?</svelte:fragment>
          <p class="text-gray-500 dark:text-gray-400">
            Sim, você consegue testar a plataforma por 7 dias gratuitamente. Após esse período, você pode escolher um dos nossos planos para continuar utilizando a plataforma.
          </p>
        </FaqItem>
      </div>
      <div>
        <FaqItem>
          <svelte:fragment slot="h3">Quais são os planos disponíveis?</svelte:fragment>
          <p class="text-gray-500 dark:text-gray-400">
            Atualmente, temos apenas 1 plano disponível que custa R$ 19,90 por mês. Esse plano dá acesso a todas as funcionalidades da plataforma.
          </p>
        </FaqItem>
      </div>
    </Faq>
  </Section>
</div>
