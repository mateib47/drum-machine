import "./drum.scss";
import Display from "../Display/Display";
import DrumPad from "../Pad/DrumPad";
import { useState, useEffect } from "react";
import Switch from '@material-ui/core/Switch';



const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const label = { inputProps: { 'aria-label': 'Power' } };


  const data = [
    { text: "Q", id: "sound1", sound: "punch" },
    { text: "W", id: "sound2", sound: "bass" },
    { text: "E", id: "sound3", sound: "punch" },
    { text: "A", id: "sound4", sound: "punch" },
    { text: "S", id: "sound5", sound: "punch" },
    { text: "D", id: "sound6", sound: "punch" },
    { text: "Z", id: "sound7", sound: "punch" },
    { text: "X", id: "sound8", sound: "punch" },
    { text: "C", id: "sound9", sound: "punch" },
  ];
  return (
    <div className="drum" id="drum-machine">
      <div className="top">
      <Switch {...label} defaultChecked color="default" onChange={() => {setPower(!power)}}/>

      </div>
      <div className="middle">
        <div className="row">
          {data.slice(0, 3).map((item) => (
            <DrumPad
              id={item.id}
              text={item.text}
              sound={item.sound}
              setDisplay={setDisplay}
              power={power}
            />
          ))}
        </div>
        <div className="row">
          {data.slice(3, 6).map((item) => (
            <DrumPad
              id={item.id}
              text={item.text}
              sound={item.sound}
              setDisplay={setDisplay}
              power={power}
            />
          ))}
        </div>
        <div className="row">
          {data.slice(6, 10).map((item) => (
            <DrumPad
              id={item.id}
              text={item.text}
              sound={item.sound}
              setDisplay={setDisplay}
              power={power}
            />
          ))}
        </div>
      </div>
      <div className="bottom">
        <Display display={display} />
      </div>
    </div>
  );
};

export default DrumMachine;
