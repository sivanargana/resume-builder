import { createContext, useContext, type ReactNode } from "react";
import { useQueries } from "@tanstack/react-query";
import { api } from "@/axios";

const ContentContext = createContext({});

function ContentProvider({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => (currentYear - i).toString());
  const team = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [masterdata] = useQueries({
    queries: [
      {
        queryKey: ["masterdata"],
        queryFn: () => api.get("masterdata").then((res) => res.data),
      },
    ],
  });

  return <ContentContext.Provider value={{ masterdata, years, team }}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
