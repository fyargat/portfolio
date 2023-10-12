import { AboutScreen } from '@/screens/AboutScreen';
import { ContactScreen } from '@/screens/ContactScreen';
import { IntroScreen } from '@/screens/IntroScreen';
import { ProjectsScreen } from '@/screens/ProjectsScreen';
import { SkillsScreen } from '@/screens/SkillsScreen';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <IntroScreen />
        <ProjectsScreen />
        <AboutScreen />
        <SkillsScreen />
        <ContactScreen />
      </main>
    </>
  );
}
