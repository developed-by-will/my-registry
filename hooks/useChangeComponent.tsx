import { ComponentType } from '@/registry/components/metadata';
import { useRouter } from 'next/navigation';

export const useChangeComponent = () => {
  const router = useRouter();

  const changeComponent = (component: ComponentType) => {
    const slug = component.slug;
    const route = component.type === 'component' ? `/component/${slug}` : `/block/${slug}`;

    router.push(route);
  };

  return { changeComponent };
};
