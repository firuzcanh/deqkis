import { Button } from '@/components/ui/button';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='space-y-4 p-4'>
      <div className='flex gap-2'>
        <Button size="xs" variant="secondary"><IconSearch data-icon="inline-start" />Get Started <IconArrowRight data-icon="inline-end" /></Button>
        <Button size="sm" variant="secondary"><IconSearch data-icon="inline-start" />Get Started <IconArrowRight data-icon="inline-end" /></Button>
        <Button variant="secondary"><IconSearch data-icon="inline-start" />Get Started <IconArrowRight data-icon="inline-end" /></Button>
        <Button size="lg" variant="secondary"><IconSearch data-icon="inline-start" />Get Started <IconArrowRight data-icon="inline-end" /></Button>
      </div>

      <div className='flex gap-2'>
        <Button size="xs" variant="default">Get Started</Button>
        <Button size="sm" variant="default">Get Started</Button>
        <Button variant="default">Get Started</Button>
        <Button size="lg" variant="default">Get Started</Button>
      </div>

      <div className='flex gap-2'>
        <Button size="xs" variant="secondary">Get Started</Button>
        <Button size="sm" variant="secondary">Get Started</Button>
        <Button variant="secondary">Get Started</Button>
        <Button size="lg" variant="secondary">Get Started</Button>
      </div>

      <div className='flex gap-2'>
        <Button size="xs" variant="outline">Get Started</Button>
        <Button size="sm" variant="outline">Get Started</Button>
        <Button variant="outline">Get Started</Button>
        <Button size="lg" variant="outline">Get Started</Button>
      </div>

      <div className='flex gap-2'>
        <Button size="icon-xs" variant="outline"><IconSearch /></Button>
        <Button size="icon-sm" variant="outline"><IconSearch /></Button>
        <Button variant="outline" size="icon"><IconSearch /></Button>
        <Button size="icon-lg" variant="outline"><IconSearch /></Button>
      </div>
    </div>
  );
}
