import { redirect } from "react-router";
import { API } from "./api";

export async function guard(_role: any) {
  const token = API.TOKEN;
  const role = API.USER.role;

  if (!token) {
    throw redirect("/auth");
  }
  if (role !== _role) {
    throw redirect("/unauthorized");
  }

  return null;
}
