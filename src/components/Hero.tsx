import HeroLogo from './HeroLogo';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <div className="pb-20 lg:h-screen flex flex-col items-center justify-center bg-white relative border-b border-b-black dark:bg-black dark:border-b-white w-full">
      <div className="mx-auto w-full md:w-2/3 2xl:w-1/2 max-w-[1024px] 2xl:max-h-[80svh] px-4">
        <HeroLogo />
      </div>
      <Ticker />
    </div>
  );
}
