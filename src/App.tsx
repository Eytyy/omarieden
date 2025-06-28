import Lenis from './components/providers/Lenis';
import { ThemeProvider } from './components/providers/Theme';
import GridLinesBackground from './components/ui/GridLinesBackground';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import Footer from './components/footer/Footer';
import { AppProvider } from './components/providers/AppProvider';
import MainWrapper from './components/ui/MainWrapper';
import { data } from './data/home';
import Section from './components/sections/Section';

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
                {data.map((section) => (
                  <Section key={section._id} section={section} />
                ))}
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
