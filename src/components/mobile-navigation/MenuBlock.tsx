import { cn } from '../../lib/utils';

type MenuBlockProps<C extends React.ElementType> = {
  children: React.ReactNode;
  as?: C;
} & React.ComponentPropsWithoutRef<C>;

const MenuBlock = <C extends React.ElementType = 'div'>({
  children,
  as,
  className,
  ...props
}: MenuBlockProps<C>) => {
  const Component = as || 'div';
  return (
    <Component
      className={cn('flex flex-col items-center justify-center p-4 border-r', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MenuBlock;
