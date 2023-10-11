import { Header } from '@/components/Header';

import { AboutScreen } from '@/screens/AboutScreen';
import { IntroScreen } from '@/screens/IntroScreen';
import { ProjectsScreen } from '@/screens/ProjectsScreen';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroScreen />
        <ProjectsScreen />
        <AboutScreen />
        <div style={{ height: '100vh', backgroundColor: 'lightblue' }} />
      </main>
    </>
  );
}
