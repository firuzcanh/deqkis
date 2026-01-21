import { IconFileDescription, IconFolder, IconHome } from '@tabler/icons-react';
import { useLocation } from '@tanstack/react-router';

export function useSidebarItems() {
  const { pathname } = useLocation();

  const groups = [
    {
      title: 'Əsas',
      items: [
        {
          title: 'Ana səhifə',
          icon: <IconHome />,
          to: '/',
        },
        {
          title: 'Sənədlərim',
          icon: <IconFileDescription />,
          to: '/documents',
          items: [
            {
              title: 'Bütün sənədlər',
              to: '/documents/all',
            },
          ],
        },
      ],
    },

    {
      title: 'Qovluqlar',
      items: [
        {
          title: 'Qovluq 1',
          icon: <IconFolder />,
          to: '/documents/1',
        },
        {
          title: 'Qovluq 2',
          icon: <IconFolder />,
          to: '/documents/2',
          items: [
            {
              title: 'Bütün sənədlər',
              to: '/documents/all',
            },
          ],
        },
      ],
    },
  ];

  return groups.map((group) => {
    return {
      ...group,
      items: group.items.map((item) => {
        return {
          ...item,
          isActive: pathname === item.to,
        };
      }),
    };
  });
}
