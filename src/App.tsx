import Lenis from './components/providers/Lenis';
import { ThemeProvider } from './components/providers/Theme';
import Carousel from './components/sections/Carousel';
import Editorial from './components/sections/Editorial';
import Highlights from './components/sections/Highlights';
import FeaturedCollections from './components/sections/FeaturedCollections';
import Slider from './components/sections/Slider';
import { products } from './data/products';
import GridLinesBackground from './components/ui/GridLinesBackground';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import Footer from './components/ui/Footer';
import { AppProvider } from './components/providers/AppProvider';
import { slides } from './data/slides';
import MainWrapper from './components/ui/MainWrapper';

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Lenis>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white lg:grid lg:grid-cols-[2fr_1fr] ltr:font-sans rtl:font-sans-ar">
            <GridLinesBackground />
            <Header />
            <MainWrapper>
              <Hero />
              <div className="relative">
                <Carousel title="Women New Arrivals" products={products.wommen} />
                <Carousel title="Men New Arrivals" products={products.men} />
                <Slider data={slides} />
                <FeaturedCollections />
                <Highlights />
                <Editorial />
              </div>
              <Footer />
            </MainWrapper>
          </div>
        </Lenis>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
