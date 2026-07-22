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
    let user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
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

  init() {
    return new Promise((resolve: any, reject: any) => {
      google.accounts.oauth2
        .initTokenClient({
          client_id: import.meta.env.VITE_CLIENT_ID,
          scope: "openid email profile",
          ux_mode: "popup",
          callback: (response: any) => {
            this.continueWithGoogle(response).then(resolve).catch(reject);
          },
          error_callback: reject,
        })
        .requestAccessToken();
    });
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
