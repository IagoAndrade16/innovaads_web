<script lang="ts">
	import BaseInput from "$lib/components/BaseInput.svelte";
	import BaseLayout from "$lib/components/BaseLayout.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import type { JsObject } from "$lib/types/JsObject";
	import * as yup from "yup";
	import Card from "../../utils/widgets/Card.svelte";
	import YupValidation from "$lib/validation/yup";
	import { AdsService } from "$lib/services/AdsService";
	import { onMount } from "svelte";
	import { userAuthStore } from "$lib/stores/userAuthStore";
  import { userStore } from "$lib/stores/userStore";
	import Engine from "$lib/core/Engine";
	import type { BreadcrumbItemType } from "$lib/components/types/breadcrumb";
	import SelectInput from "$lib/components/SelectInput.svelte";
	import CountriesSelectInput from "$lib/components/CountriesSelectInput.svelte";

  Engine.assert([Engine.canUsePlatform($userStore)], '/home/profile');

  const pageBreadcrumbs: BreadcrumbItemType[] = [
    {
      name: 'Biblioteca de anúncios',
      href: '/home/ads-library',
    },
  ];

  let searchingCreatives: boolean = false;
	let adsService: AdsService;
  
  let values = {
		searchTerms: "",
    country: "",
	};

  let errors: JsObject | null = null;

  const formSchema = yup.object().shape({
    searchTerms: yup.string().required('Por favor, digite uma palavra-chave.'),
    country: yup.string().required('Por favor, selecione um país.'),
  });

  const handleSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);

    if (errors) return;

    searchingCreatives = true;

    const fetchCreativesRes = await adsService.fetchCreatives({
      ad_reached_countries: values.country,
      search_terms: values.searchTerms,
    }, $userAuthStore?.token!);

    searchingCreatives = false;
  };

  onMount(() => {
    adsService = new AdsService();
  })

</script>
<BaseLayout breadcrums={pageBreadcrumbs}>
	<Card title="Biblioteca de anúncios" class="max-w-full">
    <div class="flex lg:flex-row flex-col items-center gap-3">
      
      <div class="lg:w-auto lg:flex-2 w-full">
        <CountriesSelectInput 
        error={errors?.country}
        bind:selected={values.country}
        />
      </div>

      <div class="lg:w-auto lg:flex-1 flex-1 w-full">
        <BaseInput
        inputType="text"
        name="name"
        placeholder="Digite uma palavra-chave ou anunciante"
        bind:value={values.searchTerms}
        error={errors?.searchTerms}
        />
      </div>

      <div class="lg:w-auto lg:flex-1 flex-1 w-full">
        <PrimaryButton 
          loading={searchingCreatives}
          loadingText="Pesquisando "
          text="Pesquisar"
          classes="mt-2 w-full lg:w-auto"
          onClick={handleSubmit}
        />
      </div>
    </div>
  </Card>
</BaseLayout>