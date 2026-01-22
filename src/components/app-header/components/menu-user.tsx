import { useIsMobile } from '@/hooks/use-mobile';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { IconChevronDown, IconLogout, IconUser } from '@tabler/icons-react';

export function MenuUser() {
  const isMobile = useIsMobile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="h-auto px-1 py-1" />}>
        {isMobile ? (
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-secondary text-secondary-foreground">FH</AvatarFallback>
          </Avatar>
        ) : (
          <Item className="p-0">
            <ItemActions>
              <Avatar size="lg">
                <AvatarImage />
                <AvatarFallback className="bg-secondary text-secondary-foreground">FH</AvatarFallback>
              </Avatar>
            </ItemActions>

            <ItemContent className="gap-0">
              <ItemTitle>Firuzcan Hacıyev</ItemTitle>
              <ItemDescription>Operator</ItemDescription>
            </ItemContent>

            <ItemActions>
              <IconChevronDown className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser />
            <span>Hesabım</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive">
            <IconLogout />
            <span>Çıxış</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
