import DeviceStore from "./DeviceStore"
import UserStore from "./UserStore"

export class RootStore {
  userStore: UserStore;
  deviceStore: DeviceStore;

  constructor() {
    this.userStore = new UserStore()
    this.deviceStore = new DeviceStore()
  }
}
