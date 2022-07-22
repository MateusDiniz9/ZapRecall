import FirstScreen from "./FirstScreen";
import Game from "./Game";
import react from "react";
import "../css/reset.css";
import "../css/style.css";

export default function App() {
  const [screen1, setScreen1] = react.useState("first-screen");
  const [screen2, setScreen2] = react.useState("game-screen hidden");

  function startRecall() {
    setScreen1("first-screen hidden");
    setScreen2("game-screen");
  }
  return (
    <>
      <FirstScreen screen1={screen1} startRecall={startRecall} />
      <Game screen2={screen2} />
    </>
  );
}
