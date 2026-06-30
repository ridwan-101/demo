import type { RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@/shared/layouts/DefaultLayout.vue'

export const marketingRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'marketing-home',
        component: () => import('@/features/marketing/pages/HomePage.vue'),
      },
    ],
  },
]
