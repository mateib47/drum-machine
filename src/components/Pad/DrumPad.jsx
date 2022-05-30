import { startTransition } from "react";
import "./pad.scss";
import { useEffect } from "react";
import sound1 from '../../sounds/punch.mp3'


const DrumPad = ({ id, text, sound }) => {
    const startSound = (e) => {
      if (e.code == text){
        const sound =  document.getElementById(text);
        sound.currentTime = 0;
        sound.play();
      }

    }

    useEffect(() => {
      document.addEventListener('keydown', startSound)
    })
    


  return (
    <div className="drum-pad" id={id} onClick={()=>{startSound()}} >
      {text}
      <audio autoPlay src={require(`../../sounds/${sound}.mp3`)} className="clip" id={text}></audio>
    </div>
  );
};

export default DrumPad;
