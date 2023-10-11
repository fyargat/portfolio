import { Header } from '@/components/Header';
import { IntroScreen } from '@/components/IntroScreen';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroScreen />
        <div style={{ height: '100vh', backgroundColor: 'tomato' }} />
        <div style={{ height: '100vh', backgroundColor: 'blue' }} />
      </main>
    </>
  );
}
