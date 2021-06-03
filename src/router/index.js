import { createRouter, createWebHistory } from "vue-router";

import Frame from "@/views/Frame.vue";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Frame,
			children: [
				{
					path: "/",
					component: () => import("@/views/home/Index.vue")
				},
				{
					path: "course",
					component: () => import("@/views/course/Index.vue")
				},
				{
					path: "submission",
					component: () => import("@/views/submission/Index.vue")
				},
				{
					path: "self",
					component: () => import("@/views/self/Index.vue")
				}
			]
		},
		{
			path: "/course/detail",
			component: () => import("@/views/course/Detail.vue")
		},
		{
			path: "/self/users",
			component: () => import("@/views/self/Users.vue")
		}
	]
});
