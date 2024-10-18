import { makeAutoObservable } from "mobx";

export type CanvasType = HTMLCanvasElement

class CanvasState {
  canvas = {} as CanvasType

  constructor() {
    
    makeAutoObservable(this)
  }

  setCanvas(canvas: CanvasType) {
    this.canvas = canvas
  }
}

export default new CanvasState()