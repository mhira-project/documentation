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
    component: ComponentCreator('/documentation/docs', '1f4'),
    routes: [
      {
        path: '/documentation/docs/category/guide-for-admins',
        component: ComponentCreator('/documentation/docs/category/guide-for-admins', '720'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/guide-for-admins-1',
        component: ComponentCreator('/documentation/docs/category/guide-for-admins-1', '44f'),
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
        path: '/documentation/docs/guide-for-admins/assessment-titles',
        component: ComponentCreator('/documentation/docs/guide-for-admins/assessment-titles', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/departments',
        component: ComponentCreator('/documentation/docs/guide-for-admins/departments', '5f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/messages-and-disclaimers',
        component: ComponentCreator('/documentation/docs/guide-for-admins/messages-and-disclaimers', '985'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/overview',
        component: ComponentCreator('/documentation/docs/guide-for-admins/overview', '6f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/patient-statuses',
        component: ComponentCreator('/documentation/docs/guide-for-admins/patient-statuses', '065'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/permissions',
        component: ComponentCreator('/documentation/docs/guide-for-admins/permissions', '3ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/questionnaires',
        component: ComponentCreator('/documentation/docs/guide-for-admins/questionnaires', '0d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/Reports',
        component: ComponentCreator('/documentation/docs/guide-for-admins/Reports', 'd89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/roles',
        component: ComponentCreator('/documentation/docs/guide-for-admins/roles', 'b1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/superadmin',
        component: ComponentCreator('/documentation/docs/guide-for-admins/superadmin', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/users',
        component: ComponentCreator('/documentation/docs/guide-for-admins/users', 'a5d'),
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
        component: ComponentCreator('/documentation/docs/installation-guide/data-and-backup', '5fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/installing-mhira',
        component: ComponentCreator('/documentation/docs/installation-guide/installing-mhira', '714'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/requirements',
        component: ComponentCreator('/documentation/docs/installation-guide/requirements', 'adb'),
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
        component: ComponentCreator('/documentation/docs/license-and-contributors/contributors', 'a66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/license-and-contributors/how-to-contribute',
        component: ComponentCreator('/documentation/docs/license-and-contributors/how-to-contribute', '534'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/license-and-contributors/license',
        component: ComponentCreator('/documentation/docs/license-and-contributors/license', '18e'),
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
        path: '/documentation/docs/mhira-reporting-guide/reporting_overview',
        component: ComponentCreator('/documentation/docs/mhira-reporting-guide/reporting_overview', '92b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/practical-scenarios/chile',
        component: ComponentCreator('/documentation/docs/practical-scenarios/chile', '18e'),
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
