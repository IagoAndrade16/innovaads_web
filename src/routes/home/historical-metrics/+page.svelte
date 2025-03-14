<script lang="ts">
	import BaseDateRangeInput from '$lib/components/BaseDateRangeInput.svelte';
	import BaseGraph from '$lib/components/BaseGraph.svelte';
	import BaseInput from '$lib/components/BaseInput.svelte';
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import type { BreadcrumbItemType } from '$lib/components/types/breadcrumb';
	import Engine from '$lib/core/Engine';
	import { DialogService } from '$lib/services/DialogService';
	import { TrendsService } from '$lib/services/TrendsService';
	import type { SearchInterestApiResponse } from '$lib/services/types/TrendsServiceSearchInterestByKeyword';
	import { coordinatesDataStore } from '$lib/stores/coordinatesStore';
	import { userAuthStore } from '$lib/stores/userAuthStore';
	import { userStore } from '$lib/stores/userStore';
	import type { JsObject } from '$lib/types/JsObject';
	import YupValidation from '$lib/validation/yup';
	import type { ApexOptions } from 'apexcharts';
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import * as yup from 'yup';
	import MetaTag from '../../utils/MetaTag.svelte';
	import Card from '../../utils/widgets/Card.svelte';

  Engine.assert([Engine.canUsePlatform($userStore)], '/home/profile');

  let errors: JsObject | null = null;
  let trendsService: TrendsService;
  let searchingTendencies: boolean = false;
  let labelsSearched: string[] = [];
  let valuesSearched: number[] = [];
  const pageBreadcrumbs: BreadcrumbItemType[] = [
    {
      name: 'Métricas históricas',
      href: '/home/historical-metrics',
    },
  ];

	const path: string = '/home/historical-metrics';
  const description: string = 'Tendências de palavras-chave';
  const title: string = 'Tendências de palavras-chave';
  const subtitle: string = 'Busque por tendências de palavras-chave';

  let optionsTendenciesGraph: ApexOptions = {
    chart: {
      height: 400,
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: true
      }
    },
    series: [
      {
        name: 'Pontos',
        data: valuesSearched, 
      },
    ],
    xaxis: {
      categories: labelsSearched,
      labels: {
        style: {
          colors: '#000000', 
        },
      },
    },
  };

  const values = {
    keyword: '',
    fromDate: '',
    toDate: '',
  }

  const formSchema = yup.object().shape({
    keyword: yup.string().required('Por favor, digite uma palavra-chave.'),
    fromDate: yup.string().optional(),
    toDate: yup.string().optional(),
  });

  const handleSearchInterest = async () => {    
    errors = await YupValidation.validateSchema(formSchema, values);    
    if (errors) return;

    searchingTendencies = true;

    const [interestRes, interestByRegion] = await Promise.all([
      trendsService.searchInterest({
        keyword: values.keyword,
        startDate: values.fromDate,
        endDate: values.toDate,
      }, $userAuthStore!.token),
      trendsService.mostInterestedRegions({
        keyword: values.keyword,
        startDate: values.fromDate,
        endDate: values.toDate,
      }, $userAuthStore!.token),
    ])

    coordinatesDataStore.set(interestByRegion.result!);

    searchingTendencies = false;    

    switch (interestRes.status) {
      case 'SUCCESS':
        buildGraph(interestRes.result!);
        break;

      case 'UNAUTHORIZED':
        Engine.logout('/');
        break;  
       
      case 'UNKNOWN':
        DialogService.error({
          title: 'Oopss!',
          message: 'Algo deu errado ao buscar as têndencias de seu interesse. Por favor, tente novamente.',
        });
        break;  

      default:
        DialogService.error({
          title: 'Oopss!',
          message: 'Algo deu errado ao buscar as têndencias de seu interesse. Por favor, tente novamente.',
        });
        break;  
    }
  }

  const buildGraph = (data: SearchInterestApiResponse) => {
    labelsSearched = data.default.timelineData.map((item) => item.formattedAxisTime);
    valuesSearched = data.default.timelineData.map((item) => item.value[0]);    
    optionsTendenciesGraph = {
      ...optionsTendenciesGraph,
      series: [
        {
          name: 'Pontos',
          data: valuesSearched, 
        },
      ],
      xaxis: {
        categories: labelsSearched,
        labels: {
          style: {
            colors: '#000000',   
          },
        },  
      },
    }
  }

  onMount(() => {
    trendsService = new TrendsService();
  }); 

</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout
  breadcrums={pageBreadcrumbs}
  >
  <Card title="Métricas históricas" class="max-w-full">
    <div class="mt-5 flex lg:flex-row flex-col gap-3">
      <BaseInput
        inputType="text"
        label="Palavra-chave"
        name="name"
        placeholder="Ex: Marketing Digital"
        bind:value={values.keyword}
        error={errors?.keyword}
      />

      <BaseDateRangeInput
        bind:fromDate={values.fromDate}
        bind:toDate={values.toDate}
      />
    </div>
    <div>
      <Button 
        type="button"
        class="lg:h-11 lg:mt-6 mt-6 lg:w-24 w-full" 
        on:click={handleSearchInterest}
        disabled={searchingTendencies}
      > 
        {#if searchingTendencies}
          Buscando
        {:else} 
          Buscar
        {/if}
      </Button>
    </div>
  </Card>
  <BaseGraph 
    title={'Análise de Tendências'}
    class={'mt-8'}
    bind:options={optionsTendenciesGraph}
  />
</BaseLayout>

