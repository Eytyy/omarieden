import Footer from './components/Footer';
import GridLinesBackground from './components/GridLinesBackground';
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
import { products } from './data/products';

function App() {
  return (
    <ThemeProvider>
      <Lenis>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white lg:grid lg:grid-cols-[2fr_1fr]">
          <GridLinesBackground />
          <Header />
          <div className="col-span-full ">
            <Hero />
            <SectionsArea>
              <Carousel title="Women New Arrivals" products={products.wommen} />
              <Carousel title="Men New Arrivals" products={products.men} />
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
