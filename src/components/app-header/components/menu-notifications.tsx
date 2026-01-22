import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from '@/components/ui/empty';
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/ui/popover';
import { IconBell, IconBellRinging2 } from '@tabler/icons-react';

export function MenuNotifications() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [notifications, setNotifications] = useState<any[]>([]);

  function handleToggleNotifications() {
    setNotifications((prev) => {
      if (prev.length > 0) {
        return [];
      }

      return [
        { id: 1, title: 'Bildiriş 1', description: 'Bildiriş haqqında məlumat' },
        { id: 2, title: 'Bildiriş 2', description: 'Bildiriş haqqında məlumat' },
      ];
    });
  }

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="ghost" size="icon" />}>
        <IconBell />
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader className="border-b">
          <PopoverTitle>Bildirişlər</PopoverTitle>
        </PopoverHeader>

        <PopoverBody className="my-2">
          {!notifications?.length ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <IconBellRinging2 />
                </EmptyMedia>
                <EmptyDescription>Bildirişlər yoxdur</EmptyDescription>
              </EmptyHeader>

              <EmptyContent>
                <Button variant="default" size="sm" onClick={handleToggleNotifications}>
                  Bildirişləri doldur
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            notifications.map((notification) => (
              <Item className="p-0">
                <ItemContent>
                  <ItemTitle>{notification.title}</ItemTitle>
                  <ItemDescription>{notification.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))
          )}
        </PopoverBody>

        <PopoverFooter data-hidden={!notifications?.length} className="border-t data-[hidden=true]:hidden">
          <Button variant="subtle">Hamısını göstər</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
