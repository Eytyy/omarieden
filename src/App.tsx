/*
 * Providers
 * These components provide context and functionality to the application.
 * They are used to manage state, themes, and smooth scrolling.
 */
import Lenis from './shared/providers/Lenis';
import { ThemeProvider } from './shared/providers/Theme';
import { AppProvider } from './shared/providers/AppProvider';

/*
 * UI Components
 * These components are used to render the layout and background of the application.
 */

import GridLinesBackground from './shared/ui/GridLinesBackground';
import Header from './shared/ui/Header';
import MainWrapper from './shared/ui/MainWrapper';
import Footer from './shared/ui/footer/Footer';
import HomePage from './features/home/HomePage';

/*
 * Home Page Components
 * These components are used to render different sections of the home page.
 * Each section is conditionally rendered based on the data type.
 */

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Lenis>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white lg:grid lg:grid-cols-[2fr_1fr] ltr:font-sans rtl:font-sans-ar">
            <GridLinesBackground />
            <Header />
            <MainWrapper>
              <HomePage />
              <Footer />
            </MainWrapper>
          </div>
        </Lenis>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
