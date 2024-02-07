'use client';
import { Toaster } from 'react-hot-toast';
import { About, Contact, Experience, Services } from '@/templates';
import { Navbar } from '@/molecules';
import { useButtonUp } from '@/hooks';
import { ButtonTop } from '@/atoms';

const App = () => {
  const { buttonUp, handleScrollToTop } = useButtonUp();
  return (
    <main className="p-5 md:px-20 xl:px-40bg-primary dark:bg-bgDark">
      {buttonUp && <ButtonTop onClick={handleScrollToTop} />}
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Toaster />
    </main>
  );
};
export default App;
