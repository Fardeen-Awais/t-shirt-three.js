import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/config/helpers'

const CustomButton = ({type, title, customStyles, handleClick}) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) =>  
  {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      }
    }
    else if(type==='outline'){
      return {
        borderWidth: '1px',
        backgroundColor: snap.color,
        color:  getContrastingColor(snap.color),
      }
    }
  }
  
  return (
    <button onClick={handleClick} style={generateStyles(type)} className={`px-2 py-1 flex-1 ${customStyles}`}>{title}</button>
  )
}
export default CustomButton