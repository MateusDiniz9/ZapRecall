import react from "react";
import vector from "../img/Vector.png";
import setinha from "../img/setinha.png";
import wrong from "../img/errado.png";
import almost from "../img/almost.png";
import right from "../img/Right.png";

function Question({
  index,
  question,
  answer,
  results,
  setResults,
  finishGame,
}) {
  const [box1, setBox1] = react.useState("question");
  const [box2, setBox2] = react.useState("question-box hidden");
  const [box3, setBox3] = react.useState("answer-box hidden");
  const [box4, setBox4] = react.useState("after-answer-box hidden");
  const [imgBox4, setImgBox4] = react.useState({});
  function showQuestion() {
    setBox1("question hidden");
    setBox2("question-box");
  }
  function showAnswer() {
    setBox2("question-box hidden");
    setBox3("answer-box");
  }

  function notRemember() {
    setBox3("answer-box hidden");
    setBox4("after-answer-box wrong");
    setImgBox4(wrong);
    setResults([...results, wrong]);
    finishGame();
  }
  function almostRemember() {
    setBox3("answer-box hidden");
    setBox4("after-answer-box almost");
    setImgBox4(almost);
    setResults([...results, almost]);
    finishGame();
  }
  function remember() {
    setBox3("answer-box hidden");
    setBox4("after-answer-box remember");
    setImgBox4(right);
    setResults([...results, right]);
    finishGame();
  }
  return (
    <>
      <div className={box1}>
        <h5>Pergunta {index + 1}</h5>
        <img src={vector} alt="vector" onClick={showQuestion} />
      </div>

      <div className={box2}>
        <h5>{question}</h5>
        <img src={setinha} alt="setinha" onClick={showAnswer} />
      </div>

      <div className={box3}>
        <h5>{answer}</h5>
        <div className="answer">
          <button onClick={notRemember}>Não lembrei</button>
          <button onClick={almostRemember}>Quase não lembrei</button>
          <button onClick={remember}>Zap!</button>
        </div>
      </div>
      <div className={box4}>
        <h5>Pergunta {index + 1}</h5>
        <img src={imgBox4} alt="result" />
      </div>
    </>
  );
}

export default function Questions({
  DeckToPlay,
  results,
  setResults,
  finishGame,
  gameState3,
}) {
  return (
    <div className={gameState3}>
      {DeckToPlay.map((question, index) => (
        <Question
          index={index}
          key={index}
          question={question.question}
          answer={question.answer}
          results={results}
          setResults={setResults}
          finishGame={finishGame}
          DeckToPlay={DeckToPlay}
        />
      ))}
    </div>
  );
}
