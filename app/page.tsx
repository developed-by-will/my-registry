import HomePage from '@/app/(pages)/Homepage/page';
import { Metadata } from 'next';
import { commonOpenGraph, commonSEO } from './commonSEO';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Component Registry';
  const description = 'This is a description';

  return {
    title,
    description,
    ...commonSEO,
    openGraph: {
      title,
      description,
      ...commonOpenGraph
    }
  };
}

export default function Index() {
  return <HomePage />;
}
