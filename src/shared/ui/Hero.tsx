import HeroLogo from './HeroLogo';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <div className="hero min-h-svh lg:h-screen grid grid-rows-[1fr_min-content] items-center justify-center bg-white relative border-b border-b-black dark:bg-black dark:border-b-white w-full pt-[132px] lg:pt-0">
      <HeroLogo />
      <Ticker />
    </div>
  );
}
