import { Header } from '@/components/Header';
import { IntroScreen } from '@/components/IntroScreen';
import { ProjectsScreen } from '@/components/ProjectsScreen';

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
