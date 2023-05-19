import { createExternalRouteRef, createRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'plugin-customize-api-docs',
});

export const registerComponentRouteRef = createExternalRouteRef({
  id: 'register-component',
  optional: true,
});

