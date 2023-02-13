

import React from 'react'

const formatTime=(time)=>{
  if(time>60){
    const min=Math.floor(time/60);
    const sec=(time%60)
    if(min<=9){
      return `0${min}min ${sec}sec`
    }
    if(min>9 && min<60){
      return `${min}min ${sec}sec`

    }
    if(min>60){
      const hour=Math.floor(min/60)
      return `${hour}hr ${min}min ${sec}sec`
    }
  }

  return `${time} sec`
}

const Timer = ({time}) => {
  
  const newTime=formatTime(time)
  
  return (
    <div>
      <h4>Timer {newTime}</h4>
    </div>
  )
}

export default React.memo(Timer)