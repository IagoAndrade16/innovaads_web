<script>
	import { Heading, P } from "flowbite-svelte";
	import CtaButton from "./CtaButton.svelte";

</script>
<div class="flex flex-col items-center">
  <div class="w-full md:w-3/4 lg:w-3/5">
    <Heading tag="h1" class="mb-4" customSize="text-5xl font-bold text-center">
      Dados Reais, Resultados Reais: Descubra o que funciona de verdade nos melhores anúncios
    </Heading>
  </div>

  <P class="mb-6 mt-10 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
    Através de uma análise detalhada de segmentação, criamos um relatório completo com insights sobre o que realmente funciona nos melhores anúncios do mercado
  </P>
  
  <CtaButton />
</div>
<img src="/svg/segment-analysis.svg" class="h-3/4 w-3/4 md:w-1/2 md:h-1/2 xl:h-1/3 xl:w-1/3 place-self-center mt-20" alt="">