import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import OmarIconApath from '../icons/OmarIconApath';
import { useLang } from '../providers/useLang';

export default function Ticker() {
  const { lang } = useLang();
  return (
    <div className="hero--ticker pb-4 lg:pb-8 w-full overflow-hidden">
      <Marquee speed={100} lang={lang}>
        <h2>
          {[0, 1, 2, 3].map((i) => (
            <div key={`marquee-t-${i}`} className="marquee-run inline-block flex-shrink-0">
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
              {lang == 'en' ? (
                <span>
                  Our new and exclusive Rewards program is here{' '}
                  <a href="#" className="underline underline-offset-4">
                    discover more
                  </a>
                </span>
              ) : (
                <span>
                  برنامج المكافآت الجديد والحصري لدينا هنا{' '}
                  <a href="#" className="underline underline-offset-4">
                    اكتشف المزيد
                  </a>
                </span>
              )}
            </div>
          ))}
        </h2>
      </Marquee>
    </div>
  );
}
