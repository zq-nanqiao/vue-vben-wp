import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:area-chart',
      order: 10,
      title: $t('page.reports.title'),
      keepAlive: true,
    },
    name: 'Reports',
    path: '/reports',
    children: [
      {
        name: 'design-pqc',
        path: '/reports/design-pqc',
        component: () => import('#/views/reports/design-pqc/index.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: $t('page.reports.design-pqc'),
          keepAlive: true,
        },
      },
      {
        name: 'fqc-recheck',
        path: '/reports/fqc-recheck',
        component: () => import('#/views/reports/fqc-recheck/index.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: $t('page.reports.fqc-recheck'),
          keepAlive: true,
        },
      },
      {
        name: 'translate-pqc',
        path: '/reports/translate-pqc',
        component: () => import('#/views/reports/translate-pqc/index.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: $t('page.reports.translate-pqc'),
          keepAlive: true,
        },
      },
    ],
  },
];

export default routes;
