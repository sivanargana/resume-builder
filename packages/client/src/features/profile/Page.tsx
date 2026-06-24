import { api } from "@/axios";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
export function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get("profile/cmqqnfbsg0001jxosz73j6fo6");
    },
  });

  console.log(data);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error?.message}</p>}

      <Card>
        <CardContent>wefewofef</CardContent>
      </Card>

      {/* {data?.data?.map((user: any) => (
        <div key={user.id}>{user.email}</div>
      ))} */}
    </div>
  );
}
