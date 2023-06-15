import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
const CustomButton = ({type, title, customStyles}) => {
  const snap = useSnapshot(state);


  const generateStyles = (type) =>  
  {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    }  
  }
  
  return (
    <button style={generateStyles(type)} className={`px-2 py-1 flex-1 ${customStyles}`}>{title}</button>
  )
}
export default CustomButton