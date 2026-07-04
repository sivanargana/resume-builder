import { redirect } from "react-router";

export async function guard(_role: any) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    throw redirect("/auth");
  }
  if (role !== _role) {
    throw redirect("/unauthorized");
  }

  return null;
}
