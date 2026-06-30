import type { RouteRecordRaw } from 'vue-router'

export const storefrontRoutes: RouteRecordRaw[] = [
  {
    path: '/site/:slug',
    component: () => import('@/features/storefront/layouts/StorefrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'storefront-home',
        component: () => import('@/features/storefront/pages/HomePage.vue'),
      },
    ],
  },
]
