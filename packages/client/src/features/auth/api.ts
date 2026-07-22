import { api } from "@/axios";
declare const google: any;
export const API = {
  get TOKEN(): string {
    return sessionStorage.getItem("token") ?? "";
  },

  set TOKEN(v: string) {
    if (v) {
      sessionStorage.setItem("token", v);
    } else {
      sessionStorage.removeItem("token");
    }
  },

  get USER(): any {
    return JSON.parse(sessionStorage.getItem("user") ?? "");
  },

  set USER(v: any) {
    if (v) {
      sessionStorage.setItem("user", JSON.stringify(v));
    } else {
      sessionStorage.removeItem("user");
    }
  },

  isAuth() {
    return this.TOKEN ? true : false;
  },

  init(cb: any) {
    return google.accounts.oauth2
      .initTokenClient({
        client_id: import.meta.env.VITE_CLIENT_ID,
        scope: "openid email profile",
        ux_mode: "popup",
        callback: (response: any) => {
          cb(response);
        },
      })
      .requestAccessToken();
  },
  getUser() {
    return api.get<any>(`${import.meta.env.VITE_API_URL}users/${this.USER.id}`);
  },
  login(body: any) {
    return api.post(`${import.meta.env.VITE_API_URL}auth/login`, body);
  },
  register(body: any) {
    return api.post<any>(`${import.meta.env.VITE_API_URL}auth/register`, body);
  },
  continueWithGoogle(body: any) {
    return api.post(`${import.meta.env.VITE_API_URL}auth/continue-with-google`, body);
  },
};
