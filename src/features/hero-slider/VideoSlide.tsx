import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const VideoSlide = ({ src, poster }: { src: string; poster?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.75 });

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.play().catch((error) => console.error('Video play error:', error));
    } else if (ref.current) {
      ref.current.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      className="w-full h-full object-center object-cover absolute top-0 left-0"
    />
  );
};

export default VideoSlide;
