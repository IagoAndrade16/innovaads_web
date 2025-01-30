<script lang="ts">
	import type { JsObject } from "$lib/types/JsObject";
	import Card from "../../../routes/utils/widgets/Card.svelte";
	import BaseInput from "../BaseInput.svelte";

  export let errorsCardInfo: JsObject | null = null;

  export let cardInfoValues = {
    cardNumber: '',       
    cardholderName: '',   
    cardholderLastName: '',
    expirationDate: '',  
    securityCode: '',     
  };

</script>


<div>
  <Card title="">
    <h1 class="font-bold text-3xl text-gray-900 dark:text-white text-black mb-8 lg:mb-2">Dados de Pagamento</h1>
    <div class="flex flex-col lg:flex-row lg:gap-7 gap-2"> 
      <div>
        <BaseInput 
          label="Nome"
          name="nameCustomer"
          placeholder="João"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={cardInfoValues.cardholderName}
          error={errorsCardInfo?.cardholderName}
        />
      </div>
      <div>
        <BaseInput 
          label="Sobrenome"
          name="lastName"
          placeholder="Souza"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={cardInfoValues.cardholderLastName}
          error={errorsCardInfo?.cardholderLastName}
        />
      </div>
    </div>
    <div class="lg:w-[96%] w-full mt-5">
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
      <div>
        <BaseInput 
          label="Validade"
          name="validityCard"
          placeholder="07/31"
          mask="00/00"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={cardInfoValues.expirationDate}
          error={errorsCardInfo?.expirationDate}
        />
      </div>
      <div>
        <BaseInput 
          label="CVV"
          name="codeNumber"
          placeholder="345"
          addiotionalInputClasses="lg:w-72 w-full"
          maxLengthInput={3}
          bind:value={cardInfoValues.securityCode}
          error={errorsCardInfo?.securityCode}
        />
      </div>
    </div>
    <div class="mt-8 text-center">
      <p class="text-gray-500 text-sm">* Seus dados são criptografados e nunca serão compartilhados.</p>
    </div>
  </Card>
</div>