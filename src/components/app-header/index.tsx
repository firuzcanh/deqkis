import { SidebarTrigger } from '@/components/ui/sidebar';
import { MenuUser } from './components/menu-user';
import { MenuNotifications } from './components/menu-notifications';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 min-h-17 md:min-h-20 bg-background-secondary">
      <div className="flex items-center justify-start gap-5">
        <SidebarTrigger />

        <h1 className="font-semibold text-2xl lg:block hidden">DƏQKİS - İTMİM</h1>
      </div>

      <div />

      <div className="flex items-center justify-end gap-5">
        <MenuNotifications />

        <MenuUser />
      </div>
    </header>
  );
}
