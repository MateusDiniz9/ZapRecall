import react from "react";
import Questions from "./Questions";
import logopequena from "../img/logo-pequeno.png";
import wrong from "../img/errado.png";

import sad from "../img/sad.png";
import party from "../img/party.png";

const deck = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    question: "Componentes devem iniciar com __ ",
    answer: "letra maiúscula",
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
  },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];
export default function Game({ screen2 }) {
  function comparador() {
    return Math.random() - 0.5;
  }
  const DeckToPlay = deck.sort(comparador);
  const [results, setResults] = react.useState([]);
  const finalResult = results.map((result, index) => (
    <img src={result} key={index} alt="result" />
  ));

  const [gameState1, setGameState1] = react.useState("bottom");
  const [gameState2, setGameState2] = react.useState("bottom end-game hidden");
  const [text1, setText1] = react.useState("");
  const [text2, setText2] = react.useState("");
  const [imgFinal, setImgFinal] = react.useState("");
  const [gameState3, setGameState3] = react.useState("questions");

  function finishGame() {
    if (results.length === DeckToPlay.length - 1) {
      setGameState1("bottom hidden");
      setGameState2("bottom end-game");
      setGameState3("questions end-game-question");
    }
    if (results.includes(wrong)) {
      setText1("Putz...");
      setText2("Ainda faltam alguns... Mas não desanime!");
      setImgFinal(sad);
    } else {
      setText1("Parabéns!");
      setText2("Você não esqueceu de nenhum flashcard!");
      setImgFinal(party);
    }
  }
  let text = "";
  return (
    <div className={screen2}>
      <div className="top">
        <img src={logopequena} alt="logo-pequeno" />
        ZapRecall
      </div>
      <Questions
        DeckToPlay={DeckToPlay}
        results={results}
        setResults={setResults}
        finishGame={finishGame}
        gameState3={gameState3}
      />
      <div className={gameState1}>
        <h4>{text}</h4>
        <h4>
          {results.length}/{DeckToPlay.length} CONCLUÍDOS
        </h4>
        <div className="results">{finalResult}</div>
      </div>
      <div className={gameState2}>
        <h4>
          <img src={imgFinal} alt="imagem" />
          {text1}
        </h4>
        <h4>{text2}</h4>
        <h4>
          {results.length}/{DeckToPlay.length} CONCLUÍDOS
        </h4>
        <div className="results">{finalResult}</div>
      </div>
    </div>
  );
}
