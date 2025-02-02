<script lang="ts">
	import Card from "../widgets/Card.svelte";
  import { userStore } from "$lib/stores/userStore";

</script>
<Card title="Informações do plano atual e cobranças" class="-mt-px max-w-none">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-4">
      <!-- Assinatura atual: {$userStore} -->
    </div>
  </div>
</Card>