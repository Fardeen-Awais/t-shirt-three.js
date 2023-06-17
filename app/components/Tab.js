import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import Image from 'next/image'

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state)
  const activeStyles = isFilterTab && isActiveTab ? {backgroundColor: snap.color , opacity: 0.5} : {backgroundColor: "transparent" , opacity: 1} 
  
  return (
    <div key={tab.name} className={`tabbtn ${isFilterTab ? 'rounded-full glassmorphism ' : 'rounded-4 '}`} onClick={handleClick} style={activeStyles}>
      <Image className='w-7 h-7 md:h-12 md:w-12 cursor-pointer' src={tab.icon} width={100} height={100} alt={tab.name}/>
    </div>
  )
}

export default Tab