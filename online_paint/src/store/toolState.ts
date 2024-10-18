import { makeAutoObservable } from "mobx";
import Brash from "../tools/Brush";

export type ToolType = Brash

class ToolState {
  tool = {} as ToolType

  constructor() {
    
    makeAutoObservable(this)
  }

  setTool(tool: ToolType) {
    this.tool = tool
  }
}

export default new ToolState()