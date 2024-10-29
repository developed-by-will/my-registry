import { Switch } from '@/components/project/Switch';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import NavigationMenu from './NavigationMenu';

export default function Navbar() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="w-full flex justify-center bg-transparent backdrop-blur sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 text-primary container">
        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pt-14">
                <DialogClose className="w-full p-0">
                  <Sidebar />
                </DialogClose>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/">Example</Link>
          <NavigationMenu />
        </div>
        <div className="flex items-center space-x-2">
          {currentTheme === 'light' ? (
            <Sun className="h-4 w-4 text-blue-500" />
          ) : (
            <Moon className="h-4 w-4 text-blue-500" />
          )}
          <Switch
            id="theme-switch"
            checked={currentTheme === 'dark'}
            className="bg-gray-500"
            onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </div>
      </nav>
    </div>
  );
}
