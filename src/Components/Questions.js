import react from "react";

function Question({ index, question, answer }) {
  const [box1, setBox1] = react.useState("question");
  const [box2, setBox2] = react.useState("question-box hidden");
  const [box3, setBox3] = react.useState("answer-box hidden");
  function showQuestion() {
    setBox1("question hidden");
    setBox2("question-box");
  }
  function showAnswer() {
    setBox2("question-box hidden");
    setBox3("answer-box");
  }

  return (
    <>
      <div className={box1}>
        <h5>Pergunta {index + 1}</h5>
        <img
          src="./ZapRecall-Recursos/Vector.png"
          alt="vector"
          onClick={showQuestion}
        />
      </div>

      <div className={box2}>
        <h5>{question}</h5>
        <img
          src="./ZapRecall-Recursos/setinha.png"
          alt="setinha"
          onClick={showAnswer}
        />
      </div>

      <div className={box3}>
        <h5>{answer}</h5>
        <div className="answer">
          <button>Não lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </div>
      </div>
    </>
  );
}

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

export default function Questions() {
  return (
    <div className="questions">
      {deck.map((question, index) => (
        <Question
          index={index}
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}
