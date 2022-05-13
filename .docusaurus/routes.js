import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/markdown-page/',
    component: ComponentCreator('/documentation/markdown-page/', 'e9a'),
    exact: true
  },
  {
    path: '/documentation/docs/',
    component: ComponentCreator('/documentation/docs/', 'e54'),
    routes: [
      {
        path: '/documentation/docs/category/guide-for-admins/',
        component: ComponentCreator('/documentation/docs/category/guide-for-admins/', 'f71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/installation-guide/',
        component: ComponentCreator('/documentation/docs/category/installation-guide/', '931'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/license-and-contributors/',
        component: ComponentCreator('/documentation/docs/category/license-and-contributors/', '3e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/mhira-reporting-guide/',
        component: ComponentCreator('/documentation/docs/category/mhira-reporting-guide/', 'b27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/guide-for-admins/questionnaires/',
        component: ComponentCreator('/documentation/docs/guide-for-admins/questionnaires/', 'ab4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/admin-password-reset/',
        component: ComponentCreator('/documentation/docs/installation-guide/admin-password-reset/', '589'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/data-and-backup/',
        component: ComponentCreator('/documentation/docs/installation-guide/data-and-backup/', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/installing-mhira/',
        component: ComponentCreator('/documentation/docs/installation-guide/installing-mhira/', '34e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/installation-guide/RStudio/',
        component: ComponentCreator('/documentation/docs/installation-guide/RStudio/', 'c7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro/',
        component: ComponentCreator('/documentation/docs/intro/', '59d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/License-and-contributors/contributors/',
        component: ComponentCreator('/documentation/docs/License-and-contributors/contributors/', 'ad8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/License-and-contributors/how-to-contribute/',
        component: ComponentCreator('/documentation/docs/License-and-contributors/how-to-contribute/', '031'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/License-and-contributors/license/',
        component: ComponentCreator('/documentation/docs/License-and-contributors/license/', '0cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/MHIRA-reporting-guide/patient-report-shiny-app/',
        component: ComponentCreator('/documentation/docs/MHIRA-reporting-guide/patient-report-shiny-app/', '864'),
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
