import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { customizeApiDocsPlugin, CustomizeApiDocsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(customizeApiDocsPlugin)
  .addPage({
    element: <CustomizeApiDocsPage />,
    title: 'Root Page',
    path: '/customize-api-docs'
  })
  .render();
