import { createContext, useContext, type ReactNode } from "react";
// import { useQueries } from "@tanstack/react-query";
// import { api } from "@/axios";

const ContentContext = createContext({});

function ContentProvider({ children }: { children: ReactNode }) {
  // const [workStatus] = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["workStatus"],
  //       queryFn: () => api.get("workStatus").then((res) => res.data),
  //     },
  //     {
  //       queryKey: ["settings"],
  //       queryFn: () => api.get("settings").then((res) => res.data),
  //     },
  //     {
  //       queryKey: ["notifications"],
  //       queryFn: () => api.get("notifications").then((res) => res.data),
  //     },
  //   ],
  // });

  return <ContentContext.Provider value={{ name: "siva" }}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
