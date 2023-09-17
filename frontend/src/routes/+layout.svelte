<script>
	// onMount(() => {
	// 	// let's update
	// })
	import '../app.postcss';
	import { AppShell, AppBar, Toast } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { initializeStores, Modal, getModalStore } from '@skeletonlabs/skeleton';
	import LoginComponent from "$lib/LoginComponent.svelte"
	import {isLoggedIn} from '$lib/stores'
	import { onMount } from 'svelte';
	initializeStores();
	let isLoggedIn_local;
	console.log(isLoggedIn_local + "POST2")

	var store = getModalStore()
	isLoggedIn.subscribe((val) => {
		// TODO: ADD CHECK FOR SCREWERSHIP
		console.log("SUB VAL" + val) 
			isLoggedIn_local = val;

		
	});
	
	function triggerLogin() {
		

		const modalComponent = {
			// Pass a reference to your custom component
			ref: LoginComponent,
			// Add the component properties as key/value pairs
			props: { background: 'bg-red-500' },
			// Provide a template literal for the default component slot
			slot: '<p>Skeleton</p>'
		};
		
			const modal = {
				type: 'component',
				// Pass the component directly:
				component: modalComponent,
			};
			
			store.trigger(modal);
									
									
	}
</script>
<Toast />
<Modal />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Vultyr</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button on:click={triggerLogin} style="btn btn-sm variant-ghost-surface px-8">Log In</button>
				
			
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
