import type { RouteRecordRaw } from 'vue-router'

export const marketingRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/features/marketing/layouts/MarketingLayout.vue'),
    children: [
      {
        path: '',
        name: 'marketing-home',
        component: () => import('@/features/marketing/pages/HomePage.vue'),
      },
    ],
  },
]
