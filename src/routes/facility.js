const FACILITY_ROUTES = [
	{
		path: '/facilities',
		name: 'FacilityListPage',
		components: {
			contents: () => import('@/pages/facility/FacilityListPage.vue'),
		},
	},
	{
		path: '/facilities/:mt10id',
		name: 'FacilityDetailPage',
		components: {
			contents: () => import('@/pages/facility/FacilityDetailPage.vue'),
		},
		props: {
			default: true,
		},
	},
];

export default FACILITY_ROUTES;
