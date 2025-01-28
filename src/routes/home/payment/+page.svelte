<script lang="ts">
	import BaseFormLayout from "$lib/components/BaseFormLayout.svelte";
	import BillingAddress from "$lib/components/checkout/BillingAddressForm.svelte";
	import OrderResume from "$lib/components/checkout/OrderResume.svelte";
	import Navbar from "$lib/components/landing/Navbar.svelte";
	import StepByStepCheckout from "$lib/components/checkout/StepByStepCheckout.svelte";
	import BillingAddressForm from "$lib/components/checkout/BillingAddressForm.svelte";
	import CardInfoForm from "$lib/components/checkout/CardInfoForm.svelte";
	import ReviewOrder from "$lib/components/checkout/ReviewOrder.svelte";
	import type { JsObject } from "$lib/types/JsObject";
  import * as yup from 'yup';
	import YupValidation from "$lib/validation/yup";
	import Utils from "$lib/core/Utils";

  let stepForm = 0;
  let errorsBillingAddress: JsObject | null = null;
  let errorsCardInfo: JsObject | null = null;
  let steps = [
    { text: 'Endereço' },
    { text: 'Pagamento' },
    { text: 'Revisão do Pedido' }
  ];

  let cardInfoValues = {
    cardNumber: '',       
    cardholderName: '',   
    cardholderLastName: '',
    expirationDate: '',  
    securityCode: '',     
  };

  let customerAddressValues = {
    street: '',       
    number: '',       
    neighborhood: '', 
    city: '',         
    state: '',        
    zipCode: '',      
    complement: '',
  }

  const formAddressSchema = yup.object().shape({
    street: yup.string().required('Por favor, digite o nome da rua.'),
    number: yup.string().required('Por favor, digite o número da casa.'),
    neighborhood: yup.string().required('Por favor, digite o bairro.'),
    city: yup.string().required('Por favor, digite a cidade.'),
    state: yup.string().required('Por favor, digite o estado.'),
    zipCode: yup.string().required('Por favor, digite o CEP.').length(8),
  });

  const formCardInfoSchema = yup.object().shape({
    cardNumber: yup.string().required('Por favor, digite o número do cartão.').length(16, 'Coloque um número de cartão válido.'),
    cardholderName: yup.string().required('Por favor, digite o nome do titular do cartão.'),
    cardholderLastName: yup.string().required('Por favor, digite o sobrenome do titular do cartão.'),
    expirationDate: yup.string().required('Por favor, digite a validade do cartão.').length(4, 'A data de expiração deve estar no formato 00/00.'),
    securityCode: yup.string().required('Por favor, digite o código de segurança do cartão.').length(3, 'O código do cartão deve conter 3 caracteres.'),
  });

  const handleNextFormStep = async () => {   
    switch (stepForm) {
      case 0: 
        const billingAddressCleaned = Utils.cleanObject(customerAddressValues);        
        errorsBillingAddress = await YupValidation.validateSchema(formAddressSchema, billingAddressCleaned);   
        if (errorsBillingAddress) return;
        stepForm++;
        break;
      case 1:
        let cardInfoCleaned = Utils.cleanObject(cardInfoValues);
        cardInfoCleaned = {
          ...cardInfoCleaned,
          cardNumber: cardInfoCleaned.cardNumber.replace(/\s/g, ''),
        }
        errorsCardInfo = await YupValidation.validateSchema(formCardInfoSchema, cardInfoCleaned);
        if (errorsCardInfo) return;
        stepForm++;
        break;
    }
  }
</script>

<Navbar />

<BaseFormLayout 
  divMainClass=""
  siteLinkClass="hidden"
  >
  <div class="flex items-center justify-center h-full lg:h-full mt-10 lg:mt-20 bg-gray-50 dark:bg-gray-900">
    <div class="flex lg:flex-row flex-col px-4 lg:px-0 lg:mx-0 justify-center lg:gap-16 gap-10 w-full">
      <div class="space-y-7">
        <StepByStepCheckout
          steps={steps}
          currentStep={stepForm}
        />
        {#if stepForm === 0}
          <BillingAddressForm 
            bind:customerAddressValues={customerAddressValues}
            addressErrors={errorsBillingAddress}
          />
        {/if}
        {#if stepForm === 1}
          <CardInfoForm  
            bind:cardInfoValues={cardInfoValues}
            errorsCardInfo={errorsCardInfo}
          />
        {/if}
        {#if stepForm === 2}
          <ReviewOrder 
            cardInfoValues={cardInfoValues}
            customerAddressValues={customerAddressValues}
          />
        {/if}
      </div>
      <div class="transform lg:translate-y-[7.5rem] translate-y-0">
        <OrderResume 
          onClick={handleNextFormStep}
          bind:steps={stepForm}
        />
      </div>
    </div>
  </div>
</BaseFormLayout> 