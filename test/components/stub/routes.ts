import { wait } from '@dvcol/common-utils/common/promise';

import ErrorComponent from './ErrorComponent.test.svelte';
import HelloComponent from './HelloComponent.test.svelte';
import LoadingComponent from './LoadingComponent.test.svelte';

import type { Route } from '~/models/route.model.js';

import { toLazyComponent } from '~/utils/svelte.utils.js';

export const routes: Route[] = [
  { name: 'hello', path: '/hello', component: HelloComponent, props: { title: 'Hello' }, meta: { key: 'Hello' } },
  {
    name: 'goodbye',
    path: '/goodbye',
    component: () => import('./GoodbyeComponent.test.svelte'),
    props: { title: 'Goodbye' },
    meta: { key: 'Goodbye' },
  },
  {
    name: 'error',
    path: '/error',
    component: () => Promise.reject(new Error('Loading error')),
    error: ErrorComponent,
    props: { title: 'Error' },
    meta: { key: 'Error' },
  },
  {
    name: 'loading',
    path: '/loading',
    component: async () => {
      await wait(200);
      return import('./HelloComponent.test.svelte');
    },
    loading: LoadingComponent,
    props: { title: 'Loading' },
    meta: { key: 'Loading' },
  },
  {
    name: 'default-loading',
    path: '/default-loading',
    component: async () => {
      await wait(200);
      return import('./HelloComponent.test.svelte');
    },
    props: { title: 'Default Loading' },
    meta: { key: 'Default Loading' },
  },
  {
    name: 'default-error',
    path: '/default-error',
    component: () => Promise.reject(new Error('Default Error')),
    props: { title: 'Default Error' },
    meta: { key: 'Default Error' },
  },
  {
    name: 'nested',
    path: '/nested',
    components: {
      default: HelloComponent,
      nested: toLazyComponent(() => import('./GoodbyeComponent.test.svelte')),
    },
    properties: {
      default: { title: 'Nested Hello' },
      nested: { title: 'Nested Goodbye' },
    },
    meta: { key: 'Nested' },
  },
];
