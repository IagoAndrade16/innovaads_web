<script>

  import { Footer, FooterBrand, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia">
  <div class="mx-auto max-w-screen-xl text-center">
    <FooterBrand href="/" src="/images/logo-only-rocket.png" alt="InnovaADS Logo" name="InnovaADS" aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white" />
    <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mb-2 ml-6 text-gray-900 dark:text-white mt-6">
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="#about">Sobre</FooterLink>
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="#faq">FAQs</FooterLink>
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="#contact">Contato</FooterLink>
    </FooterLinkGroup>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" class="hover:underline">InnovaADS</a>. Todos os direitos reservados.</span>
  </div>
</Footer>