<script>
	import { getModalStore } from "@skeletonlabs/skeleton";

    let username = ''
    let password = ''
    var modalStore = getModalStore()
    import { getToastStore } from '@skeletonlabs/skeleton';
    import {isLoggedIn} from '$lib/stores'
	import { page } from "$app/stores";
    const toastStore = getToastStore();
    
    </script>
<form action="/login" method="POST" class="container">
    {#if $page.form?.missing}<h2 class="error">The email field is required</h2>{/if}
	{#if $page.form?.incorrect}<h2 class="error">Invalid credentials!</h2>{/if}
	<h2>Login</h2>
	<label class="form-group" for="username">
        Username:
        <input type="text" id="username" name="username" placeholder="Enter your username" value={$page.form?.email ?? ''}>
    </label>
	<div class="form-group">
		<label for="password">Password:</label>
		<input type="password" id="password"  name="password" placeholder="Enter your password">
	</div>
	<input type="submit" class="login-button" value="Log In">
</form>
<style>
	 .container {
            width: 50%; /* Increased width */
            padding: 20px;
            background-color: #333;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
			margin-top: 10em;
			margin-left: auto;
			margin-right: auto;
			font-family: 'Inter', sans-serif;
			font-size: medium;
        }

        .container h2 {
            color: #fff;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 20px; /* Increased margin */
            text-align: left; /* Left-align the labels */
        }

        label {
            color: #ccc;
            font-weight: bold;
            display: block; /* Display labels as block elements */
            margin-bottom: 5px; /* Add some space between labels */
        }

        input {
            width: 100%;
            padding: 10px;
            border: none;
            background-color: #444;
            border-radius: 5px;
            color: #fff;
            outline: none;
        }

        .login-button {
            width: 100%;
            padding: 10px;
            background-color: #2196F3;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.5s;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
        }

        .login-button:hover {
            background-color: #1976D2;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple 0.8s linear; /* Slower ripple effect */
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
</style>