import React from 'react'
import '../style/sass/toolbar.sass'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import canvasState from '../store/canvasState'
import Rect from '../tools/Rect'
import Circle from '../tools/Circle'
import Eraser from '../tools/Eraser'
import Line from '../tools/Line'

export default function Toolbar() {

  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    toolState.fillColor = e.target.value
  }

  return (
    <div className='toolbar'>
      <button className="toolbar__btn brush" onClick={() => toolState.tool = new Brush(canvasState.canvas)}/>
      <button className="toolbar__btn rect" onClick={() => toolState.tool = new Rect(canvasState.canvas)}/>
      <button className="toolbar__btn circle" onClick={() => toolState.tool = new Circle(canvasState.canvas)}/>
      <button className="toolbar__btn eraser" onClick={() => toolState.tool = new Eraser(canvasState.canvas)}/>
      <button className="toolbar__btn line" onClick={() => toolState.tool = new Line(canvasState.canvas)}/>
      <input className="toolbar__btn" type='color' onChange={changeColor}/>
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
      <button className="toolbar__btn redo"  onClick={() => canvasState.redo()}/>
      <button className="toolbar__btn save" />
    </div>
  )
}
