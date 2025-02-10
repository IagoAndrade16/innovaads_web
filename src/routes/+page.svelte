<script>
	import LandingPageContainer from "$lib/components/landing/LandingPageContainer.svelte";
	import Navbar from "$lib/components/landing/Navbar.svelte";
	import HeadingWithCta from "$lib/components/landing/HeadingWithCta.svelte";
	import Benefits from "$lib/components/landing/Benefits.svelte";
	import TestForSevenDays from "$lib/components/landing/TestForSevenDays.svelte";
	import FaqSection from "$lib/components/landing/FaqSection.svelte";
	import PlatformPricing from "$lib/components/landing/PlatformPricing.svelte";
	import LandingFooter from "$lib/components/landing/LandingFooter.svelte";

</script>
<Navbar />

<LandingPageContainer>
	<HeadingWithCta />
	<Benefits />
</LandingPageContainer>
<TestForSevenDays />

<LandingPageContainer
	containerMarginTop="20"
>
	<PlatformPricing />
</LandingPageContainer>

<FaqSection />
<LandingFooter />