import { Header } from '@/components/Header';

import { IntroScreen } from '@/screens/IntroScreen';
import { ProjectsScreen } from '@/screens/ProjectsScreen';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroScreen />
        <ProjectsScreen />
        <div style={{ height: '100vh', backgroundColor: 'blue' }} />
      </main>
    </>
  );
}
