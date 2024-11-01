import { Registry } from '@/registry/schema';

export const ui: Registry = [
  {
    name: 'breadcrumbs',
    type: 'registry:ui',
    registryDependencies: ['breadcrumb'],
    dependencies: ['@radix-ui/react-icons'],
    files: [
      {
        path: 'ui/breadcrumbs/index.tsx',
        target: 'components/breeze-ui/breadcrumbs.tsx',
        type: 'registry:ui'
      }
    ]
  }
];
