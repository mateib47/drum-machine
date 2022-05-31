import './display.scss';

const Display = ({display}) => {
  return (
    <div className='display' id='display'>
        <div className="textArea">{display}</div>
    </div>
  )
}

export default Display