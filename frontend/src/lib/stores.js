import { writable } from 'svelte/store';


// Security Considerations.
// If this variable is messed with nothing happens because PB fails anyway with no token.
export const isLoggedIn = writable(false)