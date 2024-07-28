interface IBase {
  id: number 
  name: string
}

export type IType = IBase
export type IBrand = IBase
export type IInfo = {
  [index: string]: string | number;
  id: number;
  title: string;
  description: string;
}
export type IDevice = IBase & {
  price: number; 
  rating: number; 
  img: string, 
  info: IInfo[]
}
export type IDevices = {count: number; rows: IDevice[]}

export interface ModalProps {
  show: boolean
  onHide: () => any
}