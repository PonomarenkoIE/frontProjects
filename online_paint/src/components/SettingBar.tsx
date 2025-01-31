import React from 'react'
import toolState from '../store/toolState'

export default function SettingBar() {
  return (
    <div className='setting-bar'>
      <label 
        htmlFor="line-width" 
        style={{marginLeft: 10, marginRight: 10}}
      >Толщина линии</label>
      <input 
        id='line-width' 
        type="number" 
        defaultValue={1} 
        min={1} 
        max={50}
        onChange={(e) => toolState.lineWidth = Number(e.target.value)}
      />
      <label htmlFor="stroke-color">Цвет обводки</label>
      <input 
        id='stroke-color' 
        type="color"
        onChange={(e) => toolState.strokeColor = e.target.value}
      />
    </div>
  )
}
