import {getData} from '../api';

export default reqUrl => {
	return {
		name: 'MixinPage',
		data() {
			return {
				err: null,
				data: null,
			};
		},
		metaInfo() {
			return this.data ? {
				title: this.data.title,
				meta: this.data.meta || [],
			} : {};
		},
		methods: {
			setData(err, data) {
				if (err) {
					this.err = err.toString();
				} else {
					this.data = data;
				}
			},
		},
		beforeRouteEnter(to, from, next) {
			getData(to, from, next, reqUrl || to.path)
				.then(data => next(vm => vm.setData(null, data)))
				.catch(err => next(vm => vm.setData(err, null)));
		},
		beforeRouteUpdate(to, from, next) {
			this.err = null;
			this.data = null;

			getData(to, from, next, reqUrl || to.path)
				.then(data => (this.setData(null, data), next()))
				.catch(err => (this.setData(err, null), next()));
		},
	};
}
