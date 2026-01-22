import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        ghost: 'hover:bg-subtle hover:text-subtle-foreground aria-expanded:bg-subtle aria-expanded:text-subtle-foreground',
        subtle: 'bg-subtle text-subtle-foreground hover:bg-subtle/70 aria-expanded:bg-subtle aria-expanded:text-subtle-foreground',
        muted: 'bg-muted text-foreground hover:bg-subtle hover:text-subtle-foreground aria-expanded:bg-subtle aria-expanded:text-subtle-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 gap-2 px-4 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*="size-"])]:size-5',
        xs: 'h-8 gap-1 px-3 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*="size-"])]:size-4',
        sm: 'h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*="size-"])]:size-4',
        lg: 'h-11 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*="size-"])]:size-5',

        icon: 'size-10 [&_svg:not([class*="size-"])]:size-5',
        'icon-xs': 'size-8 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*="size-"])]:size-4',
        'icon-sm': 'size-9 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*="size-"])]:size-4',
        'icon-lg': 'size-11 [&_svg:not([class*="size-"])]:size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant = 'default', size = 'default', ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
