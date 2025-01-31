import Brush from "./Brush";

export default class Eraser extends Brush {
  mouseDown: boolean = false
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }

  draw(x: number, y: number) {
    this.ctx!.strokeStyle = 'white'
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}
