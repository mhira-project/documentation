import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '26d'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '87f'),
    routes: [
      {
        path: '/documentation/docs/category/guide-for-admins',
        component: ComponentCreator('/documentation/docs/category/guide-for-admins', '720'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/installation-guide',
        component: ComponentCreator('/documentation/docs/category/installation-guide', '444'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/license-and-contributors',
        component: ComponentCreator('/documentation/docs/category/license-and-contributors', '3ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/mhira-reporting-guide',
        component: ComponentCreator('/documentation/docs/category/mhira-reporting-guide', 'e97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/user-manual',
        component: ComponentCreator('/documentation/docs/category/user-manual', '27e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/questionnaires',
        component: ComponentCreator('/documentation/docs/guide-for-admins/questionnaires', '6b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/admin-password-reset',
        component: ComponentCreator('/documentation/docs/installation-guide/admin-password-reset', 'c4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/data-and-backup',
        component: ComponentCreator('/documentation/docs/installation-guide/data-and-backup', 'd8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/installing-mhira',
        component: ComponentCreator('/documentation/docs/installation-guide/installing-mhira', '81b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/RStudio',
        component: ComponentCreator('/documentation/docs/installation-guide/RStudio', '5b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/license-and-contributors/contributors',
        component: ComponentCreator('/documentation/docs/license-and-contributors/contributors', '9fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/license-and-contributors/how-to-contribute',
        component: ComponentCreator('/documentation/docs/license-and-contributors/how-to-contribute', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/license-and-contributors/license',
        component: ComponentCreator('/documentation/docs/license-and-contributors/license', 'fd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/mhira-reporting-guide/patient-report-shiny-app',
        component: ComponentCreator('/documentation/docs/mhira-reporting-guide/patient-report-shiny-app', 'b01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/access',
        component: ComponentCreator('/documentation/docs/user-manual/access', '2fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/assessments',
        component: ComponentCreator('/documentation/docs/user-manual/assessments', '827'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/navigation',
        component: ComponentCreator('/documentation/docs/user-manual/navigation', 'af6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/patient-management',
        component: ComponentCreator('/documentation/docs/user-manual/patient-management', 'd29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/reports',
        component: ComponentCreator('/documentation/docs/user-manual/reports', 'b61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/user-manual/workflow',
        component: ComponentCreator('/documentation/docs/user-manual/workflow', '436'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '974'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
