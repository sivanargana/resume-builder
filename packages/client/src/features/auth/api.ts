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
};
