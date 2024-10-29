import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenu as ShadcnNavigationMenu
} from '@/components/ui/navigation-menu';
import { useChangeComponent } from '@/hooks/useChangeComponent';
import { blocksConfig, componentsConfig } from '@/registry/components';
import Link from 'next/link';

export default function NavigationMenu() {
  const { changeComponent } = useChangeComponent();

  const navigationMenuLinkStyle = `bg-transparent text-blue-500 ${navigationMenuTriggerStyle()}`;

  return (
    <ShadcnNavigationMenu className="ms-24 hidden lg:block">
      <NavigationMenuList>
        {componentsConfig.length > 0 && (
          <NavigationMenuItem className="bg-transparent">
            <Link
              href={`/component/${componentsConfig[0].slug}`}
              onClick={() => changeComponent(componentsConfig[0])}
              legacyBehavior
              passHref
              className="bg:transparent"
            >
              <NavigationMenuLink className={navigationMenuLinkStyle}>
                Components
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}

        {blocksConfig.length > 0 && (
          <NavigationMenuItem>
            <Link
              href={`/block/${blocksConfig[0].slug}`}
              onClick={() => changeComponent(blocksConfig[0])}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuLinkStyle}>Blocks</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </ShadcnNavigationMenu>
  );
}
