import React from 'react'

function TimeWarining(props) {
  return props.time > -1? (
    <div className='popup-effect'>
      <div className='time-warning'>
        <div className='text'>
          <p>Вы провели за чтением уже 20 минут</p>
          <p>Возможно, следует сделать перерыв</p>
        </div>
        <div className='close-btn' onClick={props.click}>OK</div>
      </div>
    </div>
  ):''
}

export default TimeWarining