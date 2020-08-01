module.exports = {
	devServer: {
		overlay: false,
	},
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
          @import '@/assets/scss/common/variables.scss';
          @import '@/assets/scss/common/default.scss';
          `,
			},
		},
	},
};
