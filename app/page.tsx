'use client';
import { About, Contact, Experience, Services } from '@/templates';
import { Navbar } from '@/molecules';

const App = () => {
  return (
    <main className="p-5 md:px-20 xl:px-40bg-primary dark:bg-bgDark">
      <Navbar />
      <About />
      <Services />
      <Experience/>
      <Contact  />
    </main>
  );
};
export default App;
