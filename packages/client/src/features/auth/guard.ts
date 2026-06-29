import { redirect } from "react-router";

export async function guard() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw redirect("/auth");
  }

  return null;
}
