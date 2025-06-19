import { cn } from '../lib/utils';

export default function ProductImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex absoltue top-0 left-0 w-full h-full justify-center items-center',
        className
      )}
    >
      <div className="dark:bg-white bg-black rounded-full h-full aspect-square" />
    </div>
  );
}
