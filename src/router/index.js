import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Settings from '@/views/Settings'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			icon: 'dashboard'
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings,
			icon: 'settings'
		}
	]
})