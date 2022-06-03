import "./drum.scss";
import Display from "../Display/Display";
import DrumPad from "../Pad/DrumPad";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Box from '@mui/material/Box';


const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const label = { inputProps: { "aria-label": "Power" } };

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

  const changePower = () => {
    if (power) {
      setDisplay("");
    }
    setPower(!power);
    console.log(power);
  };

  const changeVolume = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div className="drum" id="drum-machine">
      <div className="top">
        <div className="power">
          <h3>Off</h3>
          <Switch
            {...label}
            defaultChecked
            color="default"
            onChange={() => {
              changePower();
            }}
          />
          <h3>On</h3>
        </div>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} style={{overflow:'none'}}  />
            <VolumeUp />
          </Stack>
        </Box>
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
              volume={volume}
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
              volume={volume}
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
              volume={volume}
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
