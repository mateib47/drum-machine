import { startTransition } from "react";
import "./pad.scss";
import { useEffect } from "react";

const DrumPad = ({ id, text }) => {
  const muie = [];
    const startSound = () => {

      const sound = document.getElementById(text);
      sound.currentTime = 0;
      sound.play();
    }


  return (
    <div className="drum-pad" id={id} onClick={()=>{startSound()}} >
      {text}
      <audio src="../../../public/assets/audios/punch.mp3" className="clip" id={text}></audio>
    </div>
  );
};

export default DrumPad;
