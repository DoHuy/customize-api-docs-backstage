import { createExternalRouteRef, createRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'customize-api-docs',
});

export const registerComponentRouteRef = createExternalRouteRef({
  id: 'register-component',
  optional: true,
});

