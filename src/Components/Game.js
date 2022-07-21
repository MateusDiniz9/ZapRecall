import Questions from "./Questions";

export default function Game({ screen2 }) {
  return (
    <div className={screen2}>
      <div className="top">
        <img src="./ZapRecall-Recursos/logo-pequeno.png" alt="logo-pequeno" />
        ZapRecall
      </div>
      <Questions />
      <div className="bottom">
        <h4>0/4 CONCLUÍDOS</h4>
      </div>
    </div>
  );
}
