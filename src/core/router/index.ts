import { createRouter, createWebHistory } from 'vue-router'

import { dashboardRoutes } from '@/features/dashboard/routes'
import { marketingRoutes } from '@/features/marketing/routes'
import { storefrontRoutes } from '@/features/storefront/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...marketingRoutes, ...dashboardRoutes, ...storefrontRoutes],
})

export default router
