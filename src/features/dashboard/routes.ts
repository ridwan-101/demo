import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/features/dashboard/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: () => import('@/features/dashboard/pages/HomePage.vue'),
      },
    ],
  },
]
