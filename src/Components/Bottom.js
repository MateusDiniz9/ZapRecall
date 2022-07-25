export default function Bottom({
  gameState1,
  gameState2,
  text,
  results,
  DeckToPlay,
  finalResult,
  imgFinal,
  text1,
  text2,
}) {
  return (
    <>
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
    </>
  );
}
