import "./drum.scss";
import Display from "../Display/Display";
import DrumPad from "../Pad/DrumPad";

const DrumMachine = () => {
  const data = [
    { text: "Q", id: "sound1" },
    { text: "W", id: "sound2" },
    { text: "E", id: "sound3" },
    { text: "A", id: "sound4" },
    { text: "S", id: "sound5" },
    { text: "D", id: "sound6" },
    { text: "Z", id: "sound7" },
    { text: "X", id: "sound8" },
    { text: "C", id: "sound9" },
  ];

  return (
    <div className="drum" id="drum-machine">
      <div className="top"></div>
      <div className="middle">
        <div className="row">
        {data.slice(0,3).map((item) => (
          <DrumPad id={item.id} text={item.text} />
        ))}
        </div>
        <div className="row">
        {data.slice(3,6).map((item) => (
          <DrumPad id={item.id} text={item.text} />
        ))}
        </div>
        <div className="row">
        {data.slice(6,10).map((item) => (
          <DrumPad id={item.id} text={item.text} />
        ))}
        </div>


      </div>
      <div className="bottom">
        <Display />
      </div>
    </div>
  );
};

export default DrumMachine;
