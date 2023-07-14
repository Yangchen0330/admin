import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
  id: "geeker-user",
  state: (): UserState => ({
    token: "",
    userInfo: { nickname: "", headimgurl: "" }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
      console.log(this.token);
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      console.log(userInfo);
      this.userInfo = userInfo;
      console.log(this.userInfo);
    }
  },
  persist: piniaPersistConfig("geeker-user")
});
