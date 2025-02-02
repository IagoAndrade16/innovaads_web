<script lang="ts">
	import type { JsObject } from "$lib/types/JsObject";
	import Card from "../../../routes/utils/widgets/Card.svelte";
	import BaseInput from "../BaseInput.svelte";
	import DocumentInput from "../DocumentInput.svelte";

  export let errorsCardInfo: JsObject | null = null;

  export let cardInfoValues = {
    cardNumber: '',       
    cardholderName: '',   
    expirationDate: '',  
    securityCode: '',   
    document: '',  
  };

</script>


<div>
  <Card title="">
    <h1 class="font-bold text-3xl text-gray-900 dark:text-white  mb-8 lg:mb-2">Dados de Pagamento</h1>
    <div class="flex flex-col"> 
      <BaseInput 
        label="Nome do titular do cartão"
        name="nameCustomer"
        placeholder="Fulano da Silva"
        addiotionalInputClasses="w-full"
        bind:value={cardInfoValues.cardholderName}
        error={errorsCardInfo?.cardholderName}
      />
    </div>
    <div class="lg:w-full w-full mt-5">
      <BaseInput 
        label="Número do Cartão"
        name="cardNumber"
        placeholder="1234 5678 9876 5432"
        mask="0000 0000 0000 0000"
        bind:value={cardInfoValues.cardNumber}
        error={errorsCardInfo?.cardNumber}
      />
    </div>
    <div class="flex flex-col lg:flex-row lg:gap-7 gap-2 mt-5">
      <div class="flex-1">
        <BaseInput 
          label="Validade"
          name="validityCard"
          placeholder="00/00 ou 00/0000"
          mask="00/0000"
          addiotionalInputClasses="w-full"
          bind:value={cardInfoValues.expirationDate}
          error={errorsCardInfo?.expirationDate}
        />
      </div>
      <div class="flex-1 mt-4 lg:mt-0">
        <BaseInput 
          label="CVV"
          name="codeNumber"
          placeholder="345"
          addiotionalInputClasses="w-full"
          mask="0000"
          bind:value={cardInfoValues.securityCode}
          error={errorsCardInfo?.securityCode}
        />
      </div>

      <div class="flex-1 mt-4 lg:mt-0">
        <DocumentInput 
          useCustomText={false}
          error={errorsCardInfo?.document}
          bind:value={cardInfoValues.document}
        />
      </div>
    </div>
  </Card>
</div>