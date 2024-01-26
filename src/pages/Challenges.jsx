import Header from '../components/Challenge/Header.jsx';
import Challenges from '../components/Challenge/Challenges.jsx';
import ChallengesContextProvider from '../store/challenges-context.jsx';

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
