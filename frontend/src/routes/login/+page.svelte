<script>
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { page } from "$app/stores";
    export let data;

    const toastStore = getToastStore();
    if ($page.status == 400) {
        console.log("Hello");
         toastStore.trigger({
             message: "An error occurred loggin in. Please check your username or password"
         });
    }

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Oops, an error occurred. Try logging in again</h2>
		<!-- Animated Logo -->
        {{data.post.title}}
		
	</div>
</div>
