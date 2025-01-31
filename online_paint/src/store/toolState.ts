import { makeAutoObservable } from "mobx";
import Brash from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";

export type ToolType = Brash | Rect | Circle | Eraser

class ToolState {
  tool = {} as ToolType
  constructor() {
    makeAutoObservable(this)
  }

  set Tool(tool: ToolType) {
    this.tool = tool
  }
  set fillColor(color: string) {
    this.tool.fillColor = color
  }
  set strokeColor(color: string) {
    this.tool.strokeColor = color
  }
  set lineWidth(width: number) {
    this.tool.lineWidth = width
  }
}

export default new ToolState()