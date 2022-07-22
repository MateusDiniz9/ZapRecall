import logo from "../img/logo.png";

export default function FirstScreen({ screen1, startRecall }) {
  return (
    <div className={screen1}>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button onClick={startRecall}>Iniciar Recall!</button>
    </div>
  );
}
