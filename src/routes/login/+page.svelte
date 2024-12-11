<script lang="ts">
  import { Button, FloatingLabelInput, DarkMode } from "flowbite-svelte";

  const handleFormSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
</script>
  
<DarkMode />
<div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg w-2/3 lg:w-1/3 mx-auto rounded-md mt-48 bg-[#1F2937]">
  <form class="flex flex-col space-y-6" on:submit={handleFormSubmit}>
    <h1 class="text-2xl font-medium text-white dark:text-white p-0">Entre na sua conta</h1>
    <FloatingLabelInput id="email-input" name="email" type="email" class="text-white" color="base">
      Seu email
    </FloatingLabelInput>

    <FloatingLabelInput id="password-input" name="password" type="password" class="text-white" color="base">
      Sua senha
    </FloatingLabelInput>
    
    <div class="flex items-start">
      <a href="/" class="ml-auto text-sm text-primary-500 hover:underline dark:text-primary-500">Esqueceu sua senha?</a>
    </div>
    <Button type="submit" class="w-full1">Entrar na sua conta</Button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Não tem uma conta ainda? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Criar uma</a>
    </p>
  </form>
</div>
