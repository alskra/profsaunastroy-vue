export const resolveUrl = input => {
	if (input instanceof Object) {
		if (input.path === '/') {
			return process.env.VUE_APP_API_HOST + input.fullPath.replace(/^\//, '/home');
		}

		return process.env.VUE_APP_API_HOST + input.fullPath;
	}

	return process.env.VUE_APP_API_HOST + input;
};

export const getData = (url, options) => {
	const {to, next} = options;

	return fetch(url)
		.then(response => {
			if (response.status === 404) {
				next({
					name: 'NotFound',
					params: {0: to.fullPath},
					replace: true,
				});
			} else if (response.status !== 200) {
				throw new Error(response.status + ': ' + response.statusText);
			}

			return response.json();
		});
};
