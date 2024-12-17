<script lang="ts">
	import BaseInput from "$lib/components/BaseInput.component.svelte";
	import type { JsObject } from "$lib/types/JsObject";
	import YupValidation from "$lib/validation/yup";
	import { Button, DarkMode } from "flowbite-svelte";
	import * as yup from 'yup';

  let errors: JsObject | null = null;

  const values = {
    email: "",
    password: "",
  };

  const formSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email.').email('Por favor, digite um email válido.'),
    password: yup.string().required('Por favor, digite sua senha.').min(6, 'Sua senha deve ter no mínimo 6 caracteres.'),
  });

  const handleFormSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);

    console.log(errors);

    if(errors) {
      return;
    }
  };
</script>
  
<DarkMode />
<div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg w-2/3 lg:w-1/3 mx-auto rounded-md mt-48 bg-[#1F2937]">
  <form class="flex flex-col space-y-6" on:submit={handleFormSubmit}>
    <h1 class="text-2xl font-medium text-white dark:text-white p-0">Entre na sua conta</h1>
    <!-- <FloatingLabelInput id="email-input" name="email" type="email" class="text-white" color="base" bind:value={values.email}>
      Seu email
    </FloatingLabelInput> -->

    <BaseInput 
      label="Email" 
      id="email-input" 
      name="email" 
      inputType="email" 
      classes="text-white" 
      bind:value={values.email} 
      error={errors?.email}
    />

    <!-- <FloatingLabelInput id="password-input" name="password" type="password" class="text-white" color="base" bind:value={values.password}>
      Sua senha
    </FloatingLabelInput> -->

    <BaseInput 
      label="Senha" 
      id="password-input" 
      name="password" 
      inputType="password" 
      classes="text-white"
      bind:value={values.password} 
      error={errors?.password}
    />
    
    <div class="flex items-start">
      <a href="/" class="ml-auto text-sm text-primary-500 hover:underline dark:text-primary-500">Esqueceu sua senha?</a>
    </div>
    
    <Button type="submit" class="w-full1">Entrar na sua conta</Button>

    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Não tem uma conta ainda? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Criar uma</a>
    </p>
  </form>
</div>
