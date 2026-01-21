import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/documents/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_app/documents/"!</div>;
}
