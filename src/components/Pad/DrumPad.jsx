import "./pad.scss";

const DrumPad = ({ id, text }) => {
  return (
    <div className="drum-pad" id={id}>
      {text}
      <audio src="../../public/assets/audios/punch.mp3"></audio>
    </div>
  );
};

export default DrumPad;
