// src/routes/login/+server.js
/**
 * Creates a `POST /login` server-side endpoint
 *
 * @type {import('./$types').RequestHandler}
 */
/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, locals }) => {
		// TODO log the user in
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        console.log(username)
        console.log(password)

		if (!username) {
			return fail(400, { username, missing: true });
		}

        try {
            const { token, record } = await locals.pb.collection('users').authWithPassword(username, password);
        } catch (e) {
            console.log("FAILURE")
            return fail(400, {username, invalid: true})
        }
		throw redirect(301,'/')
	}
};
export function load({ params }) {
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
