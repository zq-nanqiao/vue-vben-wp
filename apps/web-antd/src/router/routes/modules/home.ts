import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ant-design:home-filled',
      order: -1,
      title: $t('page.home.title'),
    },
    name: 'home',
    path: '/',
    redirect: '/workspace',
    children: [
      {
        name: 'workspace',
        path: '/workspace',
        component: () => import('#/views/dashboard/workspace/index.vue'),
        meta: {
          icon: 'ant-design:home-filled',
          title: $t('page.home.title'),
          hideInMenu: true,
        },
      },
    ],
  },
];
export default routes;
