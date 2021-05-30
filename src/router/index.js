import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
			children: [
				{
					path: "/",
					component: () => import("@/views/self/Index.vue")
				},
				{
					path: "hotPoint",
					component: () => import("@/views/hotPoint/Index.vue")
				},
				{
					path: "course",
					component: () => import("@/views/course/Index.vue")
				},
				{
					path: "community",
					component: () => import("@/views/community/Index.vue")
				}
			]
		},
		{
			path: "/course/detail",
			component: () => import("@/views/course/Detail.vue")
		}
	]
});
