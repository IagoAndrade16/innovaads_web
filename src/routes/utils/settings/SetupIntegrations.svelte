<script lang="ts">
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import SecondaryButton from "$lib/components/SecondaryButton.svelte";
	import { FacebookSdk } from "$lib/providers/facebook/FacebookSdk";
	import { Hr, P } from "flowbite-svelte";
	import { FacebookSolid, GoogleSolid } from "flowbite-svelte-icons";
	import { onMount } from "svelte";
	import Card from "../widgets/Card.svelte";
	import { DialogService } from "$lib/services/DialogService";
	import { ToastService } from "$lib/services/ToastService";
	import { UsersService } from "$lib/services/UsersService";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import { userStore } from "$lib/stores/userStore";
	import Engine from "$lib/core/Engine";
	import { GoogleOAuthSetup } from "$lib/providers/google/GoogleOAuthSetup";

  type SaveFacebookAccountInput = {
    accessToken: string;
    userIdOnFacebook: string;
    expiresIn: number;
  }

  let facebookIsConnected = false;
  let googleIsConnected = $userStore!.googleAccount !== null;
  let facebook: FacebookSdk;
  let usersService: UsersService;

  const handleConnectWithFacebook = async () => {
    await facebook.login(() => {});

    const loginStatus = await facebook.getLoginStatus();

    switch (loginStatus.status) {
      case "connected":
        await saveFacebookAccount({
          accessToken: loginStatus.authResponse.accessToken,
          userIdOnFacebook: loginStatus.authResponse.userID,
          expiresIn: loginStatus.authResponse.expiresIn
        });
        
        break;
      case "not_authorized":
        DialogService.error({
          message: "Credenciais incorretas para a conta selecionada.",
          title: "Erro ao conectar com o Facebook"
        })
        facebookIsConnected = false;
        break;
      default:
        DialogService.error({
          message: "Houve um erro inesperado ao conectar com o facebook.",
          title: "Ooops!"
        })
        facebookIsConnected = false;
        break;
    }
  };

  const saveFacebookAccount = async (params: SaveFacebookAccountInput) => {
    const res = await usersService.connectWithFacebook({
      accessToken: params.accessToken,
      userIdOnFacebook: params.userIdOnFacebook,
      expiresIn: params.expiresIn,
      bearerToken: $userAuthStore!.token,
    });

    switch (res.status) {
      case 'SUCCESS':
        ToastService.success('Facebook conectado com sucesso!');
        facebookIsConnected = true;

        if($userStore) {
          $userStore = {
            ...$userStore,
            facebookAccount: {
              userIdOnFacebook: res.data!.userIdOnFacebook,
            }
          }
        }
        break;

      case 'UNAUTHORIZED':
        await facebook.logout();
        facebookIsConnected = false;
        Engine.logout();
        break;

      default:
        ToastService.error('Houve um erro inesperado ao conectar com o facebook.');
        facebookIsConnected = false;
        await facebook.logout();
        break;
    }
  }
  const disconnectFacebookAccountOnSystem = async () => {
    const res = await usersService.disconnectWithFacebook({
      bearerToken: $userAuthStore!.token,
    });

    DialogService.close();

    switch (res.status) {
      case 'SUCCESS':
        ToastService.success('Facebook desconectado com sucesso!');
        facebookIsConnected = false;

        if($userStore) {
          $userStore = {
            ...$userStore,
            facebookAccount: null
          }
        }
        break;

      case 'UNAUTHORIZED':
        Engine.logout();
        break;

      default:
        ToastService.error('Houve um erro inesperado ao desconectar com o facebook.');
        facebookIsConnected = false;
        if($userStore) {
          $userStore = {
            ...$userStore,
            facebookAccount: null
          }
        }
        break;
    }
  }

  const handleLogoutFromFacebook = async () => {
    DialogService.loading();

    await facebook.logout();
    const loginStatus = await facebook.getLoginStatus();
    
    switch (loginStatus.status) {
      case "connected":
        DialogService.error({
          message: "Houve um erro inesperado ao desconectar com o facebook.",
          title: "Ooops!"
        })
        facebookIsConnected = true;
        break;
      case "not_authorized":
      case "unknown":
        await disconnectFacebookAccountOnSystem();
        break;
      default:
        DialogService.error({
          message: "Houve um erro inesperado ao desconectar com o facebook.",
          title: "Ooops!"
        })
        facebookIsConnected = true;
        break;
    }
  };

  const handleConnectWithGoogle = async () => {
    const googleOAuthSetup = GoogleOAuthSetup.getInstance();
    const googleCode = await googleOAuthSetup.loginOnGoogle();    

    if (!googleCode) {
      DialogService.error({
        message: "Houve um erro inesperado ao conectar com o Google.",
        title: "Ooops!"
      })
      googleIsConnected = false;
      return;      
    }

    const connectWithGoogleResponse = await usersService.connectWithGoogle({
      code: googleCode,
    }, $userAuthStore!.token);
    
    switch (connectWithGoogleResponse.status) {
      case 'SUCCESS':
        ToastService.success('Google conectado com sucesso!');
        googleIsConnected = true;

        if ($userStore) {
          $userStore = {
            ...$userStore,
            googleAccount: {
              expiresIn: connectWithGoogleResponse.data!.expiresIn,
              expiresRefreshIn: connectWithGoogleResponse.data!.expiresRefreshIn,
            }
          }
        }
        break;
       
      case 'FAILED_TO_CONNECT_ACCOUNT': 
        DialogService.error({
          message: "Houve um erro inesperado ao conectar com o Google.",
          title: "Ooops!"
        });
        googleIsConnected = false;
        break;  

      case 'UNAUTHORIZED':
        Engine.logout();
        break;

      default:
        ToastService.error('Houve um erro inesperado ao conectar com o Google.');
        googleIsConnected = false;
        break;
    }
  }

  const handleDisconnectWithGoogle = async () => {
    const disconnectWithGoogleResponse = await usersService.disconnectWithGoogle($userAuthStore!.token);

    switch (disconnectWithGoogleResponse.status) {
      case 'SUCCESS':
        ToastService.success('Google desconectado com sucesso!');
        googleIsConnected = false;

        if ($userStore) {
          $userStore = {
            ...$userStore,
            googleAccount: null
          }
        }
        break;

      case 'UNAUTHORIZED':
        Engine.logout();
        break;

      default:
        ToastService.error('Houve um erro inesperado ao desconectar com o Google.');
        googleIsConnected = false;
        break;
    }
  }

  onMount(async() => {
    facebook = await FacebookSdk.getInstance();
    usersService = new UsersService();

    if ($userStore?.facebookAccount) {
      facebookIsConnected = true;
    }

    if ($userStore?.googleAccount) {
      googleIsConnected = true;
    }
  });

</script>
<div 
  class="grid grid-cols-12 gap-4"
>
  <div class="col-span-12 md:col-span-6 xl:col-span-4">
    <Card title="Redes sociais">
      <div class="flex flex-row justify-between items-center mt-5">
        <div class="flex space-x-2 text-center items-center">
          <FacebookSolid class="w-8 h-8" />

          <P class="text-md">Conectar com Facebook</P> 
        </div>
        {#if facebookIsConnected}
          <SecondaryButton text="Desconectar" onClick={handleLogoutFromFacebook}/>
        {:else}
          <PrimaryButton classes="w-32" text="Conectar +" onClick={handleConnectWithFacebook}/>
        {/if}
      </div>

      <Hr />

      <div class="flex flex-row justify-between items-center">
        <div class="flex space-x-2 text-center items-center">
          <GoogleSolid class="w-6 h-6" />
          <P class="text-md">Conectar com Google</P>
        </div>
        {#if googleIsConnected}
          <SecondaryButton text="Desconectar" onClick={handleDisconnectWithGoogle}/>
        {:else}
          <PrimaryButton classes="w-32" text="Conectar +" onClick={handleConnectWithGoogle}/>
        {/if}
      </div>
    </Card>
  </div>
</div>