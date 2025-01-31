import React, { useEffect, useRef } from 'react'
import '../style/sass/canvas.sass'
import { observer } from 'mobx-react-lite'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'

export default observer(function Canvas() {
  const canvasRef = useRef({} as HTMLCanvasElement)

  useEffect(() => {
    canvasState.canvas = canvasRef.current
    toolState.tool = new Brush(canvasRef.current)
  }, [])

  const mouseDownEvent = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  return (
    <div className='canvas-container'>
      <canvas 
        onMouseDown={mouseDownEvent}
        ref={canvasRef} 
        className='canvas' 
        width={500} 
        height={300} 
      />
    </div>
  )
})