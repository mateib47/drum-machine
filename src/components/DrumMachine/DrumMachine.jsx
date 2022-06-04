import "./drum.scss";
import Display from "../Display/Display";
import DrumPad from "../Pad/DrumPad";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const label = { inputProps: { "aria-label": "Power" } };

  const data = [
    { text: "Q", id: "sound1", sound: "Bass" },
    { text: "W", id: "sound2", sound: "Punch" },
    { text: "E", id: "sound3", sound: "Sticks" },
    { text: "A", id: "sound4", sound: "Floor Tom" },
    { text: "S", id: "sound5", sound: "Small Tom" },
    { text: "D", id: "sound6", sound: "Medium Tom" },
    { text: "Z", id: "sound7", sound: "Snare" },
    { text: "X", id: "sound8", sound: "Hi Hat" },
    { text: "C", id: "sound9", sound: "Ba Bum Tss" },
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
          <Stack spacing={2} direction="row" sx={{ mb: 1}} alignItems="center">
            <VolumeDown />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={changeVolume}
              sx={{
                color: "#412a22",
                padding:'30px 0',
                "& .MuiSlider-thumb": {
                  overflow: "hidden",
                  width:'12px',
                  height:'12px',
                  margin:'0 6px',
                },
              }}
            />
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
