<script lang="ts">import { Section, Faq, FaqItem } from "flowbite-svelte-blocks";
	import { Accordion, AccordionItem, P } from "flowbite-svelte";
</script>

<div class="mb-20 mt-20">
  <Section name="faq">
    <h2 id="faq" class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Perguntas frequentes</h2>
    <Accordion>
      <AccordionItem>
        <span slot="header">O que exatamente a plataforma faz?</span>
        <P>
          A InnovaADS oferece aos gestores de tráfego e copywriters ferramentas que os ajudam a entender o que está em alta nos nichos de mercado, 
          além de fornecer insights sobre o que está funcionando para os concorrentes. A plataforma também oferece uma ferramenta de geração de ideias de anúncios, 
          que ajuda a criar anúncios de alta conversão em minutos.
        </P>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Os dados da plataforma são atualizados com que frequência?</span>
        <P>
          Os dados da plataforma são em tempo real, ou seja, sempre que você acessar a plataforma,
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Consigo ver anúncions da concorrência?</span>
        <P>
          Sim, você consegue ver os anúncios da concorrência, além de ter acesso a dados sobre o que está funcionando para eles.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Preciso de cartão de crédito para usar o teste grátis?</span>
        <P>
          Não. Você pode testar a plataforma gratuitamente por 7 dias sem a necessidade de inserir informações de pagamento.
          Se ao final do período de testes você quiser continuar usando a plataforma, basta escolher o melhor plano para você.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">O sistema também ajuda a criar anúncios ou só mostra dados?</span>
        <P>
          Até o momento o sistema ajuda apenas fornecendo dados e insights sobre o que está funcionando para os concorrentes,
          não sendo possível criar anúncios diretamente na plataforma.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Posso usar o sistema para qualquer nicho de mercado?</span>
        <P>
          Sim, nossa plataforma permite que você pesquise por anúncios em qualquer nicho de mercado, mesmo os mais específicos.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">O sistema mostra métricas como CTR, CPC e ROI dos anúncios?</span>
        <P>
          Não. Atualmente o sistema não mostra métricas como CTR, CPC e ROI dos anúncios, 
          apenas os anúncios em si e os dados sobre o que está funcionando para os concorrentes.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Os dados apresentados são precisos e confiáveis?</span>
        <P>
          Sim, os dados apresentados na plataforma são precisos e confiáveis, 
          pois são coletados diretamente das plataformas de anúncios como Facebook e Google.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Posso integrar o sistema com minhas contas de anúncios?</span>
        <P>
          Até o momento não é possível integrar o sistema com suas contas de anúncios,
          mas estamos trabalhando para adicionar essa funcionalidade em futuras atualizações.
        </P>
      </AccordionItem>

      <AccordionItem>
        <span slot="header">Como faço para cancelar minha assinatura?</span>
        <P>
          Para cancelar sua assinatura, basta acessar a página de configurações da sua conta e clicar no botão de cancelar assinatura.
          Se você tiver alguma dúvida ou problema, entre em contato com nossa equipe de suporte.
        </P>
      </AccordionItem>
    </Accordion>
  </Section>
</div>
