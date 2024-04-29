import Header from "../components/Challenge/Header.jsx";
import Challenges from "../components/Challenge/Challenges.jsx";
import ChallengesContextProvider from "../store/challenges-context.jsx";
import { Link } from "react-router-dom";

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Manage your Tasks
      </h1>

      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
