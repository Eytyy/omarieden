import { data } from './data/home';

/*
 * Providers
 * These components provide context and functionality to the application.
 * They are used to manage state, themes, and smooth scrolling.
 */
import Lenis from './components/providers/Lenis';
import { ThemeProvider } from './components/providers/Theme';
import { AppProvider } from './components/providers/AppProvider';

/*
 * UI Components
 * These components are used to render the layout and background of the application.
 */

import GridLinesBackground from './components/ui/GridLinesBackground';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import MainWrapper from './components/ui/MainWrapper';

/*
 * Home Page Components
 * These components are used to render different sections of the home page.
 * Each section is conditionally rendered based on the data type.
 */
import ProductsCarouselSection from './components/sections/products-carousel';
import EditorialSection from './components/sections/editorial-section';
import Footer from './components/ui/footer/Footer';
import FeaturedBrandsSection from './components/sections/featured-brands';
import HeroSliderSection from './components/sections/hero-slider';
import FeaturedCollectionSection from './components/sections/featured-collections';

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
                {data.map((section) => {
                  switch (section._type) {
                    case 'carousel':
                      return <ProductsCarouselSection key={section._id} {...section} />;
                    case 'heroSlider':
                      return <HeroSliderSection key={section._id} {...section} />;
                    case 'featuredCollections':
                      return <FeaturedCollectionSection key={section._id} {...section} />;
                    case 'editorial':
                      return <EditorialSection key={section._id} {...section} />;
                    case 'featuredBrands':
                      return <FeaturedBrandsSection key={section._id} {...section} />;
                    default:
                      return null;
                  }
                })}
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
