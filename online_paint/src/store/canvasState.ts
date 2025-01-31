import { makeAutoObservable } from "mobx";

export type CanvasType = HTMLCanvasElement

class CanvasState {
  canvas = {} as CanvasType
  undoList: string[] = []
  redoList: string[] = []
  constructor() {
    makeAutoObservable(this)
  }

  set Canvas(canvas: CanvasType) {
    this.canvas = canvas
  }

  pushToUndo(data: any) {
    this.undoList.push(data)
  }

  pushToRedo(data: any) {
    this.redoList.push(data)
  }

  undo() {
    let dataUrl = this.undoList.pop()
    if (dataUrl) {
      this.redoList.push(this.canvas.toDataURL())
      let ctx = this.canvas.getContext('2d')
      let img = new Image()
      img.src = dataUrl
      img.onload = () => {
        ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    }
    else {
      console.log('Отменять нечего')
    }
  }
  redo() {    
    let dataUrl = this.redoList.pop()
    if (dataUrl) {
      this.undoList.push(this.canvas.toDataURL())
      let ctx = this.canvas.getContext('2d')
      let img = new Image()
      img.src = dataUrl
      img.onload = () => {
        ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    }
    else {
      console.log('Картинка актуальна')
    }
  }

}

export default new CanvasState()