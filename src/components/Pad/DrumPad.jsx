import { startTransition } from "react";
import "./pad.scss";
import { useEffect } from "react";
import sound1 from '../../sounds/punch.mp3'


const DrumPad = ({ id, text, sound, setDisplay }) => {
    const startSound = (e) => {
      console.log()
      if (!e || e.code == "Key"+text){
        const soundElem =  document.getElementById(text);
        soundElem.currentTime = 0;
        soundElem.play();
        setDisplay(sound);
      }

    }

    useEffect(() => {
      document.addEventListener('keydown', startSound)
    })
    


  return (
    <div className="drum-pad" id={id} onClick={()=>{startSound(false)}} >
      {text}
      <audio autoPlay src={require(`../../sounds/${sound}.mp3`)} className="clip" id={text}></audio>
    </div>
  );
};

export default DrumPad;
