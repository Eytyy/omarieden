import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import OmarIconApath from './icons/OmarIconApath';

export default function Ticker() {
  return (
    <Marquee speed={100} lang="en" className="absolute lg:bottom-8 bottom-4">
      <h2>
        {[0, 1, 2].map((i) => (
          <div
            key={`marquee-t-${i}`}
            className="marquee-run inline-block flex-shrink-0"
            // if you want spacing *between* runs, you can put a margin on the first:
          >
            <motion.svg
              className="fill-black dark:fill-white mx-4 inline-block h-8 w-8"
              viewBox="0 0 1000 1001"
              fill="none"
            >
              <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: [360, 0] }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <OmarIconApath />
              </motion.g>
            </motion.svg>
            <span>
              Our new and exclusive Rewards program is here{' '}
              <a href="#" className="underline underline-offset-4">
                discover more
              </a>
            </span>
          </div>
        ))}
      </h2>
    </Marquee>
  );
}
