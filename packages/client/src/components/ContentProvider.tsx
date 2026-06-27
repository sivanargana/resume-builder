import { createContext, useContext } from "react";

const ContentContext = createContext({});

function ContentProvider({ children }: any) {
  return <ContentContext.Provider value={{ name: "siva" }}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
