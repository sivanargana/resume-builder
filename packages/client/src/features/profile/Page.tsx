import { useQuery } from "@tanstack/react-query";
export function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      let res = await fetch("http://localhost:3000/api/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      return res.json();
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error?.message}</p>}

      {data?.map((user: any) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
}
