import { createContext, useContext, type ReactNode } from "react";
import { useQueries } from "@tanstack/react-query";
import { api } from "@/axios";

const ContentContext = createContext({});

function ContentProvider({ children }: { children: ReactNode }) {
  const [masterdata] = useQueries({
    queries: [
      {
        queryKey: ["masterdata"],
        queryFn: () => api.get("masterdata").then((res) => res.data),
      },
    ],
  });

  return <ContentContext.Provider value={{ masterdata }}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
