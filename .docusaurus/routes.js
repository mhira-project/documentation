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
    component: ComponentCreator('/documentation/docs', 'cb4'),
    routes: [
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
        path: '/documentation/docs/License-and-contributors/contributors',
        component: ComponentCreator('/documentation/docs/License-and-contributors/contributors', '704'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/License-and-contributors/how-to-contribute',
        component: ComponentCreator('/documentation/docs/License-and-contributors/how-to-contribute', '03d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/License-and-contributors/license',
        component: ComponentCreator('/documentation/docs/License-and-contributors/license', '27b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/MHIRA-reporting-guide/patient-report-shiny-app',
        component: ComponentCreator('/documentation/docs/MHIRA-reporting-guide/patient-report-shiny-app', '5c1'),
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
