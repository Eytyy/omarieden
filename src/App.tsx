import Lenis from './components/providers/Lenis';
import { ThemeProvider } from './components/providers/Theme';
import Carousel from './components/sections/Carousel';
import Editorial from './components/sections/Editorial';
import Highlights from './components/sections/Highlights';
import Collections from './components/sections/Collections';
import Slider from './components/sections/Slider';
import { products } from './data/products';
import GridLinesBackground from './components/ui/GridLinesBackground';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import Footer from './components/ui/Footer';
import { LangProvider } from './components/providers/LangProvider';

function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <Lenis>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white lg:grid lg:grid-cols-[2fr_1fr] ltr:font-sans rtl:font-sans-ar">
            <GridLinesBackground />
            <Header />
            <div className="col-span-full ">
              <Hero />
              <div className="relative">
                <Carousel title="Women New Arrivals" products={products.wommen} />
                <Carousel title="Men New Arrivals" products={products.men} />
                <Slider />
                <Collections />
                <Highlights />
                <Editorial />
              </div>
              <Footer />
            </div>
          </div>
        </Lenis>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
