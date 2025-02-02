<script lang="ts">
	import type { JsObject } from "$lib/types/JsObject";

	import Card from "../../../routes/utils/widgets/Card.svelte";
	import BaseInput from "../BaseInput.svelte";

  export let addressErrors: JsObject | null = null;

  export let customerAddressValues = {
    street: '',       
    number: '',       
    neighborhood: '', 
    city: '',         
    state: '',        
    zipCode: '',      
    complement: '',
  }

</script>

<div>
  <Card title="" class="lg:space-y-4">
    <h1 class="font-bold text-3xl text-gray-900 dark:text-white mb-8 lg:mb-2">Endereço de Cobrança</h1>
    <div class="flex flex-col lg:flex-row lg:gap-14 gap-2"> 
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="CEP"
          name="zipCode"
          placeholder="00000-000"
          mask="00000-000"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={customerAddressValues.zipCode}
          error={addressErrors?.zipCode}
        />
      </div>
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="Bairro"
          name="neighborhood"
          placeholder="Bairro"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={customerAddressValues.neighborhood}
          error={addressErrors?.neighborhood}
        />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:gap-14 gap-2"> 
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="Rua"
          name="street"
          placeholder="Rua C"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={customerAddressValues.street}
          error={addressErrors?.street}
        />
      </div>
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="Número"
          name="number"
          placeholder="48"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={customerAddressValues.number}
          error={addressErrors?.number}
        />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:gap-14 gap-2"> 
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="Cidade"
          name="city"
          placeholder="Rio de Janeiro"
          addiotionalInputClasses="lg:w-72 w-full"
          bind:value={customerAddressValues.city}
          error={addressErrors?.city}
        />
      </div>
      <div class="mt-4 lg:mt-0">
        <BaseInput 
          label="Estado"
          name="state"
          placeholder="RJ"
          addiotionalInputClasses="lg:w-72 w-full"
          mask="aa"
          bind:value={customerAddressValues.state}
          error={addressErrors?.state}
        />
      </div>
    </div>
    <div class="mt-4 lg:mt-0">
      <BaseInput 
        label="Complemento"
        name="complement"
        placeholder="Apto. 304"
        addiotionalInputClasses="w-full"
        bind:value={customerAddressValues.complement}
      />  
    </div>
  </Card>
</div>