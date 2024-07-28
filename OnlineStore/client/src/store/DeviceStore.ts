import { makeAutoObservable } from "mobx"
import { IType, IBrand, IDevice, IDevices } from "../models";

export default class DeviceStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType;
  _selectedBrand: IBrand;
  _totalCount: number;
  _page: number;
  _limit: number;

  constructor() {
    this._types = []
    this._brands = []
    this._devices = []//{count: 0, rows: []}
    this._selectedType = {} as IType
    this._selectedBrand = {} as IBrand
    this._totalCount = 0
    this._page = 1
    this._limit = 3

    makeAutoObservable(this)
  }

  setTypes(value: IType[]) {
    this._types = value
  }

  setBrands(value: IBrand[]) {
    this._brands = value
  }

  setDevices(value: IDevice[]) {
    this._devices = value
  }

  setSelectedType(value: IType) {
    this.setPage(1)
    this._selectedType = value
  }

  setSelectedBrand(value: IBrand) {
    this.setPage(1)
    this._selectedBrand = value
  }

  setTotalCount(value: number) {
    this._totalCount = value
  }

  setPage(value: number) {
    this._page = value
  }

  setLimit(value: number) {
    this._limit = value
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get totalCount() {
    return this._totalCount
  }

  get page() {
    return this._page
  }

  get limit() {
    return this._limit
  }
}