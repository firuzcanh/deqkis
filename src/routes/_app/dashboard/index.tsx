import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { IconArrowRight, IconStarFilled } from '@tabler/icons-react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div data-slot="page-layout" className="flex flex-col flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-3">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Seçilmiş sənədlər</CardTitle>
            <CardAction>
              <Button variant="muted" size="xs" className="rounded-full">
                Hamısına bax
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <Item render={<Link to="/" />} key={index} className="rounded-xl" variant="muted">
                <ItemActions>
                  <IconStarFilled className="size-6 text-amber-500" />
                </ItemActions>

                <ItemContent>
                  <ItemDescription>12.10.2025</ItemDescription>
                  <ItemTitle className="text-base line-clamp-1">Rəsmi sənəd №564 haqqında ümumi məlumat</ItemTitle>
                </ItemContent>

                <ItemActions>
                  <Button render={<div />} nativeButton={false} variant="outline" size="icon-xs" className="rounded-full">
                    <IconArrowRight />
                    <span className="sr-only">Bax</span>
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
