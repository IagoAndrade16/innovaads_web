<script lang="ts">
	import Card from "../../../routes/utils/widgets/Card.svelte";

  export let cardInfoValues = {
    cardNumber: '',       
    cardholderName: '',   
    cardholderLastName: '',
    expirationDate: '',  
    securityCode: '',     
  };

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
  <Card title="">
    <h1 class="font-bold text-3xl text-black mb-8 lg:mb-2">Revisão do Pedido</h1>
    <h3 class="font-bold text-xl mt-7 text-black dark:text-white">Endereço de Cobrança</h3>
    <div class="mt-2 text-black dark:text-white">
      <p>{customerAddressValues.street}, {customerAddressValues.number}</p>
      <p>{customerAddressValues.city}, {customerAddressValues.state} - {customerAddressValues.zipCode}</p>
      <p>{customerAddressValues.complement}</p>
    </div>
    <h3 class="font-bold text-xl mt-7 text-black dark:text-white">Informações de Pagamento</h3>
    <div class="mt-2 text-black dark:text-white">
      <p><strong>Nome no Cartão:</strong> {cardInfoValues.cardholderName} {cardInfoValues.cardholderLastName}</p>
      <p><strong>Número do Cartão:</strong> {cardInfoValues.cardNumber}</p>
      <p><strong>Validade:</strong> {cardInfoValues.expirationDate}</p>
    </div>
    <div class="mt-10 text-center">
      <p class="text-gray-500 text-sm">* Seus dados são criptografados e nunca serão compartilhados.</p>
    </div>
  </Card>
</div>