import { startTransition } from "react";
import "./pad.scss";
import { useEffect } from "react";

const DrumPad = ({ id, text, sound, setDisplay, power, volume }) => {

  const startSound = (e) => {
    console.log(power);
    if (power && (!e || e.code == "Key" + text)) {
      const soundElem = document.getElementById(text);
      const div = document.getElementById(id);
      div.style.backgroundColor = ' #5aac5c ';
      div.style.boxShadow = 'none';
      setTimeout(function(){
        div.style.backgroundColor = '#412a22';
        div.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
      },500);
      soundElem.volume = volume / 100;
      soundElem.currentTime = 0;
      soundElem.play();
      setDisplay(sound);
      
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", startSound);
  });

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={() => {
        startSound(false);
      }}
    >
      {text}
      <audio
        autoPlay
        src={require(`../../sounds/${sound}.mp3`)}
        className="clip"
        id={text}
      ></audio>
    </div>
  );
};

export default DrumPad;
