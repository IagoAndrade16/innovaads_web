<script lang="ts">
  export let site = {
		name: 'InnovaADS',
		img: '/images/logo-only-rocket.png',
		link: '/',
		imgAlt: 'InnovaADS Logo'
	};
  
  export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
  export let siteImgClass = 'h-20';
  export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full h-[100vh]';
  export let divMainClass = 'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
</script>

<main class={mainClass}>
  <div class={divMainClass}>
    <a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
		</a>
    <slot />
  </div>
</main>