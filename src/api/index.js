export const getData = (to, from, next, reqUrl) => {
	return fetch(process.env.VUE_APP_API_HOST + reqUrl)
		.then(response => {
			if (response.status === 404) {
				next({
					name: 'NotFound',
					query: {redirect: to.fullPath},
					replace: true,
				});
			} else if (response.status !== 200) {
				throw new Error(response.statusText);
			}

			return response.json();
		});
};
