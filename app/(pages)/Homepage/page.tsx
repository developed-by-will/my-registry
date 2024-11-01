'use client';

import Breadcrumbs, { BreadcrumbType } from '@/components/breeze-ui/breadcrumbs';

export default function HomePage() {
  const breadcrumbs: BreadcrumbType[] = [
    { text: 'Admin Dashboard', url: '/' },
    { text: 'Resources' },
    { text: 'Create Resource' }
  ];

  return (
    <div className="flex flex-col justify-center px-4 gap-8 mt-4 lg:mt-8 mb-16">
      <header className="text-center">
        <h1 className="text-sm sm:text-2xl">Component Registry</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-500">Hello world!</h2>
      </header>

      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} position="justify-center" />}
    </div>
  );
}
