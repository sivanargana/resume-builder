import { api } from "@/axios";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const ProfileContext = createContext({});

function Root({ children }: any) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await api.get("profile");
      return data;
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      {data && (
        <ProfileContext.Provider value={{ data, isLoading, error }}>
          <div className="grid grid-cols-1 gap-5">{children}</div>
        </ProfileContext.Provider>
      )}
    </>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default Root;
