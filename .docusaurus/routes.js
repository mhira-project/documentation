import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '78f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '496'),
    routes: [
      {
        path: '/docs/category/guide-for-admins',
        component: ComponentCreator('/docs/category/guide-for-admins', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/implementation-scenarios',
        component: ComponentCreator('/docs/category/implementation-scenarios', 'e03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/installation-guide',
        component: ComponentCreator('/docs/category/installation-guide', 'e04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/license-and-contributors',
        component: ComponentCreator('/docs/category/license-and-contributors', '379'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/mhira-reporting',
        component: ComponentCreator('/docs/category/mhira-reporting', '2cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/user-manual',
        component: ComponentCreator('/docs/category/user-manual', '38e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/videos',
        component: ComponentCreator('/docs/category/videos', 'c1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/assessment-titles',
        component: ComponentCreator('/docs/guide-for-admins/assessment-titles', '03d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/departments',
        component: ComponentCreator('/docs/guide-for-admins/departments', '539'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/messages-and-disclaimers',
        component: ComponentCreator('/docs/guide-for-admins/messages-and-disclaimers', '26f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/overview',
        component: ComponentCreator('/docs/guide-for-admins/overview', 'b18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/patient-statuses',
        component: ComponentCreator('/docs/guide-for-admins/patient-statuses', '40b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/permissions',
        component: ComponentCreator('/docs/guide-for-admins/permissions', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/questionnaires',
        component: ComponentCreator('/docs/guide-for-admins/questionnaires', '980'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/reports',
        component: ComponentCreator('/docs/guide-for-admins/reports', 'e6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/roles',
        component: ComponentCreator('/docs/guide-for-admins/roles', 'fd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/superadmin',
        component: ComponentCreator('/docs/guide-for-admins/superadmin', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guide-for-admins/users',
        component: ComponentCreator('/docs/guide-for-admins/users', '2e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/implementation-scenarios/chile',
        component: ComponentCreator('/docs/implementation-scenarios/chile', '682'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/admin-password-reset',
        component: ComponentCreator('/docs/installation-guide/admin-password-reset', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/data-and-backup',
        component: ComponentCreator('/docs/installation-guide/data-and-backup', '12d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/installing-mhira',
        component: ComponentCreator('/docs/installation-guide/installing-mhira', '162'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/requirements',
        component: ComponentCreator('/docs/installation-guide/requirements', 'bfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation-guide/rstudio',
        component: ComponentCreator('/docs/installation-guide/rstudio', '4fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '533'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/license-and-contributors/contributors',
        component: ComponentCreator('/docs/license-and-contributors/contributors', '389'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/license-and-contributors/how-to-contribute',
        component: ComponentCreator('/docs/license-and-contributors/how-to-contribute', '6f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/license-and-contributors/license',
        component: ComponentCreator('/docs/license-and-contributors/license', 'bd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mhira-reporting-guide/graphql_api',
        component: ComponentCreator('/docs/mhira-reporting-guide/graphql_api', '69e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mhira-reporting-guide/overview',
        component: ComponentCreator('/docs/mhira-reporting-guide/overview', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mhira-reporting-guide/patient-report-shiny-app',
        component: ComponentCreator('/docs/mhira-reporting-guide/patient-report-shiny-app', 'bae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mhira-reporting-guide/using-shiny-apps-for-reporting',
        component: ComponentCreator('/docs/mhira-reporting-guide/using-shiny-apps-for-reporting', '74e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/access',
        component: ComponentCreator('/docs/user-manual/access', '9b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/assessments',
        component: ComponentCreator('/docs/user-manual/assessments', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/introduction',
        component: ComponentCreator('/docs/user-manual/introduction', 'c13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/navigation',
        component: ComponentCreator('/docs/user-manual/navigation', '728'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/patient-management',
        component: ComponentCreator('/docs/user-manual/patient-management', 'a70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-manual/reports',
        component: ComponentCreator('/docs/user-manual/reports', 'ffe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Videos/instructional-videos-albanian',
        component: ComponentCreator('/docs/Videos/instructional-videos-albanian', '103'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f6e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
