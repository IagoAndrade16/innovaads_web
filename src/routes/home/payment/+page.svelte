<script lang="ts">
	import BaseFormLayout from "$lib/components/BaseFormLayout.svelte";
	import BillingAddressForm from "$lib/components/checkout/BillingAddressForm.svelte";
	import CardInfoForm from "$lib/components/checkout/CardInfoForm.svelte";
	import OrderResume from "$lib/components/checkout/OrderResume.svelte";
	import ReviewOrder from "$lib/components/checkout/ReviewOrder.svelte";
	import StepByStepCheckout from "$lib/components/checkout/StepByStepCheckout.svelte";
	import Navbar from "$lib/components/landing/Navbar.svelte";
	import Utils from "$lib/core/Utils";
	import type { JsObject } from "$lib/types/JsObject";
	import YupValidation from "$lib/validation/yup";
	import { onMount } from "svelte";
	import MetaTag from "../../utils/MetaTag.svelte";
  import * as yup from 'yup';
	import Engine from "$lib/core/Engine";
	import { userStore } from "$lib/stores/userStore";
	import { Document } from "$lib/core/value-objects/Document";
	import { choosedPackageStore } from "$lib/stores/choosedPackage";
	import { SubscriptionsService } from "$lib/services/SubscriptionsService";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import { DialogService } from "$lib/services/DialogService";

  const path: string = '/home/payment';
  const description: string = 'InnovaADS - Pagamento';
  const title: string = 'InnovaADS - Pagamento';
  const subtitle: string = 'InnovaADS - Pagamento';

  let subscriptionsService: SubscriptionsService;

  let loading = false;
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
    expirationDate: '',  
    securityCode: '',     
    document: '',
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
    zipCode: yup.string().required('Por favor, digite o CEP.').length(8, 'O CEP deve conter 8 caracteres.'),
  });

  const formCardInfoSchema = yup.object().shape({
    cardNumber: yup.string().required('Por favor, digite o número do cartão.').length(16, 'Coloque um número de cartão válido.'),
    cardholderName: yup.string().required('Por favor, digite o nome do titular do cartão.'),
    expirationDate: yup
      .string()
      .required('Por favor, digite a validade do cartão.')
      .length(6, 'A data de expiração deve estar no formato 00/0000.'),
    securityCode: yup
      .string()
      .required('Por favor, digite o código de segurança do cartão.')
      .min(3, 'O CVV do cartão deve estar no formato 000 ou 0000.')
      .max(4, 'O CVV do cartão deve estar no formato 000 ou 0000.'),
    document: yup.string().required('Por favor, digite o CPF ou CNPJ.').test('is-valid', 'Documento inválido.', (value) => {
      return Document.isValid(Utils.clean(value));
    }),
  });

  const getFormData = () => {
    const payerData = {
      document: cardInfoValues.document,
    }
    const paymentData = {
      number: cardInfoValues.cardNumber,
      holderName: cardInfoValues.cardholderName,
      expMonth: cardInfoValues.expirationDate.split('/')[0],
      expYear: cardInfoValues.expirationDate.split('/')[1],
      cvv: cardInfoValues.securityCode,
      billingAddress: {
        street: customerAddressValues.street,
        number: customerAddressValues.number,
        neighborhood: customerAddressValues.neighborhood,
        city: customerAddressValues.city,
        state: customerAddressValues.state,
        zipCode: customerAddressValues.zipCode,
        complement: customerAddressValues.complement,
        country: 'BR',
      }
    }

    return {
      payerData,
      paymentData,
    }
  }

  const handleFormSubmit = async () => {
    loading = true;
    const { payerData, paymentData } = getFormData();
    const params = {
      payerData,
      paymentData,
      packageId: $choosedPackageStore?.id,
    }

    const createSubscriptionResponse = await subscriptionsService.create({
      bearerToken: $userAuthStore?.token!,
      packageId: params.packageId!,
      payerData: params.payerData,
      paymentData: params.paymentData,
    }) 
    loading = false;

    switch (createSubscriptionResponse.status) {
      case 'SUCCESS':
        $userStore = {
          ...$userStore!,
          packageId: $choosedPackageStore?.id!,
          isOnTrial: false,
        }
        $choosedPackageStore = null;
        await DialogService.success({
          message: 'Tudo certo com a sua assinatura! Você já pode continuar usando o sistema.',
          title: 'Sucesso!',
        });

        Engine.navigateTo('/home/dashboard');
        break;
      
      case 'INVALID_CARD':
        await DialogService.error({
          message: 'Os dados do seu cartão não foram aceitos pelo seu banco. Por favor, revise-os e tente novamente.',
          title: 'Erro!',
        });
        break;

      case 'INVALID_PAYMENT':
        await DialogService.error({
          message: 'Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.',
          title: 'Erro!',
        });
        break;

      case 'UNAUTHORIZED':
        Engine.logout('/login');
        break;

      default:
        await DialogService.error({
          message: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
          title: 'Erro!',
        });
        break;
    }
  }

  const handleNextFormStep = async () => {   
    switch (stepForm) {
      case 0: 
        const billingAddressCleaned = Utils.cleanObject(customerAddressValues);        
        errorsBillingAddress = await YupValidation.validateSchema(formAddressSchema, billingAddressCleaned);   
        if (errorsBillingAddress) return;
        Engine.scrollToTop();
        stepForm = 1;
        break;
      case 1:
        let cardInfoCleaned = Utils.cleanObject(cardInfoValues);
        cardInfoCleaned = {
          ...cardInfoCleaned,
          cardNumber: cardInfoCleaned.cardNumber.replace(/\s/g, ''),
        }

        errorsCardInfo = await YupValidation.validateSchema(formCardInfoSchema, cardInfoCleaned);
        if (errorsCardInfo) return;
        Engine.scrollToTop();
        stepForm = 2
        break;
      case 2:
        await handleFormSubmit();
        break;
    }
  }

  onMount(() => {
    if(!userStore) {
      Engine.back();
    }
    subscriptionsService = new SubscriptionsService();
  })
</script>

<MetaTag {path} {description} {title} {subtitle} />
<Navbar />

<BaseFormLayout 
  divMainClass="mt-28 lg:mt-0"
  siteLinkClass="hidden"
  >
  <div class="flex items-center justify-center h-auto mt-36 lg:mt-40 bg-gray-50 dark:bg-gray-900">
    <div class="flex lg:flex-row flex-col px-4 lg:px-0 lg:mx-0 justify-center lg:gap-16 gap-10 w-full">
      <div class="space-y-7">
        <StepByStepCheckout
          steps={steps}
          currentStep={stepForm}
        />
        {#if stepForm === 0}
          <BillingAddressForm 
            customerAddressValues={customerAddressValues}
            addressErrors={errorsBillingAddress}
          />
        {/if}
        {#if stepForm === 1}
          <CardInfoForm  
            bind:cardInfoValues={cardInfoValues}
            bind:errorsCardInfo={errorsCardInfo}
          />
        {/if}
        {#if stepForm === 2}
          <ReviewOrder 
            cardInfoValues={cardInfoValues}
            customerAddressValues={customerAddressValues}
          />
        {/if}
        <div class="mt-10 text-center ">
          <p class="text-gray-500 text-sm">* Seus dados são criptografados e nunca serão compartilhados.</p>
        </div>
      </div>
      <div class="transform lg:translate-y-[7.5rem] translate-y-0">
        <OrderResume 
          onClick={handleNextFormStep}
          bind:steps={stepForm}
          bind:loading
        />
      </div>
      
    </div>
  </div>
</BaseFormLayout> 