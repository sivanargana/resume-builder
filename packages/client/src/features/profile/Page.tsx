import { api } from "@/axios";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
export function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get("profile/cmqth1a560000r2osou18zuco");
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      <Card>
        <CardContent>wdqwdwqd</CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="text-red-500">skills</div>
          {data?.data?.skills.map((user: any) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="text-red-500">education</div>
          {data?.data?.education.map((user: any) => (
            <div key={user.id}>{user.degree}</div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="text-red-500">experience</div>
          {data?.data?.experience.map((user: any) => (
            <div key={user.id}>{user.company}</div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
