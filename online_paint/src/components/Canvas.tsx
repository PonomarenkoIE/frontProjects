import React, { useEffect, useRef } from 'react'
import '../style/sass/canvas.sass'
import { observer } from 'mobx-react-lite'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'

export default observer(function Canvas() {
  const canvasRef = useRef({} as HTMLCanvasElement)

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current))
  }, [])

  return (
    <div className='canvas-container'>
      <canvas ref={canvasRef} className='canvas' width={600} height={400}/>
    </div>
  )
})