import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Lenis from './components/providers/Lenis';
import { ThemeProvider } from './components/providers/Theme';
import Carousel from './components/sections/Carousel';
import Editorial from './components/sections/Editorial';
import GridTypeA from './components/sections/GridTypeA';
import GridTypeB from './components/sections/GridTypeB';
import Slider from './components/sections/Slider';
import SectionsArea from './components/SectionsArea';

function App() {
  return (
    <ThemeProvider>
      <Lenis>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white grid grid-cols-[2fr_1fr]">
          <div className="fixed grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-screen w-full left-0 top-0 hidden md:grid">
            <div className="border-r" />
            <div className="border-r lg:block hidden" />
            <div className="border-r hidden 2xl:block" />
            <div />
          </div>
          <Header />
          <div className="col-span-full">
            <Hero />
            <SectionsArea>
              <Carousel title="Women New Arrivals" />
              <Carousel title="Men New Arrivals" />
              <Slider />
              <GridTypeB />
              <GridTypeA />
              <Editorial />
            </SectionsArea>
            <Footer />
          </div>
        </div>
      </Lenis>
    </ThemeProvider>
  );
}

export default App;
