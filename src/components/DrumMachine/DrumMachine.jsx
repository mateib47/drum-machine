import './drum.scss'
import Display from '../Display/Display'

const DrumMachine = () => {
  return (
    <div className="drum" id='drum-machine'>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom">
                    <Display/>
        </div>
    </div>
  )
}

export default DrumMachine