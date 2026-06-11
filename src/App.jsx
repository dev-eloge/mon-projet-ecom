import { useState } from "react";
import LandingPage from "./pages/landingPage";
import SimulatorPage from "./pages/simulatorpage";

export default function App() {
  const [view, setView] = useState("landing");

  return (
    <>
      {view === "landing" ? (
        <LandingPage start={() => setView("sim")} />
      ) : (
        <SimulatorPage back={() => setView("landing")} />
      )}
    </>
  );
}