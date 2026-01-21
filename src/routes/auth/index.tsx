import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  const search = Route.useSearch();

  return <Navigate to="/auth/signin" search={search} replace />;
}
