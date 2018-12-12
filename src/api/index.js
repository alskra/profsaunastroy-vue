import app from '../main';

export const fetchApiData = (url, options) => {
	return fetch(process.env.VUE_APP_API_HOST + url, options)
		.then(response => {
			if (response.status === 404) {
				app.$router.replace({
					name: 'NotFound',
					params: {0: app.$route.fullPath === '/' ? '/404' : app.$route.fullPath},
				});
			} else if (response.status !== 200) {
				throw new Error(response.status + ': ' + response.statusText);
			}

			return response.json();
		});
};
