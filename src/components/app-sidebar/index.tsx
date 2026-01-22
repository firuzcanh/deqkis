import { Link, useLocation } from '@tanstack/react-router';
import { Fragment, useEffect } from 'react';

import { Brand } from '@/components/ui/brand';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuIcon,
  SidebarMenuItem,
  SidebarSeparatorLine,
  useSidebar,
} from '@/components/ui/sidebar';
import { IconLayoutSidebarLeftCollapseFilled, IconLayoutSidebarLeftExpandFilled } from '@tabler/icons-react';

import { useSidebarItems } from './hooks/use-sidebar-items';

export function AppSidebar() {
  const location = useLocation();
  const sidebar = useSidebar();

  const sidebarItems = useSidebarItems();

  useEffect(() => {
    sidebar.setOpenMobile(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="space-y-2">
        <div className="flex items-center justify-start">
          <Link to="/" className="hover:opacity-80">
            {sidebar.state === 'collapsed' ? <Brand className="w-8 h-auto" variant="icon" /> : <Brand className="w-22.5 h-auto" variant="default" />}
          </Link>
        </div>

        <div className="-mx-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={sidebar.toggleSidebar}>
                {sidebar.state === 'collapsed' ? (
                  <Fragment>
                    <SidebarMenuIcon>
                      <IconLayoutSidebarLeftExpandFilled className="size-6!" />
                    </SidebarMenuIcon>
                    <span>Menunu aç</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <SidebarMenuIcon>
                      <IconLayoutSidebarLeftCollapseFilled className="size-6!" />
                    </SidebarMenuIcon>
                    <span>Menunu bağla</span>
                  </Fragment>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      <SidebarSeparatorLine />

      <SidebarContent>
        {sidebarItems.map((group, groupIndex) => {
          return (
            <SidebarGroup key={groupIndex}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item, itemIndex) => {
                    return (
                      <SidebarMenuItem key={itemIndex}>
                        <SidebarMenuButton render={<Link to={item.to} />} {...(item.isActive && { 'data-active': true })}>
                          <SidebarMenuIcon>{item.icon}</SidebarMenuIcon>
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
